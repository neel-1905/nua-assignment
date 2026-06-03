import { Link } from "react-router-dom";
import type { Product } from "../../types/product.types";
import styles from "./product-card.module.scss";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
      <div className={styles.productCard}>
        <div className={styles.imgWrapper}>
          <img src={product.image} alt={product.title} />
        </div>

        <h2 className={styles.title}>{product.title}</h2>
      </div>
    </Link>
  );
};

export default ProductCard;
