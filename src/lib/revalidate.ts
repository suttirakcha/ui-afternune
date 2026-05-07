"use server";

import { revalidateTag } from "next/cache";

export const revalidateUserOnSidebar = async () => {
  revalidateTag("user");
};

export const revalidatePosts = async () => {
  revalidateTag("posts");
};
