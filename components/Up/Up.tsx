import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import styles from "./Up.module.css";
import { ButtonIcon } from "..";
import { useScrollY } from "@/hooks/useScrollY";

export const Up = () => {
  const controls = useAnimation();

  const y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      animate={controls}
      initial={{ opacity: 0 }}
      className={styles.up}
      onClick={scrollToTop}
    >
      <ButtonIcon appearance="primary" icon="up" />
    </motion.div>
  );
};
