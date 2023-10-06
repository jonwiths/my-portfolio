import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import { AiOutlineGithub } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io5';
import { FaBitbucket, FaGitAlt, FaHtml5, FaWordpress } from 'react-icons/fa';
import {
  SiChakraui,
  SiCsharp,
  SiExpress,
  SiMysql,
  SiPhp,
  SiReact,
  SiTailwindcss
} from 'react-icons/si';

const techStack = [
  {
    icon: <FaHtml5 />,
    name: 'HTML',
    level: 'Intermediate'
  },
  {
    icon: <IoLogoCss3 />,
    name: 'CSS',
    level: 'Intermediate'
  },
  {
    icon: <IoLogoJavascript />,
    name: 'JavaScript',
    level: 'Beginner'
  },
  {
    icon: <FaWordpress />,
    name: 'WordPress',
    level: 'Intermediate'
  },
  {
    icon: <SiTailwindcss />,
    name: 'TailwindCSS',
    level: 'Intermediate'
  },
  {
    icon: <SiChakraui />,
    name: 'Charka UI',
    level: 'Beginner'
  },
  {
    icon: <SiReact />,
    name: 'React JS',
    level: 'Intermediate'
  },
  {
    icon: <IoLogoNodejs />,
    name: 'Node JS',
    level: 'Beginner'
  },
  {
    icon: <SiExpress />,
    name: 'Express JS',
    level: 'Intermediate'
  },
  {
    icon: <SiMysql />,
    name: 'MySQL',
    level: 'Intermediate'
  },
  {
    icon: <FaGitAlt />,
    name: 'Git',
    level: 'Beginner'
  },
  {
    icon: <AiOutlineGithub />,
    name: 'Github',
    level: 'Beginner'
  },
  {
    icon: <FaBitbucket />,
    name: 'BitBucket',
    level: 'Beginner'
  },
  {
    icon: <SiCsharp />,
    name: 'C#',
    level: 'Beginner'
  },
  {
    icon: <SiPhp />,
    name: 'PHP',
    level: 'Beginner'
  }
];

const TechStack = () => {
  return (
    <>
      <section className="mt-10" data-aos="fade-up">
        <h4 className="text-2xl text-center text-slate-600 ">My Tech Stack</h4>
        <p className="text-center text-xl mt-4 md:mb-10">
          Beginner - <span className="font-semibold my-5">Intermediate</span>{' '}
          Level
        </p>
        <Swiper
          breakpoints={{
            1000: {
              slidesPerView: 9
            },
            600: {
              slidesPerView: 6
            },
            500: {
              slidesPerView: 4
            },
            300: {
              slidesPerView: 2
            }
          }}
          // loop={true}

          grid={{ rows: 1 }}
          navigation={true}
          spaceBetween={20}
          modules={[Navigation]}
          className="my-5"
        >
          {techStack.map((tech, i) => (
            <SwiperSlide
              className="flex flex-col  items-center text-gray-800 hover:text-gray-950 cursor-pointer"
              key={i}
            >
              <p className="text-[40px] mb-2">{tech.icon}</p>
              <p className="text-center text-[20px]">{tech.name}</p>
              <p className="text-xs">{tech.level}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default TechStack;
