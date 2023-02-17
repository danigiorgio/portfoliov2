import Image from "next/image";
import Link from "next/link";

const Card = ({ title, description, imgSrc, href }) => (
  <div className="p-4 md:w-1/2 md">
    <div className="border-2 border-gray-200 border-opacity-60 dark:border-gray-700 rounded-md cursor-pointer">
      <Image alt={title} src={imgSrc} className="lg:h-48 md:h-36 object-cover object-center" width={544} height={306} />
      <div className="p-6">
        <h2 className="text-2xl font-bold tracking-tight mb-3 dark:text-gray-300">
          <Link href={href} aria-label={`Link to ${title}`}>
            {title}
          </Link>
        </h2>
        <p className="prose text-gray-500 dark:text-gray-400 mb-3">{description}</p>

        <Link
          href={href}
          aria-label={`Link to ${title}`}
          className="font-medium text-lilac dark:text-lilaclight hover:text-gray-600"
        >
          Learn more &rarr;
        </Link>
      </div>
    </div>
  </div>
);

export default Card;
