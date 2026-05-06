import { Textarea, TextareaProps } from "@chakra-ui/react";
import { Fragment } from "react/jsx-runtime";

interface AfnTextareaProps extends TextareaProps {
  error?: boolean;
}

export default function AfnTextarea(props: AfnTextareaProps) {
  const { error, ...rest } = props;
  const BASE_TEXTAREA_PROPS = {
    borderRadius: "16px",
    color: "var(--secondary)",
    padding: "12px 16px",
    border: "none",
    outline: "none",
    fontWeight: 500,
    minHeight: "96px",
    bgColor: error ? "var(--chakra-colors-red-100)" : "var(--light-orange)",
    resize: "none",
  } satisfies TextareaProps;

  return <Textarea {...BASE_TEXTAREA_PROPS} {...rest}></Textarea>;
}
