
import Footer from "./footer";
import Meta from "./meta";
import Link from 'next/link';
import {Lora} from 'next/font/google';

type Props = {
  home?: boolean;
  preview?: boolean;
  children: React.ReactNode;
};

const lora = Lora({ subsets: ['latin'] })

const Layout = ({ home, children, preview }: Props) => {
  return (
    <>
      <Meta />
      <div className={`${lora.className} p-4 flex items-center flex-col flex-1 mt-24`}>
        <main>{children}</main>
      </div>
      {!home && (
        <div className="mt-12 ml-12">
          <Link href="/" className="border-b-4 border-main font-bold font-mono focus:outline-none focus:ring-4 focus:ring-main focus:ring-opacity-50 focus:border-transparent  text-sm hover:bg-main">← Back to home</Link>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Layout;
