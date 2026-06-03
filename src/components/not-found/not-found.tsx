import styles from "./not-found.module.scss";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Product not found!</p>
    </div>
  );
};

export default NotFound;
