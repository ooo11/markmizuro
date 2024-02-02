
import Footer from "./footer";
import Meta from "./meta";
import Link from 'next/link';
import { Lora } from 'next/font/google';
import Container from "./container";
import { Analytics } from '@vercel/analytics/react';

type Props = {
  home?: boolean;
  post?: boolean;
  preview?: boolean;
  children: React.ReactNode;
};

const lora = Lora({ subsets: ['latin'] })

const Layout = ({ home, children, preview, post }: Props) => {
  return (
    <>
      <Meta />
      <div className={`${lora.className}  flex items-center flex-col flex-1 pl-8 pr-4 py-12`}>
        <Container>
          {!home && (
            <div >
              <Link href="/" className="border-b-4 border-main font-bold text-xl focus:outline-none focus:ring-4 focus:ring-main focus:ring-opacity-50 focus:border-transparent  text-sm hover:bg-main">Mark Mizuro</Link>
            </div>
          )}
          {!post && (
            <div className="ml-12 mb-12 ">
              <Link href="/posts" className="border-b-4 border-main font-bold  text-xl focus:outline-none focus:ring-4 focus:ring-main focus:ring-opacity-50 focus:border-transparent  text-sm hover:bg-main">Essay.</Link>
            </div>
          )}
        </Container>

        <main>
          {children}
          <Analytics />
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Layout;
