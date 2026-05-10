import { chatMessageSchema } from "@/schemas/messages.schema";
import { User } from "@/types/users.type";
import * as Yup from "yup";

export type ChatRoom = {
  readonly _id: string;
  receiver: User;
  sender: User;
  lastMessage: string;
};

export type ChatMessage = {
  readonly _id: string;
  message: string;
  sender: User;
  receiver: User;
  createdAt: string;
};

export type ChatMessageValues = Yup.InferType<typeof chatMessageSchema>;
