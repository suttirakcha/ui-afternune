"use server";

import { handleFetchWithAuth } from "@/lib/handleFetch";
import { ReportFormValues } from "@/types/report.type";

export async function submitReport(id: string, values: ReportFormValues) {
  const response = await handleFetchWithAuth(`reports/${id}/report`, {
    method: "POST",
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message ?? "Failed to submit the report");
  }

  const data = await response.json();
  return { success: true, message: data.message };
}
