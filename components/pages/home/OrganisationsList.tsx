import Image from "next/image";
import React from "react";
import { OrganisationsListAnimation } from "./HomeClient";
const organisationsList:{logo:string, name:string}[] = [
  {
    name: "Togeva",
    logo:"/togeva.png"
  },
  {
    name: "Aboyerd",
    logo:"/aboyerd.png"
  },
  {
  name: "Nature Guide",
  logo:"/nature_guide.png"
},
  {
  name: "Verdiante Technologie",
  logo:"/Groupe_general_verdiante_technologie.png"
},
  {
  name: "Humanitarian Hope Association",
  logo:"/humanitarian_hope_association.png"
},
]
function OrganisationsList() {
  return (
    <>
      <OrganisationsListAnimation />
      <section className="z-10 overflow-x-hidden">
        <h2 className=" text-center text-primary py-10">
          Organisation we have worked with
        </h2>
        <div className="flex w-max flex-nowrap items-center logoHolder">
          {[
            ...organisationsList,
            ...organisationsList,
            ...organisationsList,
            ...organisationsList,
          ].map((item, i) => {
            return (
              <div
                key={`${item.name}-${i}`}
                className="relative flex-shrink-0 pr-12 md:pr-24"
              >
                <div className="relative w-[30vw] md:w-[15vw] aspect-video">
                  <Image
                    className="rounded-xs object-contain"
                    src={item.logo}
                    alt={item.name}
                    fill
                  />
                </div>
                <p className="font-bold text-black text-sm text-center mt-2">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default OrganisationsList;
