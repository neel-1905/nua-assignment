import { Clock, Truck } from "lucide-react";
import { colors, sizes } from "../../constants";
import type { Product } from "../../types/product.types";
import styles from "./product-info.module.scss";
import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const ProductInfo = ({ product }: { product: Product }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { getItem, setItem } = useLocalStorage("cart");

  const currentSize = sizes.find((size) => size.label === selectedSize);

  const isSoldOut = currentSize?.stock === 0;

  const isLow = currentSize?.stock <= 5 && !isSoldOut;

  const handleIncrement = () => {
    if (quantity < currentSize?.stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize || !currentSize) return;

    const currentCart = getItem();

    if (!currentCart) {
      setItem({
        products: [
          {
            ...product,
            size: selectedSize,
            quantity,
          },
        ],
      });
      return;
    }

    const currentItem = currentCart?.products?.find(
      (item: any) => item.id === product.id && item.size === selectedSize,
    );

    const currentCartQuantity = currentItem?.quantity || 0;

    const available = currentSize?.stock - currentCartQuantity;

    if (quantity > available) {
      alert("Not enough stock available");
      return;
    }

    if (currentItem) {
      setItem({
        ...currentCart,
        products: currentCart.products.map((item: any) =>
          item.id === product.id && item.size === selectedSize
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        ),
      });
    } else {
      setItem({
        ...currentCart,
        products: [
          ...currentCart.products,
          {
            ...product,
            size: selectedSize,
            quantity,
          },
        ],
      });
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
                onClick={() => {
                  setSelectedSize(size.label);
                  setQuantity(1);
                }}
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
      </div>
      <div className={styles.addToCartContainer}>
        <div className={styles.counter}>
          <button disabled={quantity === 1} onClick={handleDecrement}>
            -
          </button>
          <span>{quantity}</span>
          <button
            disabled={isSoldOut || !selectedSize}
            onClick={handleIncrement}
          >
            +
          </button>
        </div>

        <button
          className="primary-button"
          onClick={handleAddToCart}
          disabled={!selectedSize || isSoldOut || quantity > currentSize.stock}
        >
          Add to Cart
        </button>
      </div>

      <div className={styles.shippingInfo}>
        <Truck size={22} /> <span>Free shipping on all orders above 50$</span>
      </div>

      <div className={styles.estimatedDelivery}>
        <Clock size={22} /> <span>Estimated delivery: 3-5 business days</span>
      </div>
    </div>
  );
};

export default ProductInfo;
