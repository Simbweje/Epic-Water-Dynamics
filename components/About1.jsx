import Image from "next/image";
import HeroImage from "../public/about/success.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import DevImg from "./DevImg";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Thabit Simbweje",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+265 884 367 489",
  },
  {
    icon: <MailIcon size={20} />,
    text: "Thabitsimbweje@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 1st March",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bsc",
  },
  {
    icon: <User2 size={20} />,
    text: "Thabit Simbweje",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        University: "Mzuni",
        Qualification: "Master of Science",
        Years: "2019 - 2023",
      },
      {
        University: "Mzuni",
        Qualification: "Master of Science",
        Years: "2019 - 2023",
      },
      {
        University: "Mzuni",
        Qualification: "Master of Science",
        Years: "2019 - 2023",
      },
      {
        University: "Mzuni",
        Qualification: "Master of Science",
        Years: "2019 - 2023",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Mamas ",
        role: "Master of Science",
        years: "2019 - 2023",
      },
      {
        company: "Mzuni",
        role: "Master of Science",
        years: "2019 - 2023",
      },
      {
        company: "Mzuni",
        role: "Master of Science",
        years: "2019 - 2023",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Programmer",
      },
      {
        name: "Thabit Simbweje",
      },
      {
        name: "Thabit Simbweje",
      },
      {
        name: "Thabit Simbweje",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/vscode.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container ma-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          What sets us apart from our contemporaries
        </h2>

        <div className="flex flex-col xl:flex-row">
          <div className=" hidden xl:flex flex-1 relative">
            <Image
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              src={HeroImage}
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Qualification
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Dedicated Lead
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Education
                </TabsTrigger>
              </TabsList>

              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4"> Qualification</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      At Epic Water Dynamics, we believe that rigorous academic
                      qualifications and continued professional development are
                      the cornerstones of delivering exceptional results for our
                      clients. That's why we invest heavily in our team,
                      composed of dedicated graduates and postgraduates, through
                      industry-accredited Universities and tailored in-house
                      workshops that refine their skills and build their
                      confidence. Our educated staff understand the nuances of
                      client communication, delivering news clearly and
                      empathetically, tailoring their approach to individual
                      needs.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="qualification">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4"> Dedicated Lead</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Unlike many of our contemporaries, our staff are all
                      in-house. Every single one of our projects is allocated a
                      dedicated Lead. This person is responsible for delivering
                      the project within the correct timescale and to the
                      highest possible standard. This person is also the named
                      point-of-contact for our client, providing a truly
                      personal service.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Education</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      We know that ecology in particular can be bewildering to
                      the layperson, so have decided to bridge this
                      knowledge-gap through some constructive education schemes.
                      We are also delivering an increasing number of bespoke
                      education sessions for schools and colleges as part of our
                      charitable initiatives. By doing this we aim to enthuse
                      the young environmentalists of the future!
                    </p>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
