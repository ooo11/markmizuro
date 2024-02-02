import PostPreview from "./post-preview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

const ListStory = ({ posts }: Props) => {
  return (
    <section>
      <div >
        <h2 className="mb-8 text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
          Essay.
        </h2>
        {/* <p className="text-sm mt-12 mb-12">If you're not sure which to read, try Is it Worth Being Wise?, Having Kids, or How to Lose Time and Money.</p> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default ListStory;
