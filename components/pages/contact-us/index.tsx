import dynamic from "next/dynamic";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Facebook, Youtube } from "lucide-react";
import Link from "next/link";

const MyMap = dynamic(() => import("./Map"), { ssr: false });

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
              <p className=" leading-6!">
                <b>Email: </b> <a className=" text-primary font-medium underline!" href="mailto:info@stonefarms.org"> info@stonefarms.org</a> <br /> <br />
                <b>Phone: </b> <a className=" text-primary font-medium underline!" href="tel:+237651959778"> +237 6 51 95 97 78</a>  <br /> <br />
                <b>Location: </b> Chefferie Yaguem, Dschang, West Region, Cameroon<br /> <br />
              </p>
            </div>
            <div className=" py-4">
              <h4 className=" pb-2">Socials</h4>
              <div className="flex items-center gap-4">
                <Link href="https://www.facebook.com/people/Stone-Farms-Ltd-Cameroon/100083811033749/?_rdr">
                <Button className=" p-4 aspect-square bg-blue-700">
                  <Facebook />
                </Button></Link>

            
              </div>
            </div>
          </div>
          <div className=" space-y-4">
            <h4>Send a Quick Message</h4>
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
                className=" border-primary"
                placeholder="Your message"
              />
            </div>
            <div className=" flex items-center justify-center py-5">
              <Button className=" w-1/2">Send Message</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUsPage;
