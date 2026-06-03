import { Clock, Truck } from "lucide-react";
import { colors, sizes } from "../../constants";
import type { Product } from "../../types/product.types";
import styles from "./product-info.module.scss";
import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { useSearchParams } from "react-router-dom";

const ProductInfo = ({ product }: { product: Product }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedSize, setSelectedSize] = useState<string | null>(
    searchParams.get("size") || null,
  );

  const [quantity, setQuantity] = useState(1);
  const { addToCart, getAvailableStock } = useCart();

  const currentSize = sizes.find((size) => size.label === selectedSize);

  const isSoldOut = currentSize?.stock === 0;

  const isLow = currentSize?.stock <= 5 && !isSoldOut;

  const availableStock =
    selectedSize && currentSize
      ? getAvailableStock(product.id, selectedSize, currentSize.stock)
      : 0;

  const handleIncrement = () => {
    if (quantity < availableStock) {
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

    addToCart({
      product,
      size: selectedSize,
      quantity,
      stock: currentSize.stock,
    });
  };

  return (
    <div className={styles.productInfo}>
      <span className={styles.productCategory}>{product.category}</span>

      <h1 className={styles.productTitle}>{product.title}</h1>

      <div className={styles.priceContainer}>
        <span className={styles.currentPrice}>${product.price}</span>
        <span className={styles.originalPrice}>
          ${(product.price + 50).toFixed(2)}
        </span>
        <div className={styles.sale}>SALE</div>
      </div>

      <div className={styles.colorsSection}>
        <h2 className={styles.sectionTitle}>Colors</h2>
        <div className={styles.colorsContainer}>
          {colors.map((color, index) => (
            <div
              key={`${index}-${color}`}
              data-active={color === searchParams.get("color")}
            >
              <button
                style={{ backgroundColor: color }}
                onClick={() => {
                  const params = new URLSearchParams(searchParams);
                  params.set("color", color);
                  setSearchParams(params);
                }}
              ></button>
            </div>
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

                  const params = new URLSearchParams(searchParams);
                  params.set("size", size.label);
                  setSearchParams(params);
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

      <div className={styles.deliverySection}>
        <div className={styles.shippingInfo}>
          <Truck size={22} /> <span>Free shipping on all orders above 50$</span>
        </div>

        <div className={styles.estimatedDelivery}>
          <Clock size={22} /> <span>Estimated delivery: 3-5 business days</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
