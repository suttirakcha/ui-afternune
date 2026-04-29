import { Box, BoxProps } from "@chakra-ui/react";
import { LuX } from "react-icons/lu";

interface AfnCloseButtonProps extends BoxProps {
  onClick: () => void;
}

export default function AfnCloseButton({
  onClick,
  _hover,
  ...rest
}: AfnCloseButtonProps) {
  return (
    <Box
      color="var(--primary)"
      position="absolute"
      top={4}
      right={4}
      backgroundColor="#FFFFFF33"
      borderRadius="9999px"
      fontSize="28px"
      padding="4px"
      outline="none"
      cursor="pointer"
      transition="all .2s"
      _hover={{ color: "var(--secondary)", ..._hover }}
      onClick={onClick}
      {...rest}
    >
      <LuX strokeWidth={1.5} />
    </Box>
  );
}
