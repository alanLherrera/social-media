import AccountProfile from "@/components/forms/AccountProfile"
import { currentUser } from '@clerk/nextjs'

async function Page(){
  const user = await currentUser();

  const userInfor = {};

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfor?.username || user?.username,
    name: userInfor?.name || user?.firstname || "",
    bio:userInfo?.bio || "",
    image: userInfo?.image || user?,imageUrl,
  };


  return (
    <main className="mx-auto flex max-w-3xl flex-col justify start px-10 py-20">
      <h1 className="head-text">Onboarding</h1> 
      <p className="mt-3 text text-base-regular text-light-2">Coomplete your profile right here</p>

      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile  user={userData}
        btnTitle="Continue/>

      </section>
    </main>
  )
}

export default Page