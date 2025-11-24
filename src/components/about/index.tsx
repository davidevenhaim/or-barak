import { Container } from "@/components/ui/container";
import { Timeline } from "./timeline";
import { timelineEvents } from "@/lib/content/about";
import PotraitImage from "./potrait-image";
import Description from "./description";

const About = () => {
  return (
    <div className='min-h-screen bg-black dark:bg-black'>
      <Container className='py-12 md:py-20'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start'>
            <PotraitImage />
            <Description />
          </div>

          <div className='mt-6 md:mt-12'>
            <Timeline events={timelineEvents} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
