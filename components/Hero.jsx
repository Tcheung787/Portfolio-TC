import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';

import {
  RiArrowDownSLine,
} from 'react-icons/ri';

// components
import DevImg from './DevImg';
import Socials from './Socials';

const Hero = () => {
  return (
    <section className='py-12 xl:py-26 h-[94vh] xl:pt-18 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
      <div className='container mx-auto '>
        <div className='flex justify-between gap-x-8'>
          {/* text */}
          <div className='flex max-w-[645px] flex-col justify-center mx-auto xl:mx-12 text-center xl:text-left'>
            <div className='text-3xl capitalize font-bold mb-5 text-primary tracking-[px]'>
              Designer, Developer, Student
            </div>
            <h1 className='h1 mb-5'>Tiffany Cheung</h1>
            <p className='subtitle max-w-[645px] mx-auto xl:mx-0'>
            Hi, I'm Tiffany! I'm a student at the University of Virginia pursuing a dual major in computer science and cognitive neuroscience, along with a minor in engineering business. I thrive at the intersection of technology, aesthetics, and business strategy, driven by my passion for enhancing and designing technology for the human experience.
            </p>
            {/* buttons */}
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-10'>
              <Link href='/contact'>
                <Button className='gap-x-2'>
                  Contact me
                  <Send size={20} />
                </Button>
              </Link>
              <Link href='/TiffanyC_Resume.pdf' target="_blank" rel="noopener noreferrer" download>
                <Button variant='secondary' className='gap-x-2'>
                  Resume
                  <Download size={20} />
                </Button>
              </Link>
            </div>
            {/* socials */}
            <Socials
              containerStyles='flex gap-x-6 mx-auto xl:mx-0'
              iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
            />
          </div>
          {/* image */}
          <div className='hidden xl:flex relative'>

            <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-8 -left-12'></div>
            <DevImg
            containerStyles='bg-hero_shape w-[450px] h-[450px] bg-no-repeat relative bg-bottom -mt-20 -left-12'
            imgSrc='/hero/developer.png'
            />
          </div>
        </div>
        {/* icon */}
                 <div className='hidden xl:flex absolute left-1/2 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div> 
      </div>
    </section>
  );
};

export default Hero;