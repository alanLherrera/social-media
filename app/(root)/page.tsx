import { fetchPosts } from "@/lib/actions/thread.actions";
import { currentUser } from "@clerk/nextjs";
import ThreadCard from "@/components/cards/ThreadCard";

export default async function Home() {
  const result = await fetchPosts(1, 30);
  const user = await currentUser();
  if (!user) return null;
  //testing to see if it would fetch post
  //console.log(result);
  return (
    <>
      <h1 className="head-text text-center">Home</h1>
      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length === 0 ? (
          <p className="no-result"> No Posts just Yet </p>
        ) : (
          <>
            {result.posts.map((post) => (
              <ThreadCard
                key={post._id}
                id={post._id}
                currentUserId={user?.id}
                parentId={post.parentIds}
                content={post.text}
                author={post.author}
                community={post.community}
                createdAt={post.createdAt}
                comments={post.comments}
              />
            ))}
          </>
        )}
      </section>
    </>
  );
}
