import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function DisclaimerSection() {
  return (
    <>
      <section className="py-16" id="disclaimer">
        <div className="py-6 my-6 flex justify-center">
          <Card className="bg-white/60 border-4 border-black/5 w-full shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">
                Yasal Uyarı
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center md:text-lg leading-relaxed">
              <CardDescription className="text-gray-700 text-base mb-4">
                Sitemizin içeriği konuyla ilgili bilgi sahibi olmak isteyenlere
                yönelik hazırlanmıştır. Sitede bulunan yazılar herhangi bir
                teşhis veya tedavi önerisi amacı taşımaz. Sadece sitedeki
                bilgilerden yola çıkarak tedavi veya teşhis yapılmamalıdır.
                Hiçbir yazı, online görüşme veya konuşma, birebir muayene ve
                detaylı hikaye ile birlikte kararlaştırılan tedavi ve teşhisten
                güçlü değildir.
              </CardDescription>
              <div className="text-gray-800 font-semibold">
                Burada yer alan yazıların amacı, hastaların bilinçlendirilerek
                tedaviye aktif katılımlarını sağlamaktır.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
