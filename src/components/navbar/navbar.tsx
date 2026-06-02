import { ShoppingCartIcon, User2 } from "lucide-react";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a href="/" className={styles.logo}>
          Product Store
        </a>

        <div className={styles.navRight}>
          <button>
            <ShoppingCartIcon size={22} />
          </button>

          <button>
            <User2 size={22} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
