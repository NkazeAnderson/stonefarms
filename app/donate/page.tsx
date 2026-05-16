import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Leaf, Users, GraduationCap, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DonatePage() {
  const donationTiers = [
    {
      amount: "$25",
      title: "Seed Starter",
      description:
        "Provides seeds and basic tools for one young farmer to start their first plot.",
      icon: <Leaf className="text-green-600" size={24} />,
    },
    {
      amount: "$100",
      title: "Growth Partner",
      description:
        "Funds a full week of climate-smart agriculture training for 5 students.",
      icon: <GraduationCap className="text-blue-600" size={24} />,
    },
    {
      amount: "$500",
      title: "Impact Champion",
      description:
        "Supports the establishment of a sustainable irrigation system for a community garden.",
      icon: <Users className="text-orange-600" size={24} />,
    },
  ];

  return (
    <main className="pt-[100px] bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/gallery/FB_IMG_17042115548449014.jpg"
          alt="Impact of agriculture"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <Badge className="bg-accent text-accent-foreground mb-4 py-1 px-4 text-lg">
            Help Us Grow
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Invest in a Sustainable Future
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Your contribution directly empowers the next generation of African
            farmers and helps preserve our planet's biodiversity.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 md:px-20 bg-primary-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center space-y-4">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg text-primary">
              <Users size={32} />
            </div>
            <h3 className="text-4xl font-bold text-primary">481+</h3>
            <p className="text-gray-600 font-medium uppercase tracking-wider">
              Youths Trained
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg text-primary">
              <Leaf size={32} />
            </div>
            <h3 className="text-4xl font-bold text-primary">33</h3>
            <p className="text-gray-600 font-medium uppercase tracking-wider">
              Agrepreneurs Supported
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg text-primary">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-4xl font-bold text-primary">258</h3>
            <p className="text-gray-600 font-medium uppercase tracking-wider">
              Attestations Issued
            </p>
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-20 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-primary text-4xl font-bold mb-4">
              Choose Your Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every donation, no matter the size, helps us move closer to our
              goal of sustainable food security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donationTiers.map((tier, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="mb-4">{tier.icon}</div>
                  <CardTitle className="text-3xl font-bold text-primary">
                    {tier.amount}
                  </CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {tier.title}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {tier.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-primary-600 group-hover:scale-[1.02] transition-transform">
                    Donate Now <ArrowRight className="ml-2 size-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Payment Methods */}
      <section className="py-20 px-4 md:px-20 bg-primary-900 text-white rounded-t-[50px]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Other Ways to Give</h2>
            <p className="text-primary-100 mb-8 text-lg">
              We accept direct bank transfers and mobile money for local and
              international supporters. Your transparency is our priority.
            </p>

            <div className="space-y-6">
              <div className="bg-primary-800 p-6 rounded-2xl border border-primary-700">
                <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div> Bank
                  Transfer
                </h4>
                <div className="text-primary-100 font-mono space-y-1">
                  <p>
                    Bank:{" "}
                    <b className="text-white">Afriland First Bank - Cameroon</b>
                  </p>
                  <p>
                    Account Name:{" "}
                    <b className="text-white">
                      SUSTAINABLE ORGANIZATION OF TRANSFORMERS AGRICULTURE
                      NETWORK
                    </b>
                  </p>
                  <p>
                    Account Number:{" "}
                    <b className="text-white">10005 00030 00000043085 96</b>
                  </p>
                  <p>
                    IBAN:{" "}
                    <b className="text-white">
                      CM21 10005 00030 00000043085 - 96
                    </b>
                  </p>
                </div>
              </div>

              <div className="bg-primary-800 p-6 rounded-2xl border border-primary-700">
                <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>{" "}
                  Mobile Money (Cameroon)
                </h4>
                <div className="text-primary-100 font-mono space-y-1">
                  <p>
                    MTN MoMo: <b className="text-white">+237 651959778</b>
                  </p>
                  <p>
                    Name: <b className="text-white">StoneFarms Management</b>
                  </p>
                </div>
                <div className="text-primary-100 font-mono space-y-1">
                  <p>
                    Orange Money: <b className="text-white">+237 657501715</b>
                  </p>
                  <p>
                    Name: <b className="text-white">StoneFarms Management</b>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/gallery/IMG_20240907_140519.jpg"
              alt="Happy farmer"
              fill
              className="object-scale-down"
            />
          </div>
        </div>
      </section>

      {/* Contact for Major Gifts */}
      <section className="py-20 px-4 md:px-20 text-center">
        <h3 className="text-2xl font-bold text-primary mb-4">
          Interested in a Major Partnership?
        </h3>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          For corporate sponsorships or significant philanthropic gifts, please
          reach out to our management team directly.
        </p>
        <Link href="mailto:info@stonefarms.org?subject=Major%20Partnership">
          <Button variant="outline" size="lg" className="rounded-full px-10">
            Contact Management
          </Button>
        </Link>
      </section>
    </main>
  );
}
