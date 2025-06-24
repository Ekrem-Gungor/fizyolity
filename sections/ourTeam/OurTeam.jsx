import Head from "next/head";
import { RiInstagramLine, RiLinkedinBoxLine } from "react-icons/ri";
import teamMembers from "@/data/ourteamsData";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function OurTeamSection() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://fizyolity.com.tr/#ourteams" />
      </Head>
      <section id="ourteams" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white/90">
            Ekibimiz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <Card
                key={idx}
                className="bg-white/90 border border-gray-200 p-4 rounded-xl text-center shadow-lg transition duration-300"
              >
                <CardHeader>
                  <CardTitle>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full border-2 mx-auto w-32 h-32 object-cover mb-4"
                      loading="lazy"
                    />
                    <div className="text-xl font-semibold">{member.name}</div>
                  </CardTitle>
                  <CardDescription>
                    <div className="text-md mb-3 italic">
                      <strong>#</strong>
                      {member.role}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-medium mb-1">
                    <strong>Çalıştığı Alanlar</strong>
                  </div>
                  <ul className="text-sm mb-3">
                    {member.areas.map((area, i) => (
                      <li key={i}>{area}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center gap-4 mt-2">
                  {member.instagram && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-fizyolity"
                        >
                          <RiInstagramLine size={20} />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>Instagram</TooltipContent>
                    </Tooltip>
                  )}
                  {member.linkedin && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-fizyolity"
                        >
                          <RiLinkedinBoxLine size={20} />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>LinkedIn</TooltipContent>
                    </Tooltip>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
