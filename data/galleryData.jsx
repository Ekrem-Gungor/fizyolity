import { ArrowRight } from "lucide-react";
import Link from "next/link";

const galleryData = [
  {
    src: "https://res.cloudinary.com/djoo0k153/image/upload/v1750773036/galeri-2_jdtjei.webp",
    alt: "Fizyolity Image 1",
    label: "Fizyolity",
  },
  {
    src: "https://res.cloudinary.com/djoo0k153/image/upload/v1750773044/galeri-3_oufyay.webp",
    alt: "Fizyolity Image 2",
    label: "Fizyolity",
  },
  {
    src: "https://res.cloudinary.com/djoo0k153/image/upload/v1750773041/galeri-4_mhu0uu.webp",
    alt: "Fizyolity Image 3",
    label: (
      <Link
        href="/gallery"
        className="inline-flex items-center gap-1 text-fizyolityhover hover:underline"
      >
        Daha fazla <ArrowRight size={16} />
      </Link>
    ),
  },
];

export default galleryData;
