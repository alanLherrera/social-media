"use client"

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btntitle: string; 
}

const AccountProfile = ({ user, btnTitle }: Props) =>  {
  return(
    <div className="">
      Account Profile
    </div>
  )
}

export default AccountProfile