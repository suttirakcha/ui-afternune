import Loading from "@/components/custom/Loading";
import { Stack } from "@chakra-ui/react";
import { forwardRef } from "react";

interface DataLoadingProps {
  onLoad: () => Promise<void>;
}

export const DataLoading = forwardRef<HTMLDivElement, DataLoadingProps>(
  ({ onLoad }, ref) => {
    return (
      <Stack alignItems="center" p={4} ref={ref} onLoad={onLoad}>
        <Loading />
      </Stack>
    );
  }
);
