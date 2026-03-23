import Testimonial from "@/components/Testimonial";
import { testimonials } from "@/constants";
import React from "react";

function Testimonials() {
  return (
    <section className="z-10 px-20 py-10 ">
      <h4 className="text-primary pt-10 pb-4 ">Testimonials</h4>
      <div className="flex gap-6">
        {testimonials.map((item) => (
          <Testimonial testimonial={item} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
