
import DateFormatter from "./date-formatter";

import Link from "next/link";


type Props = {
  title: string;
  date: string;
  slug: string;
};

const PostPreview = ({
  title,
  
  date,

  
  slug,
}: Props) => {
  return (
    <div>
     
      <h3 className="text-xl mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="border-b-2 border-main  focus:outline-none focus:ring-4 focus:ring-main focus:ring-opacity-50 focus:border-transparent hover:bg-main"
        >
          · {title}{' '}
        </Link>
        <span className="text-sm"><DateFormatter dateString={date} /></span>
      </h3>
      {/* <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div> */}
     
    </div>
  );
};

export default PostPreview;
