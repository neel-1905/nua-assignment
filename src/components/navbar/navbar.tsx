import { ShoppingCartIcon, User2 } from "lucide-react";
import styles from "./navbar.module.scss";
import { useCartContext } from "../../context/cart-context";
import { useState } from "react";
import { CartSidebar } from "../cart-sidebar/cart-sidebar";

const Navbar = () => {
  const { cart } = useCartContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const noOfProducts = cart.products.reduce(
    (acc: any, item: any) => acc + item.quantity,
    0,
  );

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a href="/" className={styles.logo}>
          Product Store
        </a>

        <div className={styles.navRight}>
          <div className={styles.cartBtnContainer}>
            {noOfProducts > 0 ? <div>{noOfProducts}</div> : null}
            <button aria-label="Cart" onClick={() => setIsSidebarOpen(true)}>
              <ShoppingCartIcon size={22} />
            </button>
          </div>

          <button aria-label="Profile">
            <User2 size={22} />
          </button>
        </div>
      </nav>

      <CartSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </header>
  );
};

export default Navbar;
