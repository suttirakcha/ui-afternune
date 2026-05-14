import { Box, HStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const loadingSizes = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
};

interface LoadingProps {
  size?: keyof typeof loadingSizes;
}

export default function Loading({ size }: LoadingProps) {
  const loadingSize = loadingSizes[size ?? "lg"];
  const loadingAnim = keyframes`
    0% {
      transform: translateY(0);
      opacity: 0.5;
    }
    25% {
      transform: translateY(-${loadingSize / 2}px);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
      opacity: 0.5;
    }
  `;
  return (
    <HStack gap={`${loadingSize / 2}px`}>
      {Array.from({ length: 3 }).map((_, index) => {
        return (
          <Box
            key={index}
            backgroundColor={"var(--primary)"}
            width={`${loadingSize}px`}
            height={`${loadingSize}px`}
            borderRadius={"9999px"}
            animation={`${loadingAnim} ease 800ms ${index * 200}ms infinite`}
          />
        );
      })}
    </HStack>
  );
}
