"use client";

import { Grid, Spinner, Stack, Text } from "@chakra-ui/react";
import { Formik } from "formik";
import { reportReasonList } from "@/schemas/report.schema";
import { ReportFormValues, ReportType } from "@/types/report.type";
import AfnRadioButtons from "@/components/custom/AfnRadioButtons";
import AfnButton from "@/components/custom/AfnButton";
import { submitReport } from "@/services/reports.service";
import { handleMessage } from "@/utils/handle-message";
import { useTranslations } from "next-intl";

interface SubmitReportFormProps {
  type: ReportType;
  onClose: () => void;
  data_id: string;
}

export default function SubmitReportForm({
  type,
  data_id,
  onClose,
}: SubmitReportFormProps) {
  const t = useTranslations();
  const onSubmit = async (values: ReportFormValues) => {
    const response = await submitReport(data_id, values);
    if (!response.success) {
      return handleMessage(response.message);
    }
    handleMessage(response.message);
    onClose();
  };

  const INITIAL_VALUES = {
    type,
    reason: "",
    ...(type === ReportType.POST ? { post_id: data_id } : {}),
    ...(type === ReportType.USER ? { user_id: data_id } : {}),
    ...(type === ReportType.COMMUNITY ? { community_id: data_id } : {}),
  };

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
      {({ isSubmitting, setFieldValue, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Stack w={"full"} gap={6}>
              <Text fontSize={24} color="var(--secondary)" lineHeight={"28px"}>
                {t("Please select a reason you report", {
                  type: t(type.toLowerCase()),
                })}
              </Text>
              <AfnRadioButtons
                items={reportReasonList}
                onValueChange={(e) => setFieldValue("reason", e.value)}
              />
              <Grid templateColumns={"repeat(2, 1fr)"} gap={4}>
                <AfnButton
                  type="submit"
                  disabled={isSubmitting}
                  display={"flex"}
                >
                  {isSubmitting && <Spinner />}
                  {t(isSubmitting ? "Submitting" : "Submit the report")}
                </AfnButton>
                <AfnButton variant={"outline"} onClick={onClose}>
                  {t("Cancel")}
                </AfnButton>
              </Grid>
            </Stack>
          </form>
        );
      }}
    </Formik>
  );
}
