import styles from "./Product.module.css";
import { ProductProps } from "./Product.props";
import Image from "next/image";
import { Button, Card, Rating, Divider, Tag } from "..";
import { declOfNum, priceRu } from "@/helpers/helpers";
import cn from "classnames";

export const Product = ({
  product,
  className,
  ...props
}: ProductProps): JSX.Element => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <Image
          src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
          alt={product.title}
          width={70}
          height={70}
        />
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>
        {priceRu(product.price)}
        {product?.oldPrice && (
          <Tag className={styles.oldPrice} color="green">
            {priceRu(product.price - product.oldPrice)}
          </Tag>
        )}
      </div>
      <div className={styles.credit}>
        {priceRu(product.credit)}/<span className={styles.month}>мес</span>
      </div>
      <div className={styles.rating}>
        <Rating
          rating={product.reviewAvg ? product.reviewAvg : product.initialRating}
        />
      </div>
      <div className={styles.tags}>
        {product.categories.map((c, i) => (
          <Tag key={i} color="ghost" className={styles.category}>
            {c}
          </Tag>
        ))}
      </div>
      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>в кредит</div>
      <div className={styles.rateTitle}>
        {product.reviewCount}{" "}
        {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
      </div>
      <Divider className={styles.hr} />
      <div className={styles.description}>{product.description}</div>
      <div className={styles.feature}>
        {product.characteristics.map((c) => (
          <div className={styles.characteristics} key={c.name}>
            <span className={styles.characteristicsName}>{c.name}</span>
            <span className={styles.dots}></span>
            <span className={styles.characteristicsValue}>{c.value}</span>
          </div>
        ))}
      </div>
      <div className={styles.advBlock}>
        <div className={styles.advantages}>
          <div className={styles.advTitle}>Преимущества</div>
          <div>{product.advantages}</div>
        </div>
        {product.disadvantages && (
          <div className={styles.disadvantages}>
            <div className={styles.advTitle}>Недостатки</div>
            <div>{product.disadvantages}</div>
          </div>
        )}
      </div>
      <Divider className={cn(styles.hr, styles.hr2)} />
      <div className={styles.actions}>
        <Button appearance="primary">Узнать подробнее</Button>
        <Button
          appearance="ghost"
          arrow="right"
          className={styles.reviewButton}
        >
          Читать отзывы
        </Button>
      </div>
    </Card>
  );
};
