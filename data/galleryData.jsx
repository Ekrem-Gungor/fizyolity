import { ArrowRight } from "lucide-react";
import Link from "next/link";

const galleryData = [
  {
    src: `${process.env.NEXT_PUBLIC_SITE_URL}galeri-2.webp`,
    alt: "Fizyolity Image 1",
    label: "Fizyolity",
  },
  {
    src: `${process.env.NEXT_PUBLIC_SITE_URL}galeri-3.webp`,
    alt: "Fizyolity Image 2",
    label: "Fizyolity",
  },
  {
    src: `${process.env.NEXT_PUBLIC_SITE_URL}galeri-4.webp`,
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
