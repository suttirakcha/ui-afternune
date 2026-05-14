"use client";

import {
  Toaster as ChakraToaster,
  Portal,
  Spinner,
  Stack,
  Toast,
  createToaster,
} from "@chakra-ui/react";

export const toaster = createToaster({
  placement: "top",
  pauseOnPageIdle: true,
  duration: 5000,
});

export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }}>
        {(toast) => (
          <Toast.Root
            width={{ md: "sm" }}
            border={"none"}
            boxShadow={"0 0 12px #ffdaa0"}
            borderRadius={"16px"}
          >
            {toast.type === "loading" ? (
              <Spinner size="sm" color="blue.solid" />
            ) : (
              <Toast.Indicator />
            )}
            <Stack gap={2} flex="1" p={4} maxWidth="100%">
              {toast.title && (
                <Toast.Title
                  color={"var(--secondary)"}
                  fontSize={"20px"}
                  fontWeight={600}
                >
                  {toast.title}
                </Toast.Title>
              )}
              {toast.description && (
                <Toast.Description
                  color={"var(--primary)"}
                  fontSize={"16px"}
                  fontWeight={500}
                >
                  {toast.description}
                </Toast.Description>
              )}
            </Stack>
            {toast.action && (
              <Toast.ActionTrigger
                borderColor={"var(--primary)"}
                color={"var(--primary)"}
                px={2}
                mr={2}
              >
                {toast.action.label}
              </Toast.ActionTrigger>
            )}
            {toast.closable && (
              <Toast.CloseTrigger top={2} right={2} color={"var(--primary)"} />
            )}
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  );
};
