import ImageGallery from "../image-gallery/image-gallery";
import { useProduct } from "../../hooks/useProduct";
import { LoaderCircle } from "lucide-react";
import styles from "./product-detail-page.module.scss";
import ProductInfo from "../product-info/product-info";

import NotFound from "../not-found/not-found";
import { useParams } from "react-router-dom";
import Loader from "../loader/loader";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { product, loading, error } = useProduct(id);

  if (!loading && !product) return <NotFound />;

  return (
    <>
      {loading && !error && <Loader />}

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
    </>
  );
};

export default ProductDetailPage;
