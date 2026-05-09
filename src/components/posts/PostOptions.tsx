"use client";

import AfnMenu from "@/components/custom/AfnMenu";
import ReportDialog from "@/components/dialogs/ReportDialog";
import { Option } from "@/types/menus.type";
import { Post } from "@/types/posts.type";
import { ReportType } from "@/types/report.type";
import { User } from "@/types/users.type";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";
import { LuEllipsis, LuFileText, LuSquarePen } from "react-icons/lu";

interface PostOptionsProps {
  post: Post;
  profile: User;
}

export default function PostOptions({ post, profile }: PostOptionsProps) {
  const router = useRouter();
  const [isReportPostModalOpen, setIsReportPostModalOpen] = useState({
    open: false,
  });

  const isProfileMatch = post.user_id === profile?._id;

  const options: Option[] = [
    {
      menu: "Report",
      onSelect: () => setIsReportPostModalOpen({ open: true }),
      icon: <LuFileText />,
      condition: !isProfileMatch,
    },
    {
      menu: "Edit post",
      onSelect: () => router.push(`/edit-post/${post._id}`),
      icon: <LuSquarePen />,
      condition: isProfileMatch,
    },
    {
      menu: "Delete post",
      // onSelect: () => setIsDeletePostModalOpen({ open: true }),
      onSelect: () => {},
      icon: <LuSquarePen />,
      condition: isProfileMatch,
    },
  ];
  return (
    <Fragment>
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

      <ReportDialog
        open={isReportPostModalOpen.open}
        onOpenChange={setIsReportPostModalOpen}
        type={ReportType.POST}
        data={post}
      />
    </Fragment>
  );
}
