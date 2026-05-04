import { Stack } from "@chakra-ui/react";
import Link from "next/link";
import { LuCirclePlus } from "react-icons/lu";

export default function CreatePostButton() {
  return (
    <Link
      href="/"
      // href={isAuthenticated ? "/create-post" : ""}
      // onClick={handleCheckAuth}
    >
      <Stack
        border={"2px solid #EA900040"}
        borderRadius={"16px"}
        p={"12px"}
        flexDirection={"row"}
        alignItems={"center"}
        color={"var(--secondary)"}
        fontWeight={600}
        gap={4}
        fontSize={"20px"}
        transition={"background-color 150ms"}
        cursor={"pointer"}
        _hover={{
          backgroundColor: "var(--light-orange)",
        }}
      >
        <LuCirclePlus style={{ width: "32px", height: "32px" }} />
        Create post to share with your friends
      </Stack>
    </Link>
  );
}
