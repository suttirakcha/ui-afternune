"use client";

import AfnTitle from "@/components/custom/AfnTitle";
import LinkBackBtn from "@/components/custom/LinkBackBtn";
import MainContainer from "@/components/custom/MainContainer";
import PostForm from "@/components/forms/PostForm";
import { Post } from "@/types/posts.type";
import { Stack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

interface PostFormTemplateProps {
  post?: Post;
}

export default function PostFormTemplate({ post }: PostFormTemplateProps) {
  const t = useTranslations();
  return (
    <MainContainer animated>
      <Stack maxWidth={600} width="full" marginX="auto" gap={10}>
        <LinkBackBtn href="/posts">{t("Back to posts")}</LinkBackBtn>
        <AfnTitle>{t(post ? "Update post" : "Create post")}</AfnTitle>
        <PostForm post={post} />
      </Stack>
    </MainContainer>
  );
}
