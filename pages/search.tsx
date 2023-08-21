import { firstLevelMenu } from "@/helpers/helpers";
import { MenuItem } from "@/interfaces/menu.interface";
import { withLayout } from "@/layout/Layout";
import axios from "axios";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";

const Search = () => {
  return <div>search</div>;
};

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const firstCategoryItem = firstLevelMenu.find((m) => m.route == params.type);

  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory: firstCategoryItem.id,
    }
  );
  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
