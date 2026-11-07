"use client";

import { FormEvent } from "react";
import dynamic from "next/dynamic";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Facebook, Youtube } from "lucide-react";
import Link from "next/link";

const MyMap = dynamic(() => import("./Map"), { ssr: false });

function sendMessage(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const name = String(data.get("name") ?? "");
  const body = `Name: ${name}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\n\n${data.get("message")}`;
  const subject = encodeURIComponent(`Website enquiry from ${name}`);
  window.location.href = `mailto:info@stonefarms.org?subject=${subject}&body=${encodeURIComponent(body)}`;
}

function ContactUsPage() {
  return (
    <>
      <section className=" pt-[100px] z-0">
        <MyMap />
      </section>
      <section className=" px-4 md:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className=" flex flex-col justify-between">
            <div>
              <h4 className=" pb-4">Talk to management directly</h4>
              <p className=" leading-6">
                <b>Email: </b>{" "}
                <a
                  className=" text-primary font-medium underline"
                  href="mailto:info@stonefarms.org"
                >
                  {" "}
                  info@stonefarms.org
                </a>{" "}
                <br /> <br />
                <b>Phone: </b>{" "}
                <a
                  className=" text-primary font-medium underline"
                  href="tel:+237651959778"
                >
                  {" "}
                  +237 6 51 95 97 78
                </a>{" "}
                <br /> <br />
                <b>Location: </b> Chefferie Yaguem, Dschang, West Region,
                Cameroon
                <br /> <br />
              </p>
            </div>
            <div className=" py-4">
              <h4 className=" pb-2">Socials</h4>
              <div className="flex items-center gap-4">
                <Button
                  asChild
                  size="icon-lg"
                  className="bg-blue-700 hover:bg-blue-600"
                >
                  <Link
                    href="https://www.facebook.com/people/Stone-Farms-Ltd-Cameroon/100083811033749/?_rdr"
                    aria-label="Facebook"
                  >
                    <Facebook />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <form onSubmit={sendMessage} className=" space-y-4">
            <h4>Send a Quick Message</h4>
            <div>
              <label
                htmlFor="name"
                className=" text-primary font-semibold pb-1"
              >
                Name
              </label>
              <Input
                className=" border-primary"
                id="name"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className=" text-primary font-semibold pb-1"
              >
                Email
              </label>
              <Input
                className=" border-primary"
                id="email"
                name="email"
                required
                type="email"
                placeholder="Your email"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className=" text-primary font-semibold pb-1"
              >
                Phone
              </label>
              <Input
                className=" border-primary"
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your Phone"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className=" text-primary font-semibold pb-1"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                className=" border-primary"
                placeholder="Your message"
              />
            </div>
            <div className=" flex items-center justify-center py-5">
              <Button type="submit" className=" w-full md:w-1/2">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactUsPage;
