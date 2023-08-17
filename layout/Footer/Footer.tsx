import React from "react";
import cn from "classnames";
import Link from "next/link";
import { format } from "date-fns";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>
        Agregator 2023 - {format(new Date(), "yyyy")} Все права защищены
      </div>

      <Link href={"/"} target="_blank">
        Пользовательское соглашение
      </Link>
      <Link href={"/"} target="_blank">
        Политика конфиденциальности
      </Link>
    </footer>
  );
};

export default Footer;
