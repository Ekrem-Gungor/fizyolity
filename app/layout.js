import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fizyolity",
  description: "Herkes ve Her Şey için Yetenek.",
  keywords:
    "fizyoterapi, rehabilitasyon, sağlık, fizyolity, manuel terapi, manipülasyon, egzersiz , pilates, reformer pilates,yoga , yoga terapi ,swing yoga , bel ağrısı , boyun ağrısı, sırt ağrısı , duruş bozuklukları , postür eğitimi, sağlıkllı yaşam, yoga kampı, nefes egzersizleri , çene ağrısı, kulak çınlaması , baş ağrısı,migren, osteopati , fonksiyonel egzersiz, tedavi egzersizleri , terapötik egzersiz , düz taban, kalça ağrısı , post operatif tedavi , bel fıtığı, boyun fıtığı , siyatik ağrısı , hamilelikte egzersiz, hamile pilatesi , hamile yogası, yüz yogası , diyafram egzersileri, eklem ağrıları, fibromiyalji, karpal tünel, tenisçi dirseği , recovery seans , sporcu fizyoterapisi , spor spesifik egzersizler, kronik ağrı, koşucu sağlığı , omuz ağrısı, streching, esneme egzersizleri, mobilite, nörolojik rehabilitasyon, pelvik taban , priformis sendromu, elde karıncalanma, sinir sıkışması, pcosda beslenme",
  cannonical: "https://fizyolity.com.tr",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <Header />
        <main className="flex-1 md:px-28">
          <TooltipProvider>{children}</TooltipProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
