import React, { FunctionComponent } from "react";
import { Noto_Sans } from "next/font/google";
import cn from "classnames";

import { LayoutProps } from "./Layout.props";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import styles from "./Layout.module.css";

import { Up } from "@/components";

import { AppContextProvider, IAppContext } from "@/context/app.context";

const inter = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={cn(styles.wrapper, inter.className)}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
      <Up />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
