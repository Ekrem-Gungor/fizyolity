"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Typewriter } from "react-simple-typewriter";
import { scroller } from "react-scroll";

const typedWords = [
  "mobility",
  "agility",
  "stability",
  "adaptability",
  "flexibility",
  "fizyolity",
];

const desktopMenu = [
  { id: "about", label: "Hakkımızda" },
  { id: "services", label: "Hizmetlerimiz" },
  { id: "blogs", label: "Blogs" },
  { id: "gallery", label: "Galeri" },
  { id: "events", label: "Etkinlikler" },
  { id: "ourteams", label: "Ekibimiz" },
  { id: "contact", label: "İletişim" },
];

const mobileMenu = [
  { id: "about", label: "Hakkımızda" },
  { id: "services", label: "Hizmetlerimiz" },
  { id: "blogs", label: "Blogs" },
  { id: "gallery", label: "Galeri" },
  { id: "events", label: "Etkinlikler" },
  { id: "ourteams", label: "Ekibimiz" },
  { id: "contact", label: "İletişim" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && window.innerWidth > 768) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    const isOnHome = pathname === "/";
    if (isOnHome) {
      scroller.scrollTo(sectionId, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    } else {
      router.push(`/?section=${sectionId}`);
    }
  };

  const handleMobileOnclick = (sectionId, isShow) => {
    handleNavClick(sectionId);
    setShowSidebar(isShow);
  };

  return (
    <header
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{
        backgroundImage: `url(/ana-ekran.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <nav
        className={`w-full flex items-center justify-between px-4 py-2 ${
          isScrolled ? "bg-white/0 backdrop-blur-md" : "bg-transparent"
        } fixed top-0 left-0 z-50`}
      >
        <div className="text-2xl font-bold text-white">
          <Link href="/">Fizyolity</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row gap-6 text-white items-center">
          {desktopMenu.map((item) => (
            <li
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="rounded-xl p-1 px-2 cursor-pointer hover:bg-white/20 hover:text-zinc-700 transition-all duration-400 ease-in-out flex items-center"
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowSidebar(true)}
          className="md:hidden text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="30"
            fill="#fff"
            viewBox="0 -960 960 960"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>

        {/* Mobile Sidebar */}
        {showSidebar && (
          <div className="fixed top-0 right-0 w-64 h-full bg-white bg-opacity-20 backdrop-blur-lg flex flex-col p-5 z-50">
            <button onClick={() => setShowSidebar(false)} className="self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                width="30"
                fill="#000"
                viewBox="0 -960 960 960"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
            <ul className="flex flex-col gap-4 mt-6 text-black">
              {mobileMenu.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleMobileOnclick(item.id, false)}
                  className="cursor-pointer"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <div className="absolute inset-0 bg-black/30 z-10 border-b-4 border-white/30" />

      {/* Hero Text */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white z-20">
        <h1 className="text-4xl md:text-6xl mb-4" data-aos="fade-up">
          Fizyoterapi ve <br /> Danışmanlık Merkezi
        </h1>
        <span className="text-2xl md:text-4xl bg-white/10 rounded-xl px-3 py-1 text-[#3f9c9f]">
          <Typewriter
            words={typedWords}
            typeSpeed={50}
            loop
            cursor
            cursorStyle="|"
            deleteSpeed={50}
            delaySpeed={2500}
          />
        </span>
      </div>
    </header>
  );
}
