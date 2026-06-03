import { productSpecifications, reviews } from "../../constants";
import type { Product } from "../../types/product.types";
import Accordion from "../accordion/accordion";
import styles from "./product-details.module.scss";
import ReviewCard from "./review-card/review-card";

const ProductDetails = ({ product }: { product: Product }) => {
  return (
    <section className={styles.productDetailsSection}>
      <h1>Product Details</h1>

      <Accordion
        items={[
          {
            title: "Description",
            content: (
              <p>
                Crafted from premium heavyweight cotton, this oversized t-shirt
                is designed for all-day comfort and effortless street-wear
                styling. The relaxed silhouette, dropped shoulders, and
                breathable fabric create a modern fit that works perfectly for
                casual everyday wear. Built with durable stitching and a
                soft-touch finish, it delivers both comfort and long-lasting
                quality. Pair it with denim, cargos, or layered outerwear for a
                versatile wardrobe essential that blends minimal design with
                contemporary fashion.
              </p>
            ),
          },

          {
            title: "Specifications",
            content: (
              <div className={styles.productSpecifications}>
                {productSpecifications.map((item) => {
                  return (
                    <div
                      key={`prod-spec-${item.title}`}
                      className={styles.productSpec}
                    >
                      <span>{item.title}</span>
                      <span>{item.content}</span>
                    </div>
                  );
                })}
              </div>
            ),
          },

          {
            title: `Reviews (${product.rating.count})`,
            content: (
              <div className={styles.reviewsContainer}>
                <span>Avg. Rating: {product.rating.rate}</span>

                <div className={styles.reviewsGrid}>
                  {reviews.map((review) => {
                    return (
                      <ReviewCard
                        key={`${review.name}-${review.date}`}
                        review={review}
                      />
                    );
                  })}
                </div>
              </div>
            ),
          },
        ]}
      />
    </section>
  );
};

export default ProductDetails;
