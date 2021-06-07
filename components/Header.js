import Link from "next/link";

import ThemeSwitch from "./ThemeSwitch";
export default function Header() {
  return (
    <header className="py-10 px-4 sm:px-6 lg:px-0">
      <nav className="flex items-center justify-between sm:flex-row max-w-3xl mx-auto">
        <Link href="/">
          <a className="cursor-pointer">
            <img src="/static/images/logo.png" className="w-11 h-11" alt="Logo containing letter D"></img>
          </a>
        </Link>
        <ul className="flex items-center">
          <li>
            <Link href="/">
              <a className="dark:text-gray-200 hover:text-gray-500">Home</a>
            </Link>
          </li>
          <li className="ml-6">
            <Link href="/about">
              <a className="dark:text-gray-200 hover:text-gray-500">About</a>
            </Link>
          </li>
          <li className="ml-6">
            <Link href="/projects">
              <a className="dark:text-gray-200 hover:text-gray-500">Projects</a>
            </Link>
          </li>
          <li className="ml-6">
            <Link href="/blog">
              <a className="dark:text-gray-200 hover:text-gray-500">Blog</a>
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
