import { BadgeCheck } from "lucide-react";
import styles from "./review-card.module.scss";

const ReviewCard = ({ review }: { review: any }) => {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.header}>
        <div className={styles.buyer}>
          <span>{review.name}</span>
          <div className={styles.verified}>
            <BadgeCheck size={16} />
            <span>Verified Buyer</span>
          </div>
        </div>

        <span className={styles.rating}>{review.rating.toFixed(1)}</span>
      </div>

      <p className={styles.body}>{review.review}</p>

      <div className="divider" />

      <i className={styles.date}>{review.date}</i>
    </div>
  );
};

export default ReviewCard;
