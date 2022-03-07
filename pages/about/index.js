import he from "he";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import Container from "@/components/Container";
import { getAbout } from "@/data/queries";

export const getStaticProps = async () => {
  const data = await getAbout();
  return {
    props: {
      data: data.abouts[0],
      content: await serialize(he.decode(data.abouts[0].content)),
    },
  };
};

export default function AboutPage({ content }) {
  return (
    <Container title="About – Daniela Giorgio" description="About me">
      <section className="max-w-3xl mx-auto mt-10 mb-12">
        <div className="pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl md:text-6xl sm:text-4xl pb-3 font-extrabold tracking-tight text-gray-900 dark:text-gray-200">
            Hey{" "}
            <span role="img" aria-label="waving hand">
              👋
            </span>
          </h1>
          <div className="text-lg leading-7 text-gray-500 dark:text-gray-400 space-y-2 md:space-y-5">
            <MDXRemote {...content} />
          </div>
        </div>
      </section>
    </Container>
  );
}
