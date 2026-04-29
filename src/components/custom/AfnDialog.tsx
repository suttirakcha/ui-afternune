import { Dialog, DialogRootProps, Portal } from "@chakra-ui/react";
import { ReactNode } from "react";

interface AfnDialogProps extends DialogRootProps {
  children: ReactNode;
  trigger?: ReactNode;
  maxW?: string | number;
}

export default function AfnDialog({
  children,
  trigger,
  maxW,
  ...props
}: AfnDialogProps) {
  return (
    <Dialog.Root placement={"center"} {...props}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner p={4}>
          <Dialog.Content
            p={8}
            maxW={maxW || "600px"}
            borderRadius={"16px"}
            position={"relative"}
          >
            {children}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
