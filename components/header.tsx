import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      {/* <Link href="/" className="hover:underline">
        Mark Mizuro
      </Link>
      . */}
      <link rel="shortcut icon" href="/public/favicon/favicon.ico" />
    </h2>
  );
};

export default Header;
