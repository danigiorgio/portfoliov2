import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 flex flex-col py-20">
      <h1 className="text-5xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
        Hey!{" "}
        <div className="inline-block">
          <Image
            className=" "
            height="40"
            width="40"
            src="/static/images/waving-hand.png"
            aria-label="Waving hand"
            alt="Waving hand"
            quality={100}
          />
        </div>
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mt-8">
         I&apos;m Daniela. I&apos;m a frontend developer with over six years of experience delivering solutions across projects in both startup and large corporate environments. 
      </p>
      <p className="text-gray-500 dark:text-gray-400 mt-8"> Check out my{" "}
        <Link href="/blog" className="text-lilac dark:text-lilaclight hover:text-gray-400 border-b-2 border-lilac">
          blog
        </Link>{" "}
        where I post tutorials and things that spark my curiosity.
      </p>
    </section>
  );
}
