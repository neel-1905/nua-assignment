import { Mail, Phone } from "lucide-react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>Product Store</h3>
          <p>Built for the wild. Curated for the connoisseur. Since 2026.</p>
        </div>
        <div className={styles.footerColumn}>
          <h3>Quick Links</h3>
          <a href="#">Shipping Info</a>
          <a href="#">Returns & Exchanges</a>
          <a href="#">Support Center</a>
        </div>
        <div className={styles.footerColumn}>
          <h3>Legal</h3>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className={styles.footerColumn}>
          <h3>Stay Connected</h3>
          <div className={styles.socialLinks}>
            <a href="#">
              <Phone size={20} />
            </a>
            <a href="#">
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
