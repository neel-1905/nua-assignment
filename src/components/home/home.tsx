import { LoaderCircle } from "lucide-react";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../product-card/product-card";
import styles from "./home.module.scss";
import Loader from "../loader/loader";

const Home = () => {
  const { error, loading, products } = useProducts();

  if (loading) return <Loader />;

  if (error) return <div>Something went wrong!</div>;

  return (
    <div className={styles.productsGrid}>
      {products.map((item) => {
        return <ProductCard key={`product-${item.id}`} product={item} />;
      })}
    </div>
  );
};

export default Home;
