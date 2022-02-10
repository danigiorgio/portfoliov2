import he from "he";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import Container from "@/components/Container";
import { getProjectItem, getProjectSlugs } from "@/data/queries";

export const getStaticPaths = async () => {
  const slugsRes = await getProjectSlugs();
  const slugs = slugsRes.projects;

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const projectItem = await getProjectItem(params.slug);
  return {
    props: {
      projectItem: projectItem.projects[0],
      content: await serialize(he.decode(projectItem.projects[0].content)),
    },
  };
};

export default function ProjectSlug({ projectItem, content }) {
  return (
    <Container>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 mt-10">
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 inline">
          {projectItem.title}
        </h1>
        <a href={projectItem.githubUrl} className="mx-4" aria-label="Github url">
          <svg
            className="inline w-8 h-8 align-baseline text-gray-900 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        <a href={projectItem.demoUrl} aria-label="Demo url">
          <svg
            className="inline w-8 h-8 align-baseline text-gray-900 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-wrap">
            {projectItem.tags.map((tag) => (
              <span
                className="uppercase text-sm tracking-wide m-2 bg-gray-100 px-2 py-1 rounded-lg text-gray-900"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="prose dark:prose-dark prose-xl py-4">{projectItem.description}</p>
        <Image
          src={projectItem.coverImage.url}
          width={projectItem.coverImage.width}
          height={projectItem.coverImage.height}
          alt={projectItem.title}
        />

        <div className="prose dark:prose-dark prose-xl max-w-none mt-4">
          <MDXRemote {...content} />
        </div>
      </div>
    </Container>
  );
}
