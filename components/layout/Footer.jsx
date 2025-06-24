"use client";

import {
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaYoutube,
  FaLocationDot,
} from "react-icons/fa6";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { scroller } from "react-scroll";

const footerMenu = [
  { id: "about", label: "Hakkımızda" },
  { id: "services", label: "Hizmetlerimiz" },
  { id: "blogs", label: "Blogs" },
  { id: "gallery", label: "Galeri" },
  { id: "events", label: "Etkinlikler" },
  { id: "ourteams", label: "Ekibimiz" },
];

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const fizyolityInstagram = "https://www.instagram.com/fizyolity/";
  const fizyolityYoutube =
    "https://www.youtube.com/channel/UCevXYjAKGspDPJcuQlCJg_w";
  const googleMap = "https://maps.app.goo.gl/QsoMq5tb2dzawHjRA";
  const phoneNo = "5339289555";
  const mail = "info@fizyolity.com.tr";

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
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-800 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Üst Kısım */}
        <div className="flex flex-wrap justify-between gap-8">
          {/* Hızlı Bağlantılar */}
          <div className="w-full md:w-1/4">
            <h3 className="text-2xl border-b-2 border-fizyolity pb-2 mb-4">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-fizyolity transition">
                  Anasayfa
                </Link>
              </li>
              {footerMenu.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="hover:text-fizyolity cursor-pointer transition"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div className="w-full md:w-1/4">
            <h3 className="text-2xl border-b-2 border-fizyolity pb-2 mb-4">
              İletişim
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <FaLocationDot className="text-fizyolity mt-1 mr-2" />
                <Link
                  href={googleMap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-fizyolity transition"
                >
                  Sahrayıcedit Mah. Atatürk Cad. No:55 Dilkum 5 Sitesi Daire:12
                  Kat:1 Kadıköy/İstanbul
                </Link>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-fizyolity mr-2" />
                <Link
                  href={`tel:+90${phoneNo}`}
                  className="hover:text-fizyolity transition"
                >
                  +90 533 928 95 55
                </Link>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-fizyolity mr-2" />
                <Link
                  href={`mailto:${mail}`}
                  className="hover:text-fizyolity transition"
                >
                  info@fizyolity.com.tr
                </Link>
              </div>
            </div>
          </div>

          {/* Sosyal Medya */}
          <div className="w-full md:w-1/4">
            <h3 className="text-2xl border-b-2 border-fizyolity pb-2 mb-4">
              Bizi Takip Edin
            </h3>
            <div className="flex items-center space-x-4">
              <Link
                href={fizyolityInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fizyolity transition text-2xl"
              >
                <FaInstagram />
              </Link>
              <Link
                href={fizyolityYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fizyolity transition text-2xl"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm space-y-2">
          <p>
            &trade; This Web Site Development by{" "}
            <span className="text-red-500">&hearts;</span>{" "}
            <Link
              href={`https://www.instagram.com/ekremgungor/`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fizyolity transition"
            >
              Ekrem Güngör
            </Link>
          </p>
          <p>&copy; {currentYear} Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
