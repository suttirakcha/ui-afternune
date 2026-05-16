"use client";

import AvatarUser from "@/components/avatar/AvatarUser";
import AfnCloseButton from "@/components/custom/AfnCloseButton";
import CommentForm from "@/components/forms/CommentForm";
import CommentList from "@/components/posts/CommentList";
import PostInteractions from "@/components/posts/PostInteractions";
import { Comment, Post } from "@/types/posts.type";
import { User } from "@/types/users.type";
import { Drawer, Skeleton, Stack, Text, VStack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CSSProperties, Suspense } from "react";

interface SinglePostDrawerProps {
  post: Post;
  comments: Comment[];
  profile: User;
}

const CONTENT_STYLES = {
  flexDirection: "column",
  width: "full",
  height: "full",
  padding: 6,
  gap: 8,
  overflow: "auto",
  lg: {
    flexDirection: "row",
    padding: 16,
    overflow: "auto",
  },
};

const INNER_CONTENT_STYLES = {
  justifyContent: "center",
  alignItems: "center",
  width: "full",
};

const POST_DETAIL_STYLES = {
  gap: 6,
  alignItems: "flex-start",
  width: "full",
  xl: {
    maxWidth: "400px",
  },
};

const IMAGE_STYLES = {
  objectFit: "contain",
  borderRadius: "16px",
  width: "100%",
  height: "100%",
} satisfies CSSProperties;

export default function SinglePostDrawer({
  post,
  comments,
  profile,
}: SinglePostDrawerProps) {
  const t = useTranslations();
  const router = useRouter();
  const { image_url, caption, user } = post;
  return (
    <Drawer.Root open={true} onOpenChange={router.back}>
      <Drawer.Positioner>
        <Drawer.Content width={"full"} maxWidth={"none"}>
          <Stack {...CONTENT_STYLES}>
            <Stack {...INNER_CONTENT_STYLES}>
              <Image
                src={image_url}
                alt={caption ?? "afternune-img"}
                width={768}
                height={768}
                style={IMAGE_STYLES}
              />
            </Stack>

            <VStack {...POST_DETAIL_STYLES}>
              <AvatarUser user={user} link={`/profile/${user._id}`} />
              <Drawer.Description
                color="var(--primary)"
                fontSize="20px"
                fontWeight={500}
                lineHeight="28px"
              >
                {caption}
              </Drawer.Description>
              <PostInteractions post={post} profile={profile} />

              {profile ? (
                <Suspense fallback={<Skeleton height={10} width="full" />}>
                  <Stack h="full" w="full" justifyContent="space-between">
                    <CommentList comments={comments} />
                    <CommentForm post={post} />
                  </Stack>
                </Suspense>
              ) : (
                <Text>{t("Please login to comment this post")}</Text>
              )}
            </VStack>
          </Stack>
          <AfnCloseButton onClick={router.back} />
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
}
