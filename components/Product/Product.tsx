import styles from "./Product.module.css";
import { ProductProps } from "./Product.props";
import cn from "classnames";

export const Product = ({
  product,
  className,
  ...props
}: ProductProps): JSX.Element => {
  return (
    <div className={styles.product} {...props}>
      {product.title}
    </div>
  );
};
