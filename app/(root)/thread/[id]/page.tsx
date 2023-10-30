import ThreadCard from "@/components/cards/ThreadCard";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  if (!params.id) return null;

  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if(!userInfo?.onboarded) redirect('/onboarding');

  return(
  <section className="relative">
    <div>
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
    </div>
  </section>;
  )
}
