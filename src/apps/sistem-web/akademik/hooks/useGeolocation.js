import { useState, useEffect, useCallback } from "react";
import { SCHOOL_INFO } from "../data/mockData";

// Haversine formula — distance between two GPS coordinates in meters
function getDistanceMeters(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export default function useGeolocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [distance, setDistance] = useState(null);
  const [isInRadius, setIsInRadius] = useState(false);

  const requestLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError("Geolocation tidak didukung oleh browser ini.");
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude, accuracy } = position.coords;
        const loc = { lat: latitude, lng: longitude, accuracy };
        setLocation(loc);

        const dist = getDistanceMeters(
          latitude,
          longitude,
          SCHOOL_INFO.lat,
          SCHOOL_INFO.lng,
        );
        setDistance(Math.round(dist));
        setIsInRadius(dist <= SCHOOL_INFO.radiusMeter);
        setLoading(false);
      },
      (err) => {
        setError(
          err.code === 1
            ? "Izin lokasi ditolak. Aktifkan GPS dan izinkan akses lokasi."
            : err.code === 2
              ? "Lokasi tidak tersedia."
              : "Timeout saat mengambil lokasi.",
        );
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    );
  }, []);

  return { location, error, loading, distance, isInRadius, requestLocation };
}
