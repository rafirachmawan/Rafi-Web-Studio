import { unita } from "../data/unita";
import { ShieldCheck } from "lucide-react";

export function UNITACredibilitySection() {
  return (
    <section className="credibility-section">
      <div className="unita-container">
        <div className="credibility-banner">
          <div className="credibility-header">
            <ShieldCheck size={28} className="text-emerald-400" />
            <div>
              <h3>Situs Resmi & Kredibilitas Terverifikasi</h3>
              <p>
                Universitas Tulungagung menggunakan domain tingkat tinggi institusi akademik resmi (<strong>.ac.id</strong>) dan terhubung secara sistemik dengan kementerian.
              </p>
            </div>
          </div>
          <div className="credibility-grid">
            {unita.credibilityNotes.map((note, idx) => (
              <div key={idx} className="credibility-card">
                <div className="credibility-icon">✓</div>
                <div>
                  <h4>{note.title}</h4>
                  <p>{note.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
