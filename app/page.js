"use client";

import { useEffect } from "react";
import { scroller } from "react-scroll";
import { useSearchParams } from "next/navigation";
import AboutUsSection from "@/sections/aboutUs/AboutUs";
import CarouselSection from "@/sections/carousel/Carousel";
import ServicesSection from "@/sections/appService/Services";
import VideosSection from "@/sections/appVideos/Videos";
import BlogsSection from "@/sections/appBlog/Blogs";
import GallerySection from "@/sections/gallery/Gallery";
import EventsSection from "@/sections/appEvent/Events";
import OurTeamSection from "@/sections/ourTeam/OurTeam";
import GoogleMapSection from "@/sections/googleMap/GoogleMap";
import DisclaimerSection from "@/sections/disclaimer/Disclaimer";

export default function Home() {
  const searchParams = useSearchParams();
  const targetSection = searchParams.get("section");

  useEffect(() => {
    if (targetSection) {
      scroller.scrollTo(targetSection, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -80, // sticky header yüksekliği kadar
      });
    }
  }, [targetSection]);

  return (
    <>
      <AboutUsSection />
      <CarouselSection />
      <ServicesSection />
      <VideosSection />
      <BlogsSection />
      <GallerySection />
      <EventsSection />
      <OurTeamSection />
      <GoogleMapSection />
      <DisclaimerSection />
    </>
  );
}
