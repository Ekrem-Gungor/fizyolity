import { RiArrowRightLine } from "react-icons/ri";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import servicesData from "@/data/servicesData";

import "keen-slider/keen-slider.min.css";

export default function ServicesSection() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 16,
    },
    loop: true,
    mode: "free-snap",
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 25 },
      },
    },
  });

  const router = useRouter();

  function handleNavigateBlogDetail(service) {
    router.push(`/blog/${service.id}/${service.slug}`);
  }
  return (
    <>
      <section id="services" className="py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-muted">
          Tüm Hizmetlerimiz
        </h2>
        <div ref={sliderRef} className="keen-slider">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="keen-slider__slide cursor-pointer"
              onClick={() => handleNavigateBlogDetail(service)}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg gap-2 flex flex-col items-center">
                    {service.icon()}
                    <span>{service.title}</span>
                  </CardTitle>
                </CardHeader>
                {service.description && (
                  <CardContent>
                    <CardDescription className="text-center mt-2">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                )}
                <CardFooter className="justify-between mt-auto">
                  {/* Add footer actions here if needed */}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
