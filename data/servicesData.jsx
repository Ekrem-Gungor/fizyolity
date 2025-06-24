import {
  RiUserCommunityLine,
  RiRestaurantLine,
  RiStethoscopeLine,
  RiPsychotherapyLine,
  RiOpenArmLine,
  RiWindyFill,
  RiWeightLine,
} from "react-icons/ri";
import { FaNutritionix } from "react-icons/fa";
import { LiaBabyCarriageSolid } from "react-icons/lia";
import { MdPregnantWoman } from "react-icons/md";
import { GrYoga } from "react-icons/gr";
import { TbYoga } from "react-icons/tb";

const servicesData = [
  {
    id: 1,
    icon: () => (
      <RiUserCommunityLine
        style={{ width: 50, height: 50 }}
        className="p-2 text-fizyolity rounded-full border-white/60"
      />
    ),
    title: "Fizyoterapi Danışmanlığı",
    slug: "fizyoterapiDanismanligi",
    description:
      "Fizyoterapi, hareket ve fonksiyonları geliştirmek, ağrıyı azaltmak ve genel yaşam kalitesini artırmak için uygulanan bir tedavi yöntemidir.",
  },
  {
    id: 2,
    icon: () => (
      <RiRestaurantLine
        style={{ width: 50, height: 50 }}
        className="p-2 text-fizyolity rounded-full border-white/60"
      />
    ),
    title: "Beslenme Danışmanlığı",
    slug: "beslenmeDanismanligi",
    description:
      "Sağlıklı ve dengeli bir yaşam için kişiye özel bir hizmettir. Yaş, sağlık durumu ve hedefler detaylı değerlendirilir.",
  },
  {
    id: 3,
    icon: () => (
      <RiStethoscopeLine
        style={{ width: 50, height: 50 }}
        className="p-2 text-fizyolity rounded-full border-white/60"
      />
    ),
    title: "İş Merkezlerine Sağlık Danışmanlığı",
    slug: "isMerkezlerineSaglikDanismanligi",
    description:
      "İş yerinize özel, bütüncül sağlık danışmanlığı: fizyoterapi, beslenme ve psikolojik destek bir arada sunulur.",
  },
  {
    id: 4,
    icon: () => (
      <FaNutritionix
        style={{ width: 50, height: 50 }}
        className="p-2 text-fizyolity rounded-full border-white/60"
      />
    ),
    title: "Sporcu Beslenmesi",
    slug: "sporcuBeslenmesi",
  },
  {
    id: 5,
    icon: () => (
      <LiaBabyCarriageSolid
        style={{ width: 50, height: 50 }}
        className="p-2 text-fizyolity rounded-full border-white/60"
      />
    ),
    title: "Gebelikte Beslenme",
    slug: "gebelikteBeslenme",
  },
  {
    id: 6,
    icon: () => (
      <RiPsychotherapyLine
        style={{ width: 50, height: 50 }}
        className="p-2 text-fizyolity rounded-full border-white/60"
      />
    ),
    title: "Manuel Terapi",
    slug: "manuelTerapi",
  },
  {
    id: 7,
    icon: () => (
      <RiOpenArmLine
        style={{ width: 50, height: 50 }}
        className="p-2 text-fizyolity rounded-full border-white/60"
      />
    ),
    title: "Klinik Pilates",
    slug: "klinikPilates",
  },
  {
    id: 8,
    icon: () => (
      <MdPregnantWoman
        style={{ width: 50, height: 50 }}
        className="p-1 text-fizyolity rounded-full border-white/60"
      />
    ),
    title: "Hamileler İçin Pilates",
    slug: "hamilelerIcinPilates",
  },
  {
    id: 9,
    icon: () => (
      <GrYoga
        style={{ width: 50, height: 50 }}
        className="p-2 text-fizyolity rounded-full border-white/60"
      />
    ),
    title: "Yoga",
    slug: "yoga",
  },
  {
    id: 10,
    icon: () => (
      <TbYoga
        style={{ width: 50, height: 50 }}
        className="p-2 text-fizyolity rounded-full border-white/60"
      />
    ),
    title: "Swing Yoga",
    slug: "swingYoga",
  },
  {
    id: 11,
    icon: () => (
      <RiWindyFill
        style={{ width: 50, height: 50 }}
        className="p-2 text-fizyolity rounded-full border-white/60"
      />
    ),
    title: "Osteopati",
    slug: "osteopati",
  },
  {
    id: 12,
    icon: () => (
      <RiWeightLine
        style={{ width: 50, height: 50 }}
        className="p-2 text-fizyolity rounded-full border-white/60"
      />
    ),
    title: "Fonksiyonel Egzersiz",
    slug: "fonksiyonelEgzersiz",
  },
];

export default servicesData;
