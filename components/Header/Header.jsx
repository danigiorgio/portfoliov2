import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import ThemeSwitch from "@/components/ThemeSwitch";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <header className="py-10 px-4 sm:px-6 lg:px-0">
      <nav className="flex items-center justify-between sm:flex-row max-w-3xl mx-auto">
        <Link href="/" className="cursor-pointer" passHref>
          <Image src="/static/images/logo.png" width="44" height="44" alt="Logo containing letter D" />
        </Link>
        <ul className="flex items-center">
          <li className="ml-4">
            <Link href="/" className={`dark:text-gray-200 hover:text-gray-500 ${pathname === "/" && "border-b-2"}`}>
              Home
            </Link>
          </li>
          <li className="ml-6">
            <Link
              href="/about"
              className={`dark:text-gray-200 hover:text-gray-500 ${pathname === "/about" && "border-b-2"}`}
            >
              About
            </Link>
          </li>
          <li className="ml-6 hidden">
            <Link
              href="/projects"
              className={`dark:text-gray-200 hover:text-gray-500 ${pathname === "/projects" && "border-b-2"}`}
            >
              Projects
            </Link>
          </li>
          <li className="ml-6">
            <Link
              href="/blog"
              className={`dark:text-gray-200 hover:text-gray-500 ${pathname === "/blog" && "border-b-2"}`}
            >
              Blog
            </Link>
          </li>
          <li className="ml-3">
            <ThemeSwitch />
          </li>
        </ul>
      </nav>
    </header>
  );
}
