import { motion } from "framer-motion";
import { unita } from "../../data/unita";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export function UNITAKontakSection() {
  return (
    <section id="kontak" className="kontak-section">
      <div className="unita-container kontak-grid">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="kontak-info"
        >
          <p className="section-eyebrow red">Hubungi Kampus</p>
          <h2 className="section-title">
            Lokasi Kampus <span className="text-blue">Universitas Tulungagung</span>
          </h2>
          <div className="kontak-list">
            <div className="kontak-item">
              <MapPin size={20} className="kontak-icon red" />
              <div>
                <p className="kontak-label">Alamat Lengkap</p>
                <p className="kontak-val">{unita.address}</p>
              </div>
            </div>
            <div className="kontak-item">
              <Phone size={20} className="kontak-icon blue" />
              <div>
                <p className="kontak-label">Telepon Kantor</p>
                <p className="kontak-val">{unita.phone}</p>
              </div>
            </div>
            <div className="kontak-item">
              <Mail size={20} className="kontak-icon red" />
              <div>
                <p className="kontak-label">Email Resmi</p>
                <p className="kontak-val">{unita.email}</p>
              </div>
            </div>
            <div className="kontak-item">
              <Globe size={20} className="kontak-icon blue" />
              <div>
                <p className="kontak-label">Website & Subdomain PMB</p>
                <a href={unita.website} target="_blank" rel="noreferrer" className="kontak-link">
                  {unita.website}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="kontak-map"
        >
          <iframe
            title="Peta Lokasi UNITA Beji Boyolangu"
            src={unita.mapsEmbed}
            className="map-iframe"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
