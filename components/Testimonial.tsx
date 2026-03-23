import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

function Testimonial({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex">
      <div>
        <div className=" relative w-10 aspect-square ">
          <Image
            src={testimonial.profilePic ?? "/faceHolder.png"}
            alt="User profile picture"
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>
      <div className="ml-4 max-w-[25vw]">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Star
              key={`star-${i}`}
              className={` size-4 inline ${testimonial.rating > i ? " text-yellow-500 fill-yellow-500 stroke-yellow-500" : "text-gray-500 fill-gray-500 stroke-gray-500"} `}
            />
          ))}
        <p className="text-gray-600 italic">{testimonial.text}</p>
        <p className="font-bold text-lg">{testimonial.name}</p>
        <p className="text-gray-600">{testimonial.job}</p>
      </div>
    </div>
  );
}

export default Testimonial;
