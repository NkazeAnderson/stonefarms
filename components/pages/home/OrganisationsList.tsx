import Image from "next/image";
import React from "react";
import { OrganisationsListAnimation } from "./HomeClient";

function OrganisationsList() {
  return (
    <>
      <OrganisationsListAnimation />
      <section className="z-10">
        <h2 className=" text-center text-primary py-10">
          Organisation we have worked with
        </h2>
        <div className="flex overflow-visible gap-4 items-center -translate-x-14 logoHolder">
          {Array(10)
            .fill(0)
            .map((_, i) => {
              return (
                <div key={i}>
                  <div className="w-50">
                    <Image
                      className="rounded-xs"
                      src={"/uds.png"}
                      alt="Uds logo"
                      width={200}
                      height={60}
                    />
                    <p className=" font-bold text-black text-sm text-center">
                      University of Dschang
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}

export default OrganisationsList;
