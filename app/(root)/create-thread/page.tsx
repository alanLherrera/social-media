import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function Page() {
  const User = await currentUser();
  return;
}

export default Page;
