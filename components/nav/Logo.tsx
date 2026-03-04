import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo({
  color = "coloured",
}: {
  color?: "black" | "white" | "coloured";
}) {
  return (
    <Link href={"/"}>
      <Image src={`/LOGO-${color}.png`} width={100} height={60} alt="Logo" />
    </Link>
  );
}

export default Logo;
