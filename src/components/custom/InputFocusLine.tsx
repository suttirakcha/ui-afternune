import { Stack } from "@chakra-ui/react";
import { Fragment } from "react";

interface InputFocusLineProps {
  error?: boolean;
}

export default function InputFocusLine({ error }: InputFocusLineProps) {
  const inputLineBottomStyles = {
    height: "2px",
    position: "absolute",
    bottom: 0,
  };
  return (
    <Fragment>
      <Stack
        as={"span"}
        width={0}
        zIndex={1}
        bgColor={error ? "var(--chakra-colors-fg-error)" : "var(--primary)"}
        transition={"width .3s"}
        data-focus={"true"}
        _peerFocus={{
          width: "100%",
        }}
        {...inputLineBottomStyles}
      ></Stack>
      <Stack
        as={"span"}
        width={"100%"}
        bgColor={
          error
            ? "var(--chakra-colors-red-emphasized)"
            : "var(--light-orange-2)"
        }
        {...inputLineBottomStyles}
      ></Stack>
    </Fragment>
  );
}
