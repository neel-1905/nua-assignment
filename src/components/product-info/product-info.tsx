import { colors, sizes } from "../../constants";
import type { Product } from "../../types/product.types";
import styles from "./product-info.module.scss";
import { useState } from "react";

const ProductInfo = ({ product }: { product: Product }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const currentSize = sizes.find((size) => size.label === selectedSize);

  const isSoldOut = currentSize?.stock === 0;

  const isLow = currentSize?.stock <= 5 && !isSoldOut;

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.productInfo}>
      <span className={styles.productCategory}>{product.category}</span>

      <h1 className={styles.productTitle}>{product.title}</h1>

      <div className={styles.priceContainer}>
        <span className={styles.currentPrice}>${product.price}</span>
        <span className={styles.originalPrice}>${product.price + 50}</span>
        <div className={styles.sale}>SALE</div>
      </div>

      <div className={styles.colorsSection}>
        <h2 className={styles.sectionTitle}>Colors</h2>
        <div className={styles.colorsContainer}>
          {colors.map((color, index) => (
            <div key={`${index}-${color}`} style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>

      <div className={styles.sizesSection}>
        <h2 className={styles.sectionTitle}>Sizes</h2>
        <div className={styles.sizesContainer}>
          {sizes.map((size, index) => {
            const isDisabled = size.stock === 0;

            return (
              <button
                key={`${index}-${size.label}`}
                data-active={selectedSize === size.label}
                onClick={() => setSelectedSize(size.label)}
                disabled={isDisabled}
              >
                {size.label}
              </button>
            );
          })}
        </div>

        {selectedSize && currentSize && (
          <p className={isLow ? styles.lowStock : styles.availableStock}>
            {isLow ? `Only ${currentSize.stock} left` : "In stock"}
          </p>
        )}

        <div className={styles.addToCartContainer}>
          <div className={styles.counter}>
            <button onClick={handleDecrement}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
          </div>

          <button className="primary-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
