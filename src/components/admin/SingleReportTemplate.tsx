"use client";

import AfnTitle from "@/components/custom/AfnTitle";
import LinkBackBtn from "@/components/custom/LinkBackBtn";
import { Report } from "@/types/report.type";
import { Stack, Text } from "@chakra-ui/react";

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
    </Stack>
  );
}
