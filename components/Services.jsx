import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Mission Statement",
    description:
      "To empower communities, industries, and governments with expert consultancy and cutting-edge training in water resources management, ensuring sustainable practices, resilient infrastructure, and responsible stewardship of our planet's most vital resource. We are dedicated to fostering a holistic understanding of water dynamics, quality, and supply to address the challenges of today and cultivate a resilient future",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Vision",
    description:
      "To be a global leader in advancing water resources expertise and fostering a community of professionals committed to shaping a world where water is managed intelligently, sustainably, and inclusively. Through innovative solutions, collaborative partnerships, and continuous learning, we aim to be at the forefront of shaping the future of water resources management.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          Declaration
        </h2>

        <div className="grid xl:grid-cols-2 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[500px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
