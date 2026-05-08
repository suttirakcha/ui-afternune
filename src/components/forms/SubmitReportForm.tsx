import { Grid, Spinner, Stack, Text } from "@chakra-ui/react";
import { Formik } from "formik";
import { reportReasonList } from "@/schemas/report.schema";
import { ReportFormValues, ReportType } from "@/types/report.type";
import AfnRadioButtons from "@/components/custom/AfnRadioButtons";
import AfnButton from "@/components/custom/AfnButton";

interface SubmitReportFormProps {
  type: ReportType;
  onClose: () => void;
  data: unknown;
}

export default function SubmitReportForm({
  type,
  data,
  onClose,
}: SubmitReportFormProps) {
  const onSubmit = async (values: ReportFormValues) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        type,
        reason: "",
        data,
      }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, setFieldValue, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Stack w={"full"} gap={6}>
              <Text fontSize={24} color="var(--secondary)" lineHeight={"28px"}>
                Please select a reason you report this{" "}
                {type === ReportType.POST ? "post" : type.toLowerCase()}
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
                  {isSubmitting ? "Submitting..." : "Submit the report"}
                </AfnButton>
                <AfnButton variant={"outline"} onClick={onClose}>
                  Cancel
                </AfnButton>
              </Grid>
            </Stack>
          </form>
        );
      }}
    </Formik>
  );
}
