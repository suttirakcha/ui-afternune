import AfnMenu from "@/components/custom/AfnMenu";
import { Option } from "@/types/menus.type";
import { Post } from "@/types/posts.type";
import { Box } from "@chakra-ui/react";
import React from "react";
import { LuEllipsis, LuFileText } from "react-icons/lu";

interface PostOptionsProps {
  post: Post;
}

export default function PostOptions({ post }: PostOptionsProps) {
  const options: Option[] = [
    {
      menu: "Report",
      // onSelect: () => setIsReportPostModalOpen({ open: true }),
      onSelect: () => console.log("REPORTED"),
      icon: <LuFileText />,
      // condition: !isCurrentPost,
    },
  ];
  return (
    <AfnMenu
      options={options}
      trigger={
        <Box
          backgroundColor={"var(--secondary)"}
          color={"white"}
          p={0.5}
          borderRadius={"9999px"}
          fontSize={"20px"}
          cursor={"pointer"}
        >
          <LuEllipsis />
        </Box>
      }
    />
  );
}
