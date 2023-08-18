import React, { useContext } from "react";
import styles from "./Menu.module.css";
import cn from "classnames";
import { AppContext } from "@/context/app.context";

const Menu = () => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  return (
    <>
      {menu.map((m) => (
        <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
      ))}
    </>
  );
};

export default Menu;
