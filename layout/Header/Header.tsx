import React, { useEffect, useState } from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import Logo from "../Logo.svg";
import { ButtonIcon } from "@/components";
import cn from "classnames";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
import { useRouter } from "next/router";

const Header = ({ className, ...props }: HeaderProps) => {
  const router = useRouter();

  const [isOpened, setOpened] = useState<boolean>(false);

  useEffect(() => {
    setOpened(false);
  }, [router]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transiton: {
        stifness: 20,
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <header className={cn(className, styles.header)} {...props}>
      <Logo />
      <ButtonIcon
        appearance="white"
        icon="menu"
        onClick={() => setOpened(true)}
      />
      {isOpened && (
        <motion.div
          className={styles.mobileMenu}
          variants={variants}
          initial={"closed"}
          animate={isOpened ? "opened" : "closed"}
        >
          <Sidebar />
          <ButtonIcon
            className={styles.menuClose}
            appearance="white"
            icon="close"
            onClick={() => setOpened(false)}
          />
        </motion.div>
      )}
    </header>
  );
};

export default Header;
