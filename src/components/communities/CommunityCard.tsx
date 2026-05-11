"use client";

import AvatarUser from "@/components/avatar/AvatarUser";
import AfnBadge from "@/components/custom/AfnBadge";
import { Community } from "@/types/communities.type";
import { Avatar, Card, For, HStack, Stack, Text } from "@chakra-ui/react";
import { LuUsers } from "react-icons/lu";

interface CommunityCardProps {
  community: Community;
}

// export default function CommunityCard({ community }: CommunityCardProps) {
export default function CommunityCard() {
  // const { title, detail, image_url, members, categories, creator } = community;
  return (
    <Card.Root border={"2px solid #EA900040"} borderRadius={"16px"} p={6}>
      <Card.Body flexDirection={"row"} gap={6}>
        <Avatar.Root
          width={"128px"}
          height={"128px"}
          backgroundColor={"var(--light-orange)"}
          color={"var(--secondary)"}
        >
          {/* <Avatar.Fallback name={title} /> */}
          {/* {image_url && <Avatar.Image src={image_url} alt={title} />} */}
          <Avatar.Fallback name="Test community" />
        </Avatar.Root>
        <Stack gap={3}>
          <HStack>
            {/* <For each={categories}> */}
            <For each={["Music", "Sports"]}>
              {(category) => (
                <AfnBadge
                  width={"fit"}
                  fontSize={"14px"}
                  px={4}
                  py={1.5}
                  key={category}
                >
                  {category}
                </AfnBadge>
              )}
            </For>
          </HStack>
          <Card.Title
            fontSize={"24px"}
            fontWeight={600}
            color={"var(--secondary)"}
          >
            {/* {title} */}
            Test community
          </Card.Title>
          <Card.Description
            color={"var(--primary)"}
            fontSize={"20px"}
            fontWeight={500}
            lineHeight={"28px"}
            lineClamp={3}
          >
            {/* {detail} */}
            Test community detail
          </Card.Description>
          <HStack
            gap={2}
            fontWeight={600}
            fontSize={"20px"}
            color={"var(--secondary)"}
          >
            <LuUsers />
            <Text>
              {/* {members.length ?? 0} member{members.length === 1 ? "" : "s"} */}
              0 members
            </Text>
          </HStack>

          {/* <AvatarUser user={creator} /> */}
          <AvatarUser user={{ username: "Guest" }} />
        </Stack>
      </Card.Body>
    </Card.Root>
  );
}
