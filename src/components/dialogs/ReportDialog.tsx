"use client";

import { Dialog, Portal } from "@chakra-ui/react";
import { ReportDialogProps } from "@/types/dialog.type";
import SubmitReportForm from "@/components/forms/SubmitReportForm";
import AfnDialog from "@/components/custom/AfnDialog";

export default function ReportDialog({
  data,
  type,
  open,
  onOpenChange,
}: ReportDialogProps) {
  const handleClose = () => {
    onOpenChange({ open: false });
  };
  return (
    <AfnDialog open={open} onOpenChange={onOpenChange}>
      <SubmitReportForm type={type} data={data} onClose={handleClose} />
    </AfnDialog>
  );
}
