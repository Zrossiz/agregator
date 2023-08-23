import React from "react";
import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import Menu from "@/layout/Menu/Menu";
import Logo from "../Logo.svg";
import Link from "next/link";
import cn from "classnames";
import { Search } from "@/components";

const Sidebar = ({ className, ...props }: SidebarProps) => {
  return (
    <div {...props} className={cn(className, styles.sidebar)}>
      <Link href={"/"}>
        <Logo className={styles.logo} />
      </Link>
      <Search />
      <Menu />
    </div>
  );
};

export default Sidebar;
