import ImageGallery from "../image-gallery/image-gallery";
import { useProduct } from "../../hooks/useProduct";
import { LoaderCircle } from "lucide-react";
import styles from "./product-detail-page.module.scss";

const ProductDetailPage = () => {
  const { product, loading, error } = useProduct("2");

  return (
    <div className="content-wrapper">
      {loading && !error && (
        <div className={styles.loaderContainer}>
          <LoaderCircle className={styles.loader} size={50} />
        </div>
      )}

      {error && (
        <div className={styles.errorContainer}>
          <p>Error: {error}</p>
        </div>
      )}

      {!loading && !error && product && (
        <>
          <div className={styles.productDetailHeroWrapper}>
            <ImageGallery product={product} />
            <div className={styles.productDetailInfoWrapper}>Info</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetailPage;
