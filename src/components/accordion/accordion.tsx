import { useState, type ReactNode } from "react";
import styles from "./accordion.module.scss";
import { ChevronDown } from "lucide-react";

type AccordionItem = {
  title: string;
  content: ReactNode;
};

const Accordion = ({ items }: { items: AccordionItem[] }) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveItem((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isActive = activeItem === index;

        return (
          <div key={`accordion-${item.title}`} className={styles.accordionItem}>
            <button
              className={styles.accordionItemHeader}
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.title}</span>
              <ChevronDown className={isActive ? styles.rotate : ""} />
            </button>

            <div
              className={`${styles.accordionContent} ${isActive ? styles.accordionContentOpen : ""}`}
            >
              <div>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
