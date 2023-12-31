import React, { forwardRef, ForwardedRef } from "react";
import { CardProps } from "./Card.props";
import cn from "classnames";
import styles from "./Card.module.css";
import { motion } from "framer-motion";

export const Card = motion(
  // eslint-disable-next-line react/display-name
  forwardRef(
    (
      { color = "white", className, children, ...props }: CardProps,
      ref: ForwardedRef<HTMLDivElement>
    ) => {
      return (
        <div
          className={cn(styles.card, className, {
            [styles.blue]: color == "blue",
          })}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      );
    }
  )
);
