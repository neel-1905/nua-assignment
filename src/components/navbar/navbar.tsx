import { ShoppingCartIcon, User2 } from "lucide-react";
import styles from "./navbar.module.scss";
import { useCartContext } from "../../context/cart-context";

const Navbar = () => {
  const { cart } = useCartContext();

  const noOfProducts = cart.products.length;

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a href="/" className={styles.logo}>
          Product Store
        </a>

        <div className={styles.navRight}>
          <div className={styles.cartBtnContainer}>
            {noOfProducts > 0 ? <div>{noOfProducts}</div> : null}
            <button>
              <ShoppingCartIcon size={22} />
            </button>
          </div>

          <button>
            <User2 size={22} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
