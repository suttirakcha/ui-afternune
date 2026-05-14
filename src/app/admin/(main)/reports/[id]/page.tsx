import SingleReportTemplate from "@/components/admin/SingleReportTemplate";
import { getReportById } from "@/services/reports.service";

interface SingleReportPageParams {
  params: Promise<{ id: string }>;
}

export default async function SingleReportPage({
  params,
}: SingleReportPageParams) {
  const { id } = await params;
  const report = await getReportById(id);

  return <SingleReportTemplate report={report} />;
}
