import { LoaderCircle } from "lucide-react";
import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <LoaderCircle className={styles.loader} size={50} />
    </div>
  );
};

export default Loader;
