import Head from "next/head";
import { Noto_Sans } from "next/font/google";
import { withLayout } from "@/layout/Layout";

const inter = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

function Home() {
  return (
    <>
      <main className={inter.className}>Контент</main>
    </>
  );
}

export default withLayout(Home);
