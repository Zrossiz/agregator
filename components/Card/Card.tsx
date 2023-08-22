import React from "react";
import { CardProps } from "./Card.props";
import cn from "classnames";
import styles from "./Card.module.css";

const Card = ({
  color = "white",
  className,
  children,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.blue]: color == "blue",
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;