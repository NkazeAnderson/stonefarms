import Logo from "@/components/nav/Logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  CheckCircle,
  CheckCircle2,
  Coins,
  Facebook,
  Instagram,
  Play,
  Star,
  Tractor,
} from "lucide-react";
import Image from "next/image";
import { Label, Pie, PieChart } from "recharts";
import Header from "./Header";
import { Services, WhyWorkWithUsImages } from "./HomeClient";
import OrganisationsList from "./OrganisationsList";
import AboutUs from "./AboutUs";
import SDGSection from "./SDGSection";
import WhyInvest from "./WhyInvest";
import { services } from "@/constants";
import ImpactSummary from "./ImpactSummary";
import Testimonials from "./Testimonials";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div>
      {/* header */}
      <Header />
      {/* main */}
      <OrganisationsList />
      <AboutUs />
      <SDGSection />
      <WhyInvest />
      <Services services={services} />
      <ImpactSummary />
      <Testimonials />
      <Footer />
    </div>
  );
}
