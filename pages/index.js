import Link from "next/link";

import Card from "@/components/Card";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import { getPostsAndProjects } from "@/data/queries";

export const getStaticProps = async () => {
  const data = await getPostsAndProjects();
  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
  return (
    <Container>
      <Hero />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="mt-20">
          <h2 className="text-4xl text-gray-900 dark:text-gray-100 font-semibold mb-4">Recent Posts</h2>
          {data?.posts?.map((post) => (
            <div
              key={post.slug}
              className="grid grid-cols-1 md:grid-cols-4 py-6 border-b border-gray-200 dark:border-gray-800"
            >
              <div className="mb-2 md:mb-0 md:col-span-1">
                <p className="text-gray-600 dark:text-gray-300 text-sm">{new Date(post.date).toDateString()}</p>
              </div>
              <div className="md:col-span-3">
                <Link href={`/blog/${post.slug}`}>
                  <a className="text-2xl font-bold text-gray-900 dark:text-gray-300 hover:text-gray-600 transition-colors duration-300 leading-8 tracking-tight">
                    {post.title}
                  </a>
                </Link>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 mt-20">
        <h2 className="text-4xl text-gray-900 dark:text-gray-100 font-semibold mb-4">Side Projects</h2>
        <div className="max-w-3xl mx-auto mb-12">
          <div className="text-primaryText bg-paper border-divider tablet:p-2 mobile:col-span-12 cursor-pointer">
            <div className="container py-12">
              <div className="flex flex-wrap -m-4">
                {data?.projects?.map((item) => (
                  <Card
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    imgSrc={item.coverImage.url}
                    href={`/projects/${item.slug}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
