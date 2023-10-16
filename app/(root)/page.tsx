export default async function Home() {
  const result = await fetchPosts();
  return (
    <>
      <h1 className="head-text text-center">Home</h1>
    </>
  );
}
