import Card from "@/components/Card";
import Container from "@/components/Container";
import { getProjectItems } from "@/data/queries";

export const getStaticProps = async () => {
  const { projects } = await getProjectItems();
  return {
    props: {
      projects: projects,
    },
  };
};

export default function ProjectsPage({ projects }) {
  return (
    <Container title="Projects – Daniela Giorgio" description="Side projects and stuff I do on my free time.">
      <section className="max-w-3xl mx-auto mt-10 mb-12">
        <div className="pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl md:text-6xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            These are some projects I&apos;ve been working on recently:
          </p>
        </div>

        <div className="flex flex-wrap -m-4 py-12">
          {projects?.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              imgSrc={item.coverImage.url}
              href={`/projects/${item.slug}`}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}
