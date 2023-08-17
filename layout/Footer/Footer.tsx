import React from "react";
import { FooterProps } from "./Footer.props";
import styles from "./Header.module.css";

const Footer = ({ ...props }: FooterProps) => {
  return <div {...props}>Footer</div>;
};

export default Footer;
