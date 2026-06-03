import { Lock, X } from "lucide-react";
import { useCartContext } from "../../context/cart-context";
import styles from "./cart-sidebar.module.scss";
import CartProductCard from "./cart-product-card/cart-product-card";

export const CartSidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { cart } = useCartContext();

  const noOfProducts = cart.products
    .reduce((acc, item) => acc + item.quantity, 0)
    .toFixed(0);

  const subTotal = cart.products
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const shippingPrice = subTotal > 50 ? 0 : 50;

  const totalPrice = subTotal + shippingPrice;
  return (
    <>
      {isOpen && <div className={styles.overlay} />}
      <aside className={styles.sidebar} data-open={isOpen}>
        <div className={styles.sidebarHeader}>
          <div>
            <h2>Cart</h2>
            <span>({noOfProducts} items)</span>
          </div>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {noOfProducts < 1 ? (
          <p>Your cart is empty!</p>
        ) : (
          <div className={styles.productsContainer}>
            {cart.products?.map((prod) => {
              return (
                <CartProductCard key={`cart-prod-${prod.id}`} product={prod} />
              );
            })}
          </div>
        )}

        <div className={styles.divider} />

        <div className={styles.pricingContainer}>
          <div className={styles.prices}>
            <div>
              <span>Subtotal</span>
              <span>${subTotal}</span>
            </div>
            <div>
              <span>Shipping</span>
              <span>{shippingPrice === 0 ? "Free" : `$${shippingPrice}`}</span>
            </div>
          </div>
        </div>

        <div className={styles.total}>
          <span>Total</span>
          <span>${totalPrice}</span>
        </div>

        <button className="primary-button">CHECKOUT</button>

        <div className={styles.secure}>
          <Lock size={20} />
          Secure Encryption
        </div>
      </aside>
    </>
  );
};
