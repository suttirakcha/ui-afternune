"use client";

import { ReportDialogProps } from "@/types/dialog.type";
import SubmitReportForm from "@/components/forms/SubmitReportForm";
import AfnDialog from "@/components/custom/AfnDialog";

export default function ReportDialog({
  data_id,
  type,
  open,
  onOpenChange,
}: ReportDialogProps) {
  const handleClose = () => {
    onOpenChange({ open: false });
  };
  return (
    <AfnDialog open={open} onOpenChange={onOpenChange}>
      <SubmitReportForm type={type} data_id={data_id} onClose={handleClose} />
    </AfnDialog>
  );
}
