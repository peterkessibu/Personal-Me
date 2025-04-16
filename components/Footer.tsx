import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#040413] border-t-2 border-purple-600 w-full p-4 text-center">
      <p>
        &copy; {new Date().getFullYear()} Built and Designed by{" "}
        <Link
          href="https://www.linkedin.com/peteressibu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 hover:underline text-xl font-semibold"
        >
          Peter Essibu
        </Link>
        🚀
      </p>
    </footer>
  );
};

export default Footer;
