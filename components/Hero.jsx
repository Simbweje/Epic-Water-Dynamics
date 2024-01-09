import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send, Mail } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import Badge from "./Badge";
import Socials from "./Socials";

import SvgComponent from "./SvgComponent";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero_bg_light bg-no-repeat bg-bottom bg-cover ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-x-8">
          <div className="flex flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Welcome to
            </div>
            <h1 className="h1 text-primary dark:text-white">
              Epic Water Dynamics
            </h1>
            <p className="subtittle max-w-[490px] text-black dark:text-white mx-auto xl:mx-0">
              We are a passionate team of scientists, engineers and managers
              dedicated to providing comprehensive consultancy, product
              development and training services. We combine extensive experience
              with cutting-edge technology to help governments, organizations
              and communities navigate the complexities of climate change and
              environmental management, water resources management and civil
              engineering works.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact us <Mail size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Success stories
                <Download size={18} />
              </Button>
            </div>

            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* Image and Badges Section */}
          <div className="hidden xl:flex relative">
            {/* SvgComponent as background */}
            <SvgComponent className="absolute inset-0 z-0" />

            {/* Other components with higher stacking order */}
            <Badge
              containerStyles="relative top-[34%] -left-[5rem] md:-left-[5rem] z-10"
              icon={<RiBriefcase4Fill />}
              endCountNum={15}
              badgetext="years of experience"
            />

            <Badge
              containerStyles="relative top-[80%] -left-[0rem] z-10"
              icon={<RiTodoFill />}
              endCountNum={87}
              badgetext="Completed Projects"
            />

            <Badge
              containerStyles="relative top-[55%] -left-5 z-10"
              icon={<RiTeamFill />}
              endCountNum={87}
              badgetext="Clients satisfied"
            />
          </div>
        </div>

        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
