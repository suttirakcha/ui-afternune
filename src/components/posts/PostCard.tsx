import Loading from "@/components/custom/Loading";
import { Card, CssProperties, Stack, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const CARD_STYLES = {
  border: "2px solid #EA900040",
  borderRadius: "16px",
  padding: 6,
} satisfies CssProperties;

export default function PostCard() {
  return (
    <Card.Root {...CARD_STYLES}>
      <Card.Body>
        <VStack gap={6} alignItems={"flex-start"}>
          {/* {image_url ? (
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
          )} */}
        </VStack>
      </Card.Body>
    </Card.Root>
  );
}
