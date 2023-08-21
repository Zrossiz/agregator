import React, { useContext, useEffect } from "react";
import styles from "./Menu.module.css";
import cn from "classnames";
import Link from "next/link";
import { AppContext } from "@/context/app.context";
import { PageItem, firstLevelMenuItem } from "@/interfaces/menu.interface";

import CoursesIcon from "./icons/Courses.svg";
import ServicesIcon from "./icons/Services.svg";
import BooksIcon from "./icons/Books.svg";
import ProductsIcon from "./icons/Product.svg";
import { TopLevelCategory } from "@/interfaces/page.interface";

const firstLevelMenu: firstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

const Menu = () => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
            <Link href={`/${m.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id == firstCategory,
                })}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>
            </Link>
            {m.id == firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: firstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div
              className={cn(styles.secondlevelBlock, {
                [styles.secondlevelBlockOpened]: m.isOpened,
              })}
            >
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <Link
        key={p._id}
        href={`/${route}/${p.alias}`}
        className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: false,
        })}
      >
        {p.category}
      </Link>
    ));
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};

export default Menu;
