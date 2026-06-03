import { useState } from "react";
import styles from "./image-gallery.module.scss";
import type { Product } from "../../types/product.types";

const ImageGallery = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    {
      large: product.image,
      thumb: product.image,
    },
    {
      large:
        "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&h=800&q=80",
      thumb:
        "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=120&h=120&q=40",
    },
    {
      large:
        "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&h=800&q=80",
      thumb:
        "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=120&h=120&q=40",
    },
    {
      large:
        "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&h=800&q=80",
      thumb:
        "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=120&h=120&q=40",
    },
  ];

  return (
    <>
      <div className={styles.imageGalleryWrapper}>
        <div className={styles.imageWrapper}>
          <img
            src={images[activeImage].large}
            alt={product.title}
            className={styles.image}
            loading="eager"
            width={500}
            height={500}
            fetchPriority="high"
          />
        </div>

        <div className={styles.thumbnailContainer}>
          {images.map((image, index) => (
            <div
              key={`${product.id}-${index}`}
              data-active={index === activeImage}
            >
              <img
                src={image.thumb}
                alt={`Thumbnail ${index + 1}`}
                className={styles.thumbnail}
                onClick={() => setActiveImage(index)}
                width={115}
                height={115}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className={styles.dotsContainer}>
          {images.map((_, index) => (
            <div
              key={`dot-${index}`}
              data-active={index === activeImage}
              className={styles.dot}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
