"use client";

import AfnTitle from "@/components/custom/AfnTitle";
import LinkBackBtn from "@/components/custom/LinkBackBtn";
import { Report } from "@/types/report.type";
import { Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

interface SingleReportTemplateProps {
  report: Report;
}

export default function SingleReportTemplate({
  report,
}: SingleReportTemplateProps) {
  return (
    <Stack gap={10}>
      <LinkBackBtn href="/admin/reports">Back to reports</LinkBackBtn>
      <AfnTitle>Report detail</AfnTitle>
      <Stack>
        <Text>
          {report.type} ID: {report._id}
        </Text>
        <Text>Reason: {report.reason}</Text>
      </Stack>

      <Stack gap={6}>
        <AfnTitle>View</AfnTitle>
        {report.post && (
          <Stack>
            <Image
              src={report.post.image_url}
              alt={report.post.caption}
              width={240}
              height={240}
            />
            <Text fontSize={"18px"} fontWeight={500}>
              {report.post.caption}
            </Text>
          </Stack>
        )}
        {report.user && (
          <Stack>
            {report.user.image_url && (
              <Image
                src={report.user.image_url}
                alt={report.user.username}
                width={240}
                height={240}
              />
            )}
            <Text fontSize={"18px"} fontWeight={500}>
              {report.user.username}
            </Text>
            {report.user.bio && (
              <Text fontSize={"18px"} fontWeight={500}>
                {report.user.bio}
              </Text>
            )}
          </Stack>
        )}
        {report.community && (
          <Stack>
            {report.community.image_url && (
              <Image
                src={report.community.image_url}
                alt={report.community.title}
                width={240}
                height={240}
              />
            )}
            <AfnTitle>{report.community.title}</AfnTitle>
            <Text fontSize={"18px"} fontWeight={500}>
              {report.community.title}
            </Text>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}
