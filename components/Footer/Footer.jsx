import FooterIcons from "@/components/FooterIcons";

export default function Footer() {
  return (
    <footer className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 flex flex-col">
      <FooterIcons />
      <div className="text-gray-500 dark:text-gray-300 text-center mt-4 mb-10">
        &copy; {new Date().getFullYear()} Daniela Giorgio
      </div>
    </footer>
  );
}
