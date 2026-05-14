import AfnTitle from "@/components/custom/AfnTitle";
import Greetings from "@/components/custom/Greetings";
import MainContainer from "@/components/custom/MainContainer";
import SearchForm from "@/components/forms/SearchForm";
import { getProfile } from "@/services/auth.service";
import { Stack } from "@chakra-ui/react";

export default async function Home() {
  const user = await getProfile();
  return (
    <MainContainer animated>
      <Stack mx={"auto"} maxWidth={"600px"} width={"100%"} gap={10}>
        <Greetings user={user} />
        <SearchForm />
      </Stack>
    </MainContainer>
  );
}
