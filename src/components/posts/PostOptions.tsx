"use client";

import AfnMenu from "@/components/custom/AfnMenu";
import ReportDialog from "@/components/dialogs/ReportDialog";
import { Option } from "@/types/menus.type";
import { Post } from "@/types/posts.type";
import { ReportType } from "@/types/report.type";
import { Box } from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import { LuEllipsis, LuFileText } from "react-icons/lu";

interface PostOptionsProps {
  post: Post;
}

export default function PostOptions({ post }: PostOptionsProps) {
  const [isReportPostModalOpen, setIsReportPostModalOpen] = useState({
    open: false,
  });
  const options: Option[] = [
    {
      menu: "Report",
      onSelect: () => setIsReportPostModalOpen({ open: true }),
      icon: <LuFileText />,
      // condition: !isCurrentPost,
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
