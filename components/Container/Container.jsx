import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Container({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Daniela Giorgio – Frontend Developer",
    description: `Frontend developer, Web portfolio.`,
    image: "https://danielagiorgio.com/static/images/logo.png",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="bg-white dark:bg-grayish">
      <Head>
        <title>{meta.title}</title>
        <link rel="canonical" href={`https://danielagiorgio.com${router.asPath}`} />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://danielagiorgio.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Daniela Giorgio" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>

      <Header />

      <main id="skip" className="flex flex-col justify-center px-8 md:px:4 sm:px-2 bg-white dark:bg-grayish">
        {children}
      </main>
      <Footer />
    </div>
  );
}
