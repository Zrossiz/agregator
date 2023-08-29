import React from "react";
import { motion } from "framer-motion";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";
import Arrow from "./Arrow.svg";

export const Button = ({
  appearance,
  children,
  arrow = "none",
  className,
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      className={cn(styles.button, className, {
        [styles.primary]: appearance == "primary",
        [styles.ghost]: appearance == "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow == "down",
          })}
        >
          <Arrow />
        </span>
      )}
    </motion.button>
  );
};
