import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#000000] border-t-2 border-purple-600 w-full p-4 text-center">
      <p className="text-white">
        &copy; {new Date().getFullYear()} Built and Designed by{" "}
        <Link
          href="https://www.linkedin.com/peteressibu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline text-xl font-semibold"
        >
          Peter Essibu
        </Link>
        🚀
      </p>
    </footer>
  );
};

export default Footer;
