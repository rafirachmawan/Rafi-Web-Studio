import { unita } from "../data/unita";
import logoUnita from "../../../assets/universitasTulungagung/logoUnita.jpg";

export function UNITAFooter() {
  return (
    <footer className="unita-footer">
      <div className="unita-container footer-inner">
        <div className="footer-brand">
          <img src={logoUnita} alt="UNITA Emblem" className="w-12 h-12 object-contain" />
          <div>
            <p className="footer-name">Universitas Tulungagung (UNITA)</p>
            <p className="footer-short">Yayasan Universitas Tulungagung · Est. 18 Mei 1984</p>
          </div>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Universitas Tulungagung (unita.ac.id). All Rights Reserved.
        </p>
        <div className="footer-links">
          <a href={unita.website} target="_blank" rel="noreferrer">
            unita.ac.id
          </a>
          <a href={unita.pmb} target="_blank" rel="noreferrer">
            pmb.unita.ac.id
          </a>
          <a href={unita.siakad} target="_blank" rel="noreferrer">
            siakad.unita.ac.id
          </a>
        </div>
      </div>
    </footer>
  );
}
