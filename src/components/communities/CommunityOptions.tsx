"use client";

import AfnMenu from "@/components/custom/AfnMenu";
import LeaveCommunityDialog from "@/components/dialogs/LeaveCommunityDialog";
import ReportDialog from "@/components/dialogs/ReportDialog";
import { Community } from "@/types/communities.type";
import { Option } from "@/types/menus.type";
import { ReportType } from "@/types/report.type";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";
import { LuEllipsis, LuFileText, LuLogOut } from "react-icons/lu";

interface CommunityOptionsProps {
  community: Community;
  isCreator: boolean;
  isJoined: boolean;
}

export default function CommunityOptions({
  community,
  isCreator,
  isJoined,
}: CommunityOptionsProps) {
  const [isReportCommunityDialogOpen, setIsReportCommunityDialogOpen] =
    useState({
      open: false,
    });
  const [isLeaveCommunityDialogOpen, setIsLeaveCommunityDialogOpen] = useState({
    open: false,
  });
  const router = useRouter();
  const options: Option[] = [
    {
      menu: "Report",
      onSelect: () => setIsReportCommunityDialogOpen({ open: true }),
      icon: <LuFileText />,
      condition: !isCreator,
    },
    {
      menu: "Leave community",
      onSelect: () => setIsLeaveCommunityDialogOpen({ open: true }),
      icon: <LuLogOut />,
      condition: isJoined && !isCreator,
    },
    {
      menu: "Create Event",
      onSelect: () => router.push(`/communities/${community._id}/create-event`),
      condition: isCreator,
    },
  ];
  return (
    <Fragment>
      <AfnMenu
        options={options}
        trigger={
          <Box
            backgroundColor={"var(--primary)"}
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
        type={ReportType.COMMUNITY}
        data={community}
        open={isReportCommunityDialogOpen.open}
        onOpenChange={setIsReportCommunityDialogOpen}
      />
      <LeaveCommunityDialog
        community={community}
        open={isLeaveCommunityDialogOpen.open}
        onOpenChange={setIsLeaveCommunityDialogOpen}
      />
    </Fragment>
  );
}
