"use server";

import { revalidatePath } from "next/cache";

import { blockUser, unblockUser } from "@/lib/block-service";

export const onBlock = async (id: string) => {
  // need to adapt to disconnect from live stream
  // also need to kick the guest
  const blockedUser = await blockUser(id);

  revalidatePath("/");

  if (blockedUser) {
    revalidatePath(`/${blockedUser.blocked.username}`);
  }

  return blockedUser;
};

export const onUnBlock = async (id: string) => {
  const unblockedUser = await unblockUser(id);

  revalidatePath("/");

  if (unblockedUser) {
    revalidatePath(`/${unblockedUser.blocked.username}`);
  }

  return unblockedUser;
};
