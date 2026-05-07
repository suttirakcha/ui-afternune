"use client";

import AvatarUser from "@/components/avatar/AvatarUser";
import defaultImage from "../../../public/afternune-icon.svg";
import PostInteractions from "@/components/posts/PostInteractions";
import { Post } from "@/types/posts.type";
import { Card, CssProperties, Stack, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

interface PostCardProps {
  post: Post;
}

const CARD_STYLES = {
  border: "2px solid #EA900040",
  borderRadius: "16px",
  padding: 6,
} satisfies CssProperties;

const DESCRIPTION_STYLES = {
  color: "var(--primary)",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "28px",
} satisfies CssProperties;

export default function PostCard({ post }: PostCardProps) {
  const { _id, caption, image_url, user } = post;

  return (
    <Card.Root {...CARD_STYLES}>
      <Card.Body>
        <VStack gap={6} alignItems={"flex-start"}>
          <Link href={`/posts/${_id}`} style={{ width: "100%" }}>
            <Suspense
              fallback={
                <Stack
                  width="full"
                  height="400px"
                  alignItems="center"
                  justifyContent="center"
                  backgroundColor="var(--light-orange)"
                  borderRadius="16px"
                >
                  <Image
                    src={defaultImage}
                    alt={caption ?? "afternune-img"}
                    width={64}
                    height={64}
                  />
                </Stack>
              }
            >
              {image_url && (
                <Image
                  src={image_url}
                  alt={caption ?? "afternune-img"}
                  width={768}
                  height={768}
                  style={{
                    borderRadius: "16px",
                  }}
                />
              )}
            </Suspense>
          </Link>

          <AvatarUser user={user} link={`/profile/${user._id}`} />
          <PostInteractions post={post} />

          <Card.Description {...DESCRIPTION_STYLES}>{caption}</Card.Description>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
}
