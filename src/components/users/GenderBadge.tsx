"use client";

import AfnTitle from "@/components/custom/AfnTitle";
import { Gender } from "@/types/users.type";
import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { LuUserCheck } from "react-icons/lu";
import { TbMars, TbVenus } from "react-icons/tb";

interface GenderBadgeProps {
  gender: Gender;
}

export default function GenderBadge({
  gender = Gender.NOT_SPECIFIED,
}: GenderBadgeProps) {
  const genderColor =
    gender === Gender.FEMALE
      ? "#f078e4"
      : gender === Gender.MALE
      ? "#57b6ff"
      : "#949494";

  const genderStyles = {
    backgroundColor: genderColor,
    color: "white",
    px: 4,
    py: 2,
    borderRadius: "9999px",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  return (
    <Stack gap={4}>
      <AfnTitle>Gender</AfnTitle>
      <Flex {...genderStyles}>
        {gender === Gender.FEMALE ? (
          <TbVenus />
        ) : gender === Gender.MALE ? (
          <TbMars />
        ) : (
          <LuUserCheck />
        )}
        {gender}
      </Flex>
    </Stack>
  );
}
