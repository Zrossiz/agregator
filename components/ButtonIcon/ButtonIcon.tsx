import React from "react";
import cn from "classnames";
import { motion } from "framer-motion";
import { ButtonIconProps, icons } from "./ButtonIcon.props";
import styles from "./ButtonIcon.module.css";

export const ButtonIcon = ({
  appearance,
  icon,
  className,
  ...props
}: ButtonIconProps) => {
  const IconComp = icons[icon];

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      className={cn(styles.button, className, {
        [styles.primary]: appearance == "primary",
        [styles.white]: appearance == "white",
      })}
      {...props}
    >
      <IconComp />
    </motion.button>
  );
};
