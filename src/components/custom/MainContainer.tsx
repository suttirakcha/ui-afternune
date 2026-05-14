import { Container, ContainerProps, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface MainContainerProps extends ContainerProps {
  children: Readonly<ReactNode>;
  animated?: boolean;
}

const BASE_CONTAINER_STYLES = {
  position: "relative",
  minH: "calc(100dvh - 60px)",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  mx: "auto",
} satisfies ContainerProps;

const DEFAULT_SPACING = {
  mt: "60px",
  px: "120px",
  py: "40px",
  lg: {
    minH: "100dvh",
    mt: "0",
  },
} satisfies ContainerProps;

export default function MainContainer({
  children,
  animated = false,
  ...props
}: MainContainerProps) {
  const { mt, px, py, lg, ...restProps } = props;

  const containerStyles: ContainerProps = {
    ...BASE_CONTAINER_STYLES,
    ...restProps,
    mt: mt ?? DEFAULT_SPACING.mt,
    px: px ?? DEFAULT_SPACING.px,
    py: py ?? DEFAULT_SPACING.py,
    lg: {
      minH: lg?.minH ?? DEFAULT_SPACING.lg.minH,
      mt: lg?.mt ?? DEFAULT_SPACING.lg.mt,
    },
  };

  return (
    <Container {...containerStyles}>
      <Stack w="100%" animation={animated ? "fade-in 1.5s" : "none"}>
        {children}
      </Stack>
    </Container>
  );
}
