import { notFound } from "next/navigation";

import { isBlockedByUser } from "@/lib/block-service";
import { isFollwingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";

import Actions from "./_components/actions";

interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  const isFollowing = await isFollwingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  // if (isBlocked) {
  //   notFound();
  // }

  return (
    <div className="flex flex-col gap-y-4">
      <p>Username: {user.username}</p>
      <p>user ID: {user.id}</p>
      <p>is Following: {`${isFollowing}`}</p>
      <p>Is Blocked by this user: {`${isBlocked}`}</p>
      <Actions userId={user.id} isFollowing={isFollowing} />
    </div>
  );
};

export default UserPage;
