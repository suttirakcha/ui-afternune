import { Heading } from "@chakra-ui/react";
import Link from "next/link";

interface LogoProps {
  fontSize?: string;
}

export default function Logo({ fontSize }: LogoProps) {
  return (
    <Link href="/">
      <Heading
        fontFamily={"Send Flowers"}
        fontSize={fontSize || "5xl"}
        lineHeight={"44px"}
      >
        Afternune
      </Heading>
    </Link>
  );
}
