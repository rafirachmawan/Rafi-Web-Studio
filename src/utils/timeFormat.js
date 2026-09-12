/**
 * Format time to Indonesian format (HH:mm)
 */
export function formatTime(date) {
  if (!date) return "--:--";
  
  const d = new Date(date);
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  
  return `${hours}:${minutes}`;
}

/**
 * Format date to Indonesian format
 * Options: "local" (default), "long", "short"
 */
export function formatDate(date, option = "local") {
  if (!date) return "--/--/----";
  
  const d = new Date(date);
  
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  
  const day = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  
  if (option === "long") {
    return `${day} ${month} ${year}`;
  } else if (option === "short") {
    return `${day}/${d.getMonth() + 1}/${year}`;
  }
  
  // Default: local format
  return `${day} ${month} ${year}`;
}
