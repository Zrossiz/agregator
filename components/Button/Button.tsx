import React from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";
import Arrow from "./Arrow.svg";

const Button = ({
  appearance,
  children,
  arrow = "none",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
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
    </button>
  );
};

export default Button;
