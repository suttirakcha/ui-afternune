"use client";

import AfnDatePicker from "@/components/custom/AfnDatePicker";
import AfnField from "@/components/custom/AfnField";
import AfnInput from "@/components/custom/AfnInput";
import AfnTextarea from "@/components/custom/AfnTextarea";
import SubmitButton from "@/components/custom/SubmitButton";
import { revalidateCommunity } from "@/lib/revalidate";
import { communityEventSchema } from "@/schemas/communities.schema";
import { uploadImage } from "@/services/cloudinary.service";
import {
  createCommunityEvent,
  updateCommunityEvent,
} from "@/services/communities.service";
import { useUploadImageStore } from "@/stores/useUploadImageStore";
import {
  Community,
  CommunityEvent,
  CommunityEventFieldValues,
} from "@/types/communities.type";
import { handleMessage } from "@/utils/handle-message";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { ChangeEvent, useRef } from "react";

interface CommunityEventFormProps {
  community: Community;
  communityEvent?: CommunityEvent;
}

export default function CommunityEventForm({
  community,
  communityEvent,
}: CommunityEventFormProps) {
  const router = useRouter();
  const imageRef = useRef<HTMLInputElement>(null);
  const { previewUrl, imageFile, setPreviewUrl, resetPreview } =
    useUploadImageStore();

  const onSubmit = async (values: CommunityEventFieldValues) => {
    let image_url = values.image_url;

    if (imageFile) {
      const imageResponse = await uploadImage(imageFile);
      if (!imageResponse?.secure_url) {
        return handleMessage("Failed to upload image");
      }

      image_url = imageResponse.secure_url;
    }

    const requestPayload = {
      event_name: values.event_name,
      event_detail: values.event_detail,
      image_url,
      start_date: values.start_date,
      end_date: values.end_date,
    };

    const response = communityEvent
      ? await updateCommunityEvent(
          community._id,
          communityEvent._id,
          requestPayload
        )
      : await createCommunityEvent(community._id, requestPayload);
    if (!response.success) {
      return handleMessage(response.message);
    }
    handleMessage(response.message);
    resetPreview();
    revalidateCommunity();
    router.push(`/communities/${community._id}`);
  };

  const INITIAL_VALUES = {
    event_name: "",
    event_detail: "",
    image_url: null,
    start_date: "",
    end_date: "",
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onSubmit}
      validationSchema={communityEventSchema}
    >
      {({
        handleSubmit,
        setFieldValue,
        errors,
        touched,
        values,
        isSubmitting,
      }) => {
        const handleSetPreviewUrl = (e: ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          if (!file) return;

          setPreviewUrl(file);
          setFieldValue("image_url", e.target.value);
        };

        const handleReset = () => {
          resetPreview();
          setFieldValue("image_url", null);
          if (imageRef.current) imageRef.current.value = "";
        };
        return (
          <form onSubmit={handleSubmit} className="form">
            <AfnField
              label="Event name"
              error={errors.event_name}
              touched={touched.event_name}
            >
              <AfnInput
                placeholder="Write your event name"
                defaultValue={values.event_name}
                disabled={isSubmitting}
                error={!!(errors.event_name && touched.event_name)}
                onChange={(e) => setFieldValue("event_name", e.target.value)}
              />
            </AfnField>
            <AfnField
              label="Event detail"
              error={errors.event_detail}
              touched={touched.event_detail}
            >
              <AfnTextarea
                placeholder="Write your event detail"
                defaultValue={values.event_detail}
                disabled={isSubmitting}
                error={!!(errors.event_detail && touched.event_detail)}
                onChange={(e) => setFieldValue("event_detail", e.target.value)}
              />
            </AfnField>
            <AfnField label="Event image (Optional)">
              <AfnInput
                ref={imageRef}
                type="file"
                disabled={isSubmitting}
                onChange={handleSetPreviewUrl}
                onReset={handleReset}
                previewUrl={previewUrl ?? (values.image_url || undefined)}
              />
            </AfnField>
            <AfnField
              label="Start date"
              error={errors.start_date}
              touched={touched.start_date}
            >
              <AfnDatePicker
                placeholder="Enter your start date"
                selected={
                  (values.start_date && new Date(values.start_date)) || null
                }
                onChange={(date) =>
                  setFieldValue("start_date", date?.toISOString())
                }
                minDate={new Date()}
              />
            </AfnField>
            <AfnField
              label="End date"
              error={errors.end_date}
              touched={touched.end_date}
            >
              <AfnDatePicker
                placeholder="Enter your end date"
                selected={
                  (values.end_date && new Date(values.end_date)) || null
                }
                onChange={(date) =>
                  setFieldValue("end_date", date?.toISOString())
                }
                minDate={new Date(values.start_date)}
              />
            </AfnField>

            <SubmitButton
              isSubmitting={isSubmitting}
              submitText={
                communityEvent
                  ? "Update community event"
                  : "Create community event"
              }
              submittingText={
                communityEvent
                  ? "Updating community event..."
                  : "Creating community event..."
              }
            />
          </form>
        );
      }}
    </Formik>
  );
}
