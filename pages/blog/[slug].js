import he from "he";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import Container from "@/components/Container";
import { getBlogSlugs, getPost } from "@/data/queries";

export const getStaticPaths = async () => {
  const slugsRes = await getBlogSlugs();
  const slugs = slugsRes.posts;

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  return {
    props: {
      post: post.posts[0],
      content: await serialize(he.decode(post.posts[0].content)),
    },
  };
};

export default function BlosSlug({ post, content }) {
  return (
    <Container
      title={post.title}
      description="Random thoughts and tutorials about programming, tech, hardware, and other."
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 mt-10">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          {post.title}
        </h1>
        <div className="flex space-x-3 mt-2">
          {post.tags.map((tag) => (
            <span
              className="uppercase text-sm tracking-wide mt-2 bg-gray-100 text-gray-900  px-2 py-1 rounded-lg"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mb-8 mt-4 text-sm">
          <p className="text-gray-700 dark:text-gray-200">{new Date(post.date).toDateString()}</p>
          <div className="flex items-center">
            <p className="mr-2 text-gray-800 dark:text-gray-200">{post.author.name}</p>
            <Image
              className="w-6 h-6 rounded-full"
              src={post.author.image.url}
              width={25}
              height={25}
              objectFit="cover"
            />
          </div>
        </div>

        <div className="pb-10 pt-10 prose dark:prose-dark prose-xl max-w-none">
          <MDXRemote {...content} />
        </div>
      </div>
    </Container>
  );
}
