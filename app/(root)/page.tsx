import { fetchPosts } from "@/lib/actions/thread.actions";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

export default async function Home() {
  const result = await fetchPosts(1, 30);
  //testing to see if it would fetch post
  //console.log(result);
  return (
    <>
      <h1 className="head-text text-center">Home</h1>
    </>
  );
}
