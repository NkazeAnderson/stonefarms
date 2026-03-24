import "leaflet/dist/leaflet.css";
import MyMap from "./Map";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Facebook, Youtube } from "lucide-react";

function ContactUsPage() {
  return (
    <>
      <section className=" pt-[100px]">
        <MyMap />
      </section>
      <section className=" px-20 py-10">
        <div className="grid grid-cols-2 gap-10">
          <div className=" flex flex-col justify-between">
            <div>
              <h4 className=" pb-4">Talk to management directly</h4>
              <p className=" leading-6">
                <b>Ceo: </b>Eng. John doe <br />
                <b>Email: </b> johndoe@gmail.com <br />
                <b>Phone: </b> +237 677 777 777 <br />
              </p>
            </div>
            <div className=" py-4">
              <h4 className=" pb-2">Socials</h4>
              <div className="flex items-center gap-4">
                <Button className=" p-4 aspect-square bg-blue-700">
                  <Facebook />
                </Button>

                <Button className=" p-4 aspect-square bg-blue-700">
                  <Youtube />
                </Button>
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
