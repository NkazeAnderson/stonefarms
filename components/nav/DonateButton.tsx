import { Nfc } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function DonateButton() {
  return (
    <Button
      asChild
      className="rounded-4xl bg-accent text-white hover:brightness-110"
      size="lg"
    >
      <Link href="/donate">
        Donate
        <Nfc />
      </Link>
    </Button>
  );
}
