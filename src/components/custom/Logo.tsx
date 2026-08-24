import { Heading } from "@chakra-ui/react";
import Link from "next/link";

interface LogoProps {
  fontSize?: string;
  lineHeight?: string;
}

export default function Logo({ lineHeight, fontSize }: LogoProps) {
  return (
    <Link href="/">
      <Heading
        fontFamily="Send Flowers"
        fontSize={fontSize ?? "5xl"}
        lineHeight={lineHeight ?? "44px"}
      >
        Afternune
      </Heading>
    </Link>
  );
}
