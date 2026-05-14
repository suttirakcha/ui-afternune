import ReportsTemplate from "@/components/admin/ReportsTemplate";
import { getReports } from "@/services/reports.service";

export default async function ReportsPage() {
  const reports = await getReports();
  return <ReportsTemplate reports={reports} />;
}
