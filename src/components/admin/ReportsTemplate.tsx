"use client";

import AfnTitle from "@/components/custom/AfnTitle";
import { Report } from "@/types/report.type";
import { Stack, Table, Text } from "@chakra-ui/react";
import Link from "next/link";

interface ReportsTemplateProps {
  reports: Report[];
}

export default function ReportsTemplate({ reports }: ReportsTemplateProps) {
  const HEADER_STYLES = {
    color: "var(--secondary)",
    fontWeight: 600,
    fontSize: "16px",
  };

  return (
    <Stack gap={10}>
      <Stack>
        <AfnTitle>Reports</AfnTitle>
        <Text>
          The admin has the rights to consider posts, communities, users, and
          comments that may be against the community guideline
        </Text>
      </Stack>

      <Table.Root size={"md"}>
        <Table.Header h={10}>
          <Table.Row>
            <Table.ColumnHeader {...HEADER_STYLES}>ID</Table.ColumnHeader>
            <Table.ColumnHeader {...HEADER_STYLES}>Reason</Table.ColumnHeader>
            <Table.ColumnHeader {...HEADER_STYLES}>Type</Table.ColumnHeader>
            <Table.ColumnHeader {...HEADER_STYLES}>Actions</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {reports.map((report) => (
            <Table.Row key={report._id} h={10}>
              <Table.Cell>{report._id}</Table.Cell>
              <Table.Cell>{report.reason}</Table.Cell>
              <Table.Cell>{report.type}</Table.Cell>
              <Table.Cell>
                <Link href={`/admin/reports/${report._id}`}>View</Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Stack>
  );
}
