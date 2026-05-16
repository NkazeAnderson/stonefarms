"use client";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React from "react";
import { Label, Pie, PieChart } from "recharts";

function ImpactSummary() {
  const [hasIntersected, setHasIntersected] = React.useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="z-10 px-4 md:px-20 py-10 min-h-[400px]">
      <h2 className="text-primary pt-10 pb-4 text-center">Impact Summary</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {hasIntersected &&
          [
            { count: 481, title: "Youths trained" },
            { count: 258, title: "Attestations issued" },
            { count: 33, title: "Agrepreneurs" },
            { count: 12, title: "Projects" },
          ].map((item, index) => (
            <div key={index}>
              <ChartContainer
                config={{}}
                className="mx-auto aspect-square max-h-[170px]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={[
                      { name: item.title, value: item.count, fill: "#4ade80" },
                    ]}
                    dataKey="value"
                    radius={60}
                    innerRadius={55}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-foreground text-lg font-semibold"
                              >
                                {`${item.count} +`}
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
              <p className=" text-center text-2xl font-bold">{item.title}</p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default ImpactSummary;
