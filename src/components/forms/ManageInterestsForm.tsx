"use client";

import SubmitButton from "@/components/custom/SubmitButton";
import ManageInterestsCheckbox from "@/components/users/ManageInterestsCheckbox";
import { updateUser } from "@/services/users.service";
import { User } from "@/types/users.type";
import { handleMessage } from "@/utils/handle-message";
import { Formik } from "formik";

interface ManageInterestsFormProps {
  profile: User;
}

export default function ManageInterestsForm({
  profile,
}: ManageInterestsFormProps) {
  const INITIAL_VALUES = {
    interests: profile?.interests ?? [],
  };

  const onSubmit = async (values: { interests: string[] }) => {
    const response = await updateUser(values);
    if (!response.success) {
      return handleMessage(response.message);
    }
    handleMessage(response.message);
  };

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
      {({ handleSubmit, setFieldValue, isSubmitting }) => {
        return (
          <form onSubmit={handleSubmit} className="form">
            <ManageInterestsCheckbox
              defaultValues={profile?.interests}
              onValueChange={(values) => setFieldValue("interests", values)}
            />
            <SubmitButton
              isSubmitting={isSubmitting}
              submitText="Update interests"
              submittingText="Updating..."
            />
          </form>
        );
      }}
    </Formik>
  );
}
