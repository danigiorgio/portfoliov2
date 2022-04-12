import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  const { pathname } = useRouter();
  return (
    <header className="py-10 px-4 sm:px-6 lg:px-0">
      <nav className="flex items-center justify-between sm:flex-row max-w-3xl mx-auto">
        <Link href="/">
          <a className="cursor-pointer">
            <Image src="/static/images/logo.png" width="44" height="44" alt="Logo containing letter D" />
          </a>
        </Link>
        <ul className="flex items-center">
          <li>
            <Link href="/">
              <a className={`dark:text-gray-200 hover:text-gray-500 ${pathname === "/" && "border-b-2"}`}>Home</a>
            </Link>
          </li>
          <li className="ml-6">
            <Link href="/about">
              <a className={`dark:text-gray-200 hover:text-gray-500 ${pathname === "/about" && "border-b-2"}`}>About</a>
            </Link>
          </li>
          <li className="ml-6">
            <Link href="/projects">
              <a className={`dark:text-gray-200 hover:text-gray-500 ${pathname === "/projects" && "border-b-2"}`}>
                Projects
              </a>
            </Link>
          </li>
          <li className="ml-6">
            <Link href="/blog">
              <a className={`dark:text-gray-200 hover:text-gray-500 ${pathname === "/blog" && "border-b-2"}`}>Blog</a>
            </Link>
          </li>
          <li className="ml-6">
            <ThemeSwitch />
          </li>
        </ul>
      </nav>
    </header>
  );
}
