import axios from "axios";
import { GetStaticProps } from "next";
import { Noto_Sans } from "next/font/google";

import { withLayout } from "@/layout/Layout";
import { MenuItem } from "@/interfaces/menu.interface";
import { Input, Textarea } from "@/components";
import { API } from "@/helpers/api";

const inter = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

function Home({ menu }: HomeProps) {
  return (
    <>
      <main className={inter.className}>
        <Input placeholder="Введите текст" />
        <Textarea placeholder="Введите текст" />
      </main>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
