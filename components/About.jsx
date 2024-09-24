import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  User2,
  MailIcon,
  PhoneCall,
  GraduationCap,
} from 'lucide-react';

const infoData = [
  {
    icon: <User2 size={30} />,
    text: 'Tiffany Cheung',
  },
  {
    icon: <PhoneCall size={30} />,
    text: '(540) 398 1572',
  },
  {
    icon: <MailIcon size={30} />,
    text: 'cheungtiffany02@gmail.com',
  },
  {
    icon: <GraduationCap size={30} />,
    text: 'Computer Science & Cognitive Neuroscience',
  },
];

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'University of Virginia',
        role: 'Echols Scholar',
        degree: 'Bachelor of Arts: Computer Science & Cognitive Neuroscience',
        minor: 'Minor: Engineering Business',
        years: '2021 - 2025',
      },
      {
        university: 'Lord Fairfax Community College',
        role: 'GPA: 4.0, Summa Cum Laude, President\'s List',
        degree: 'Associate of Applied Science',
        minor: 'Associate of Arts and Science General Studies',
        years: '2019 - 2021',
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        position: 'Leidos Systems Engineering Intern',
        description: 'Provided engineering support for DHS Priority Services for national security and emergency preparedness',
        years: '2024 - Present',
      },
      {
        position: 'UVA Echols Mentor',
        description: 'Guided and mentored 50+ incoming scholars by providing detailed insights and support to ease their transition to college',
        years: '2023 - Present',
      },
      {
        position: 'Target Team Member',
        description: 'Trained 10+ employees and handled customer transactions to provide excellent customer service',
        years: '2022 - 2023',
      },
/*       {
        position: 'Millbrook High School Calculus and Statistics Tutor',
        description: '- Tutored and assisted 25+ students in Calculus 1 & 2, and Statistics 1',
        years: '2020 - 2021',
      }, */
    ],
  },
];

const skillData = [
  {
    title: 'skills',
    data: [
      {
        name: 'Javascript, HTML/CSS, TypeScript, Python, Java, MATLAB, SQL, C/C++',
      },
      {
        name: 'React, Tailwind CSS, Framer Motion, Next.js, Node.js, JavaFX, JUnit, Selenium',
      },
      {
        name: 'Methodologies: Kanban, Scrum, Agile, Waterfall',
      },
    ],
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/vscode.svg',
        link: 'https://code.visualstudio.com/',
      },
      {
        imgPath: '/about/figma.svg',
        link: 'https://www.figma.com/',
      },
      {
        imgPath: '/about/git.svg',
        link: 'https://git-scm.com/',
      },
      {
        imgPath: '/about/gradle.svg',
        link: 'https://gradle.org/',
      },
      {
        imgPath: '/about/intellj.svg',
        link: 'https://www.jetbrains.com/idea/',
      },
      {
        imgPath: '/about/pycharm.svg',
        link: 'https://www.jetbrains.com/pycharm/',
      },
      {
        imgPath: '/about/eclipse.svg',
        link: 'https://www.eclipse.org/',
      },

    ],
  },
];
const certificationData = [
  {
    title: 'certifications',
    data: [
      {
        name: 'Deloitte Australia Technology Job Simulation Certification',
      },
      {
        name: 'Goldman Sachs Software Engineering Job Simulation Certification',
      },
      {
        name: 'Product Management Basics Certification',
      },
      {
        name: 'Siemens Mobility Project Manager Job Simulation Certification',
      },
      {
        name: 'Pre-Allied Health Career Studies Certification',
      },
      {
        name: 'Virginia Governor\'s School for the Arts Certification',
      },
    ],
  },
  {
    title: 'awards',
    data: [
      {
        name: 'Newton B. Shingleton Trust Scholarship',
      },
      {
        name: 'Gertrude Winston Memorial Scholarship',
      },
    ],
  },
];


const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className='relative top-32 sm:top-24 xl:h-[860px] pb-12 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          About me
        </h2>
        <div className='flex flex-col xl:flex-row'>
          {/* image */}
          <div className='hidden xl:flex flex-1 relative'>
            <DevImg
          containerStyles='bg-about_shape_light w-[460px] h-[530px] bg-no-repeat relative bg-bottom -mt-20 -right-10'
          imgSrc='/about/developer.png'
              
            />
          </div>
          {/* tabs */}
          <div className='flex-1 relative xl:translate-x-[-75px]'>
            <Tabs defaultValue='personal'>
              <TabsList className='w-full grid xl:grid-cols-5 xl:max-w-[100%] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='education'
                >
                  Education
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='experience'
                >
                  Experience
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='skills'
                >
                  Skills
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='certifications'
                >
                  Certifications
                </TabsTrigger>
              </TabsList>

              {/* tabs content */}
              <div className='text-lg mt-12 xl:mt-8'>

                {/* personal */}
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>
                      Stuff About Me :)
                    </h3>
                    <p className='subtitle max-w-2xl mx-auto xl:mx-0'>
                    I’m a passionate web developer with a love for design. I believe in the power of collaboration and am always eager to embrace new challenges. In the future, I aspire to lead projects that make a positive impact in the tech industry.
                    </p>
                    {/* icons */}
                    <div className='grid xl:grid-cols-2 gap-4 mb-6'>
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className='flex items-center gap-x-4 mx-auto xl:mx-0'
                            key={index}
                          >
                            <div className='text-primary'>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* Facts */}
                    <div className='flex flex-col gap-y-2'>
                      <div className='text-primary'>My Hobbies</div>
                      <div className='border-b border-border '></div>
                      <div>Art, Cooking, Baking, Eating, Hiking, Tennis, Working out, Reading</div>
                    </div>
                  </div>
                </TabsContent>

                {/* education */}
                <TabsContent value='education'>
                  <div >
                    <h3 className='h3 mb-8 text-center xl:text-left'>
                      My Education
                    </h3>
                    <div className='flex flex-col gap-y-6'>
                      {getData(qualificationData, 'education').data.map(
                        (item, index) => {
                          const { university, role, degree, minor, years } = item;
                          return (
                            <div className='flex gap-x-8 group' key={index}>
                              <div className='h-[115px] w-[1px] bg-border relative ml-2'>
                                <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[110px] transition-all duration-500'></div>
                              </div>
                              <div>
                                <div className='font-semibold text-xl leading-none mb-2'>
                                  {university}
                                </div>
                                <div className='text-sm leading-none text-muted-foreground italic mb-2'>
                                  {role}
                                </div>
                                <div className='text-lg leading-none text-muted-foreground mb-2'>
                                  {degree}
                                </div>
                                <div className='text-md leading-none text-muted-foreground mb-2'>
                                  {minor}
                                </div>
                                <div className='text-base font-medium'>
                                  {years}
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </TabsContent>

                {/* experience */}
                <TabsContent value='experience'>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'>
                      Professional Experience
                    </h3>
                    <div className='flex flex-col gap-y-6'>
                      {getData(qualificationData, 'experience').data.map(
                        (item, index) => {
                          const { position, description, years } = item;
                          return (
                            <div className='flex gap-x-8 group' key={index}>
                              <div className='h-[85px] w-[1.5px] bg-border relative ml-2'>
                                <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[80px] transition-all duration-500'></div>
                              </div>
                              <div>
                                <div className='font-semibold text-xl leading-none mb-2'>
                                  {position}
                                </div>

                                <div className='text-lg leading-none text-muted-foreground mb-2'>
                                  {description}
                                </div>
                                <div className='text-base font-medium'>
                                  {years}
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </TabsContent>

                {/* skills */}
                <TabsContent value='skills'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8'>Skills and Tools</h3>
                    {/* skills */}
                    <div className='mb-12'>
                      <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                      <div className='border-b border-border mb-4'></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, 'skills').data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className='w-4/4 text-center xl:text-left mx-auto xl:mx-0'
                                key={index}
                              >
                                <div className='font-medium'>{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className='text-xl font-semibold mb-2 xl:text-left'>
                        Tools
                      </h4>
                      <div className='border-b border-border mb-4'></div>
                      {/* tool list */}
                      <div className='flex gap-x-8 justify-center xl:justify-start'>
                        {getData(skillData, 'tools').data.map((item, index) => {
                          const { imgPath, link } = item;
                          return (
                            <div key={index}>
                              <a href={link} target='_blank' rel='noopener noreferrer'>
                                <Image
                                  src={imgPath}
                                  width={48}
                                  height={48}
                                  alt='Tool Logo'
                                  priority
                                />
                              </a>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* certifications */}
                <TabsContent value='certifications'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8'>Certifications and Awards</h3>
                    {/* certifications */}
                    <div className='mb-6'>
                      <h4 className='text-xl font-semibold mb-2'>Certifications</h4>
                      <div className='border-b border-border mb-2'></div>
                      {/* Certification list */}
                      <div>
                        {getData(certificationData, 'certifications').data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className='w-4/4 text-center xl:text-left mx-auto xl:mx-0'
                                key={index}
                              >
                                <div className='font-small'>{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* awards */}
                    <div>
                      <h4 className='text-xl font-semibold mb-2 xl:text-left'>
                        Awards
                      </h4>
                      <div className='border-b border-border mb-2'></div>
                      {/* Awards List */}
                      <div>
                        {getData(certificationData, 'awards').data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className='w-4/4 text-center xl:text-left mx-auto xl:mx-0'
                                key={index}
                              >
                                <div className='font-small'>{name}</div>
                              </div>
                          );
                        })}
                      </div>
                    </div>
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
