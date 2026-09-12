import { Download, FileText } from "lucide-react";

export function UNITADownloadSection() {
  return (
    <section id="download" className="download-section">
      <div className="unita-container">
        <div className="download-box">
          <div className="download-text">
            <p className="section-eyebrow gold">Download & Dokumen Resmi</p>
            <h3>Pusat Unduhan Informasi Akademik & SK Rektor</h3>
            <p>Unduh Panduan Akademik, Kalender Akademik, Dokumen SK Rektor, dan Sertifikat Akreditasi BAN-PT.</p>
          </div>
          <div className="download-actions">
            <a href="#" className="btn-download">
              <Download size={16} /> Panduan Akademik (PDF)
            </a>
            <a href="#" className="btn-download outline">
              <FileText size={16} /> Sertifikat BAN-PT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
