"use client";

import AfnMenu from "@/components/custom/AfnMenu";
import BlockUserDialog from "@/components/dialogs/BlockUserDialog";
import ReportDialog from "@/components/dialogs/ReportDialog";
import UnfollowDialog from "@/components/dialogs/UnfollowDialog";
import { Option } from "@/types/menus.type";
import { ReportType } from "@/types/report.type";
import { User } from "@/types/users.type";
import { Box } from "@chakra-ui/react";
import { Fragment, useState } from "react";
import {
  LuBan,
  LuEllipsis,
  LuFileText,
  LuLockKeyholeOpen,
  LuUserRoundX,
} from "react-icons/lu";

interface ProfileOptionsProps {
  profile: User;
  isAlreadyFollowed: boolean;
  isBlocked: boolean;
}

export default function ProfileOptions({
  profile,
  isAlreadyFollowed,
  isBlocked,
}: ProfileOptionsProps) {
  const [isReportDialogOpen, setIsReportDialogOpen] = useState({
    open: false,
  });
  const [isUnfollowDialogOpen, setIsUnfollowDialogOpen] = useState({
    open: false,
  });
  const [isBlockUserDialogOpen, setIsBlockUserDialogOpen] = useState({
    open: false,
  });
  const options: Option[] = [
    {
      menu: "Unfollow",
      onSelect: () => setIsUnfollowDialogOpen({ open: true }),
      icon: <LuUserRoundX />,
      condition: isAlreadyFollowed,
    },
    {
      menu: "Block",
      onSelect: () => setIsBlockUserDialogOpen({ open: true }),
      icon: <LuBan />,
      condition: !isBlocked,
    },
    {
      menu: "Unblock",
      onSelect: () => setIsBlockUserDialogOpen({ open: true }),
      icon: <LuLockKeyholeOpen />,
      condition: isBlocked,
    },
    {
      menu: "Report",
      onSelect: () => setIsReportDialogOpen({ open: true }),
      icon: <LuFileText />,
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
        open={isReportDialogOpen.open}
        onOpenChange={setIsReportDialogOpen}
        type={ReportType.USER}
        data_id={profile._id}
      />
      <UnfollowDialog
        profile={profile}
        open={isUnfollowDialogOpen.open}
        onOpenChange={setIsUnfollowDialogOpen}
      />
      <BlockUserDialog
        open={isBlockUserDialogOpen.open}
        onOpenChange={setIsBlockUserDialogOpen}
        profile={profile}
        isBlocked={isBlocked}
      />
    </Fragment>
  );
}
