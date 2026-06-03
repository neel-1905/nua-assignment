import { Minus, Plus, X } from "lucide-react";
import styles from "./cart-product-card.module.scss";
import { useCart } from "../../../hooks/useCart";
import { sizes } from "../../../constants";

const CartProductCard = ({ product }: { product: any }) => {
  const { title, image, size, quantity, id, color } = product;
  const { incrementQuantity, decrementQuantity, removeItemFromCart } =
    useCart();

  const currentSize = sizes.find((item) => item.label === size);

  return (
    <div className={styles.cartProductCard}>
      <div className={styles.imgWrapper}>
        <img src={image} alt={title} width={80} height={80} loading="lazy" />
      </div>

      <div className={styles.center}>
        <h3 title={title}>{title}</h3>

        <div className={styles.sizeColor}>
          <span>Size: {size}</span>

          <div>
            <span>Color:</span>
            <div
              className={styles.colorDiv}
              style={{
                backgroundColor: color,
              }}
            />
          </div>
        </div>

        <div className={styles.counter}>
          <button
            onClick={() => decrementQuantity(id, size)}
            aria-label="Decrement quantity"
          >
            <Minus size={15} />
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => incrementQuantity(id, size, currentSize?.stock || 0)}
            aria-label="Increment quantity"
          >
            <Plus size={15} />
          </button>
        </div>
      </div>

      <div className={styles.right}>
        <button
          onClick={() => removeItemFromCart(id, size)}
          aria-label="Remove item"
        >
          <X size={20} />
        </button>

        <span>${(product.price * product.quantity).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartProductCard;
