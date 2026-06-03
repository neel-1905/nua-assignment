import styles from "./not-found.module.scss";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Sorry, the page you requested could not be found.</p>
    </div>
  );
};

export default NotFound;
