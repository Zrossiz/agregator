import React from "react";
import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import Menu from "@/layout/Menu/Menu";
import Logo from "../Logo.svg";
import cn from "classnames";

const Sidebar = ({ className, ...props }: SidebarProps) => {
  return (
    <div {...props} className={cn(className, styles.sidebar)}>
      <Logo className={styles.logo} />
      <div>Поиск</div>
      <Menu />
    </div>
  );
};

export default Sidebar;
