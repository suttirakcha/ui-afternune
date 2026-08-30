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
  marginTop: "60px",
  marginBottom: "76px",
  px: "24px",
  py: "40px",
  lg: {
    minH: "100dvh",
    marginTop: "0",
    marginBottom: "0",
    px: "120px",
  },
} satisfies ContainerProps;

export default function MainContainer({
  children,
  animated = false,
  ...props
}: MainContainerProps) {
  const { marginTop, marginBottom, px, py, lg, ...restProps } = props;

  const containerStyles: ContainerProps = {
    ...BASE_CONTAINER_STYLES,
    ...restProps,
    marginTop: marginTop ?? DEFAULT_SPACING.marginTop,
    marginBottom: marginTop ?? DEFAULT_SPACING.marginBottom,
    px: px ?? DEFAULT_SPACING.px,
    py: py ?? DEFAULT_SPACING.py,
    lg: {
      minH: lg?.minH ?? DEFAULT_SPACING.lg.minH,
      marginTop: lg?.marginTop ?? DEFAULT_SPACING.lg.marginTop,
      marginBottom: lg?.marginBottom ?? DEFAULT_SPACING.lg.marginBottom,
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
