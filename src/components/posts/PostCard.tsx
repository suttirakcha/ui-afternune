"use client";

import AvatarUser from "@/components/avatar/AvatarUser";
import Loading from "@/components/custom/Loading";
import { Post } from "@/types/posts.type";
import { calculateTime } from "@/utils/calculate-time";
import {
  Card,
  CssProperties,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

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
  const { _id, caption, image_url, user, createdAt } = post;
  return (
    <Card.Root {...CARD_STYLES}>
      <Card.Body>
        <VStack gap={6} alignItems={"flex-start"}>
          {image_url ? (
            <Link href={`/posts/${_id}`}>
              <Image
                src={image_url}
                alt={caption ?? "afternune-img"}
                width={768}
                height={768}
                style={{
                  borderRadius: "16px",
                }}
              />
            </Link>
          ) : (
            <Loading />
          )}

          <AvatarUser user={user} />

          <HStack>
            <Text>{calculateTime(createdAt)}</Text>
            {/* <PostOptions post={post} /> */}
          </HStack>

          <Card.Description {...DESCRIPTION_STYLES}>{caption}</Card.Description>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
}
