"use client";

import AfnButton from "@/components/custom/AfnButton";
import AfnInput from "@/components/custom/AfnInput";
import pusherClient from "@/lib/pusher";
import { chatMessageSchema } from "@/schemas/messages.schema";
import { sendMessageToReceiverId } from "@/services/messages.service";
import { ChatMessageValues } from "@/types/messages.type";
import { handleMessage } from "@/utils/handle-message";
import { Box } from "@chakra-ui/react";
import { Formik, FormikHelpers } from "formik";
import { useEffect } from "react";
import { LuSend } from "react-icons/lu";

interface ChatMessageFormProps {
  receiver_id: string;
}

const SEND_BTN_STYLES = {
  bgColor: "transparent!",
  color: "var(--primary)",
  p: 0,
  position: "absolute",
  top: 0,
  right: 0,
};

const INITIAL_VALUES = {
  message: "",
};

export default function ChatMessageForm({ receiver_id }: ChatMessageFormProps) {
  const onSubmit = async (
    values: ChatMessageValues,
    actions: FormikHelpers<ChatMessageValues>
  ) => {
    const response = await sendMessageToReceiverId(receiver_id, values);
    if (!response.success) {
      return handleMessage(response.message);
    }

    actions.setFieldValue("message", "");
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={chatMessageSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, setFieldValue, values }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Box position={"relative"}>
              <AfnInput
                placeholder="Type a message"
                onChange={(e) => setFieldValue("message", e.target.value)}
                value={values.message}
              />
              <AfnButton {...SEND_BTN_STYLES} type="submit">
                <LuSend className="submit-icon" />
                Send
              </AfnButton>
            </Box>
          </form>
        );
      }}
    </Formik>
  );
}
