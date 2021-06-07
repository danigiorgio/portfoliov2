import Link from "next/link";
import { useState } from "react";

import Container from "@/components/Container";
import { getPosts } from "@/data/queries";

export const getStaticProps = async () => {
  const { posts } = await getPosts();
  return {
    props: {
      posts: posts,
    },
  };
};

export default function BlogPage({ posts }) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts.filter((post) => {
    const searchContent = post.title + post.description + post.tags.join(" ");
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <Container
      title="Blog – Daniela Giorgio"
      description="Random thoughts and tutorials about programming, tech, hardware, and other."
    >
      <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
        <h1 className="mt-10 text-3xl md:text-6xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200">
          All Posts
        </h1>

        <div className="relative max-w-lg mt-5">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <div className="mt-5 lg:mt-10">
          {!filteredBlogPosts.length && "No posts found."}
          {filteredBlogPosts?.map((post) => (
            <div
              key={post.slug}
              className="grid grid-cols-1 md:grid-cols-4 py-6 border-b border-gray-200 dark:border-gray-800"
            >
              <div className="mb-2 md:mb-0 md:col-span-1">
                <p className="text-gray-600 dark:text-gray-300 text-sm">{new Date(post.date).toDateString()}</p>
              </div>
              <article className="md:col-span-3">
                <Link href={`/blog/${post.slug}`}>
                  <a className="text-2xl font-bold text-gray-900 dark:text-gray-100 hover:text-gray-600 tracking-tight">
                    {post.title}
                  </a>
                </Link>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed sm:mt-3 mt-2">{post.description}</p>
              </article>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
