import { Nfc } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function DonateButton() {
    
    return <Link href="/donate">
<Button
            className="bg-accent text-white rounded-4xl hover:cursor-pointer hover:scale-105 ease-in-out"
            size={"lg"}
          >
            Donate
            <Nfc />
          </Button>
    </Link> 
}