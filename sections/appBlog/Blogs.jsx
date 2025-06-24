import { useRouter } from "next/navigation";
import { useKeenSlider } from "keen-slider/react";
import blogsData from "@/data/blogsData";
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
import { FaShare } from "react-icons/fa6";

export default function BlogsSection() {
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

  function handleNavigateBlogDetail(blog) {
    router.push(`/blog/${blog.id}/${blog.slug}`);
  }

  return (
    <>
      <section className="py-24" id="blogs">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-muted">
          Blogs
        </h2>
        <div ref={sliderRef} className="keen-slider">
          {blogsData.map((blog, index) => (
            <div
              key={index}
              className="keen-slider__slide cursor-pointer"
              onClick={() => handleNavigateBlogDetail(blog)}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg gap-2 flex flex-col items-center">
                    <span className="mb-2">{blog.iconClass}</span>
                    <span>{blog.title}</span>
                  </CardTitle>
                </CardHeader>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <CardContent>
                      <CardDescription className="text-center mt-2">
                        {blog.excerpt}
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
