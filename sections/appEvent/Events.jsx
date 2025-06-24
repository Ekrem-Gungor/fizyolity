import { useRouter } from "next/navigation";
import { useKeenSlider } from "keen-slider/react";
import eventsData from "@/data/eventsData";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "keen-slider/keen-slider.min.css";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RiCalendarCheckLine, RiArrowRightLine } from "react-icons/ri";
import { FaShare } from "react-icons/fa6";

export default function EventsSection() {
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

  function handleNavigateEventDetail(event) {
    router.push(`/event/details/${event.slug}`);
  }

  return (
    <>
      <section className="py-24" id="events">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-muted">
          Etkinliklerimiz
        </h2>
        <div ref={sliderRef} className="keen-slider">
          {eventsData.map((event, idx) => (
            <div
              key={idx}
              className="keen-slider__slide cursor-pointer"
              onClick={() => handleNavigateEventDetail(event)}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg gap-2 flex flex-col items-center">
                    <span className="mb-2">
                      <RiCalendarCheckLine className="w-14 h-14 p-2 text-white bg-fizyolity rounded-full border border-white/60" />
                    </span>
                    <span>{event.title}</span>
                  </CardTitle>
                </CardHeader>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <CardContent>
                      <CardDescription className="text-center mt-2">
                        {event.excerpt}
                      </CardDescription>
                    </CardContent>
                  </TooltipTrigger>
                  <TooltipContent className="flex items-center justify-center gap-2">
                    <p>Detay için tıkla</p> <FaShare />
                  </TooltipContent>
                </Tooltip>
                <CardFooter className="justify-center mt-auto"></CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
