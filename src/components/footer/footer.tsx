import { Mail, Phone } from "lucide-react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h2 className={styles.footerTitle}>Product Store</h2>
          <p>Built for the wild. Curated for the connoisseur. Since 2026.</p>
        </div>
        <div className={styles.footerColumn}>
          <h2>Quick Links</h2>
          <a href="#">Shipping Info</a>
          <a href="#">Returns & Exchanges</a>
          <a href="#">Support Center</a>
        </div>
        <div className={styles.footerColumn}>
          <h2>Legal</h2>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className={styles.footerColumn}>
          <h2>Stay Connected</h2>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Call us">
              <Phone size={20} />
            </a>
            <a href="#" aria-label="Email us">
              <Mail size={20} />
            </a>
          </div>

          <p>© 2026 Product Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
