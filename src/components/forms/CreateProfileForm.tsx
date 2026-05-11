"use client";

import AfnButton from "@/components/custom/AfnButton";
import AfnCheckboxBadges from "@/components/custom/AfnCheckoutBadges";
import AfnDatePicker from "@/components/custom/AfnDatePicker";
import AfnField from "@/components/custom/AfnField";
import AfnRadioButtons from "@/components/custom/AfnRadioButtons";
import ManageInterestsCheckbox from "@/components/users/ManageInterestsCheckbox";
import { updateProfileSchema } from "@/schemas/users.schema";
import { updateUser } from "@/services/users.service";
import { Gender, Interests, UpdateProfileFormValues } from "@/types/users.type";
import { handleMessage } from "@/utils/handle-message";
import { Grid } from "@chakra-ui/react";
import { Formik } from "formik";

const INITIAL_VALUES = {
  date_of_birth: null,
  interests: [],
  gender: null,
};

const genders = [Gender.MALE, Gender.FEMALE, Gender.NOT_SPECIFIED].map(
  (gender) => ({
    label: gender,
    value: gender,
  })
);

interface CreateProfileFormProps {
  onSkip: () => void;
}

export default function CreateProfileForm({ onSkip }: CreateProfileFormProps) {
  const onSubmit = async (values: UpdateProfileFormValues) => {
    const response = await updateUser({
      ...values,
      is_first_time: false,
    });
    if (!response.success) {
      return handleMessage(response.message);
    }
    handleMessage(response.message);
    onSkip();
  };

  const handleSkip = async (is_first_time: boolean) => {
    await updateUser({ is_first_time });
    onSkip();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onSubmit}
      validationSchema={updateProfileSchema}
    >
      {({ handleSubmit, values, setFieldValue }) => {
        return (
          <form onSubmit={handleSubmit} className="form">
            <AfnField
              label="When is your birthday?"
              helper="Your birthday will not be shown publicly and cannot be modified."
            >
              <AfnDatePicker
                placeholder={"Enter your birthday"}
                selected={
                  (values.date_of_birth && new Date(values.date_of_birth)) ||
                  null
                }
                onChange={(date) =>
                  setFieldValue("date_of_birth", date?.toISOString())
                }
                maxDate={new Date()}
              />
            </AfnField>
            <AfnField
              label="What is your gender?"
              helper="Your gender cannot be modified after selected."
              gap={"16px"}
            >
              <AfnRadioButtons
                items={genders}
                onValueChange={(e) => setFieldValue("gender", e.value)}
              />
            </AfnField>
            <ManageInterestsCheckbox
              label="What are your interests? (Can select more than one)"
              onValueChange={(values) => setFieldValue("interests", values)}
            />
            <Grid templateColumns={"repeat(2, 1fr)"} gap={4}>
              <AfnButton type="submit">Next</AfnButton>
              <AfnButton variant={"outline"} onClick={() => handleSkip(false)}>
                Skip
              </AfnButton>
            </Grid>
          </form>
        );
      }}
    </Formik>
  );
}
