import React from "react";
import { SpanProps } from "./Span.props";
import styles from "./Span.module.css";
import cn from "classnames";

export const Span = ({
  size = "m",
  children,
  className,
  ...props
}: SpanProps) => {
  return (
    <span
      className={cn(className, {
        [styles.small]: size == "s",
        [styles.medium]: size == "m",
        [styles.big]: size == "l",
      })}
      {...props}
    >
      {children}
    </span>
  );
};
