import AfnAmount from "@/components/custom/AfnAmount";
import AfnTitle from "@/components/custom/AfnTitle";
import { getCommunityById } from "@/services/communities.service";
import { Avatar, AvatarGroup, HStack, Stack, Text } from "@chakra-ui/react";

interface CommunityDetailPageParams {
  params: Promise<{ id: string }>;
}

export default async function CommunityDetailPage({
  params,
}: CommunityDetailPageParams) {
  const { id } = await params;
  const community = await getCommunityById(id);

  return (
    <Stack gap={10}>
      <HStack gap={7} alignItems={"center"}>
        <AfnTitle>{community.title}</AfnTitle>
      </HStack>

      <HStack alignItems={"flex-start"} gap={"60px"}>
        <AvatarGroup>
          <Avatar.Root
            width={256}
            height={256}
            backgroundColor="var(--light-orange)"
            color="var(--secondary)"
          >
            <Avatar.Fallback name={community?.title} fontSize={40} />
            {community?.image_url && (
              <Avatar.Image src={community?.image_url} />
            )}
          </Avatar.Root>
        </AvatarGroup>

        <Stack gap="30px">
          <HStack color="var(--secondary)" gap="60px">
            <AfnAmount
              title="Members"
              // amount={community?.members?.length ?? 0}
              amount={0}
            />
          </HStack>

          <Text fontSize="20px" color={"var(--primary)"}>
            {community?.detail}
          </Text>
        </Stack>
      </HStack>
    </Stack>
  );
}
