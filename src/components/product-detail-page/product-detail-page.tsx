import ImageGallery from "../image-gallery/image-gallery";
import { useProduct } from "../../hooks/useProduct";
import { LoaderCircle } from "lucide-react";
import styles from "./product-detail-page.module.scss";
import ProductInfo from "../product-info/product-info";
import { useSearchParams } from "react-router-dom";

const ProductDetailPage = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const { product, loading, error } = useProduct(productId || "4");

  console.log(product, loading, error);

  if (!loading && !product) return <>Product not found</>;

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
          <section className={styles.productDetailHeroWrapper}>
            <ImageGallery product={product} />
            <ProductInfo product={product} />
          </section>
        </>
      )}
    </div>
  );
};

export default ProductDetailPage;
