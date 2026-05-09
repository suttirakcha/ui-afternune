"use client";

import AfnMenu from "@/components/custom/AfnMenu";
import DeletePostDialog from "@/components/dialogs/DeletePostDialog";
import ReportDialog from "@/components/dialogs/ReportDialog";
import { Option } from "@/types/menus.type";
import { Post } from "@/types/posts.type";
import { ReportType } from "@/types/report.type";
import { User } from "@/types/users.type";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";
import { LuEllipsis, LuFileText, LuSquarePen, LuTrash2 } from "react-icons/lu";

interface PostOptionsProps {
  post: Post;
  profile: User;
}

export default function PostOptions({ post, profile }: PostOptionsProps) {
  const router = useRouter();
  const [isReportPostDialogOpen, setIsReportPostDialogOpen] = useState({
    open: false,
  });
  const [isDeletePostDialogOpen, setIsDeletePostDialogOpen] = useState({
    open: false,
  });

  const isProfileMatch = post.user_id === profile?._id;

  const options: Option[] = [
    {
      menu: "Report",
      onSelect: () => setIsReportPostDialogOpen({ open: true }),
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
      onSelect: () => setIsDeletePostDialogOpen({ open: true }),
      icon: <LuTrash2 />,
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
        open={isReportPostDialogOpen.open}
        onOpenChange={setIsReportPostDialogOpen}
        type={ReportType.POST}
        data={post}
      />
      <DeletePostDialog
        open={isDeletePostDialogOpen.open}
        onOpenChange={setIsDeletePostDialogOpen}
        post={post}
      />
    </Fragment>
  );
}
