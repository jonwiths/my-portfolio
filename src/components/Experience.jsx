import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

import pinfront from '../assets/pinfront digital.jpg';
import hsi from '../assets/highly succeed.png';

const pinfrontRes = [
  {
    icon: <AiOutlineCheck />,
    text: 'Convert designs to Webpage (HTML, CSS, JavaScript).'
  },
  {
    icon: <AiOutlineCheck />,
    text: 'Develop responsive webpages.'
  },
  {
    icon: <AiOutlineCheck />,
    text: 'Produce a high quality of work with strong focus on details.'
  },
  {
    icon: <AiOutlineCheck />,
    text: 'Optimized webpages for SEO.'
  },
  {
    icon: <AiOutlineCheck />,
    text: 'Use Adobe Photoshop/Canva for manipulating, editing, slicing and enhancement of graphic assets.'
  }
];

const HsiRes = [
  {
    icon: <AiOutlineCheck />,
    text: 'Convert Figma designs to websites (HTML, CSS, ReactJS, Chakra UI).'
  },
  {
    icon: <AiOutlineCheck />,
    text: 'Manage projects with Git, GitHub, and Bitbucket.'
  },
  {
    icon: <AiOutlineCheck />,
    text: 'Resolve UI issues/bugs (ReactJS, Axios).'
  },
  {
    icon: <AiOutlineCheck />,
    text: 'Configure local development environments.'
  },
  {
    icon: <AiOutlineCheck />,
    text: 'AI Integration in existing project (NodeJS, MongoDB, OpenAI, Postman).'
  }
];

const Experience = () => {
  const [pinfrontResOpen, setPinfrontResOpen] = useState(false);
  const [hsiResOpen, setHsiResOpen] = useState(false);

  return (
    <>
      <section
        id="experience"
        className="mt-4 w-full mx-auto"
        data-aos="fade-up"
      >
        <h4 className="text-2xl text-center text-slate-600 ">
          My Work Experience
        </h4>
        <h4 className="my-3 text-4xl text-center text-slate-800 font-bold uppercase">
          Explore my jobs
        </h4>

        {/* Pinfront Digital */}
        <article
          className=" w-full my-5 mt-10 text-gray-800 overflow-hidden"
          data-aos="fade-right"
        >
          <div className="flex flex-col items-center">
            <img
              src={pinfront}
              alt="Pinfront Digital"
              className="w-[300px] h-[300px] mx-auto rounded-full border-4 border-gray-800"
            />
            <h2 className="mt-4 text-3xl font-bold text-center">
              WordPress Developer{' '}
              <p className="text-lg font-normal">(Part-time)</p>
            </h2>
            <h4 className="text-xl font-medium">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/pinfront"
                className="hover:underline"
              >
                @Pinfront Digital
              </a>
            </h4>
            <p className="mt-2 italic">February 2021 - Present</p>

            <p className="mt-4">
              Pinfront Digital offers wide range of affordable digital marketing
              services. Our main vision is to bring small and medium business in
              front.
            </p>
          </div>
          <div className="my-2 flex flex-col gap-2 mt-4 items-center justify-start">
            <button
              className="italic text-center px-4 py-3 hover:text-white bg-blue-100 hover:bg-blue-500 rounded-2xl"
              onClick={() => setPinfrontResOpen(!pinfrontResOpen)}
            >
              {pinfrontResOpen
                ? `Hide Responsibilities`
                : `Show Responsibilities`}
            </button>
            {pinfrontResOpen && (
              <div className="">
                {pinfrontRes.map((content, i) => (
                  <div
                    key={i}
                    className="flex items-start justify-start gap-2 max-w-[500px]"
                  >
                    <span className="text-[20px] text-green-700">
                      {content.icon}
                    </span>
                    <p>{content.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </article>

        <div className="w-full border-[1px] border-gray-200 my-2"></div>

        {/* Highly Succeed Inc. */}
        <article
          className=" w-full my-5 mt-10 text-gray-800 overflow-hidden"
          data-aos="fade-right"
        >
          <div className="flex flex-col items-center">
            <img
              src={hsi}
              alt="Highly Succeed Inc."
              className="w-[300px] h-[300px] mx-auto rounded-full border-4 border-gray-800"
            />
            <h2 className="mt-4 text-3xl font-bold">
              Web Developer Intern{' '}
              {/* <span className="text-lg font-normal">(Part-time)</span> */}
            </h2>
            <h4 className="text-xl font-medium">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/Highly.Succeed.Inc"
                className="hover:underline"
              >
                @Highly Succeed Inc.
              </a>
            </h4>
            <p className="mt-2 italic">May 2023 - August 2023</p>

            <p className="mt-4">
              Highly Succeed is a Philippines-based IT servicing and product
              company specializing in a great variety of web-based services
              including graphic design, web development, custom application
              creation, and mobile application.
            </p>
          </div>
          <div className="my-2 flex flex-col gap-2 mt-4 items-center justify-start">
            <button
              className="italic text-center px-4 py-3 hover:text-white bg-blue-100 hover:bg-blue-500 rounded-2xl"
              onClick={() => setHsiResOpen(!hsiResOpen)}
            >
              {hsiResOpen ? `Hide Responsibilities` : `Show Responsibilities`}
            </button>
            {hsiResOpen && (
              <div className="">
                {HsiRes.map((content, i) => (
                  <div
                    key={i}
                    className="flex items-start justify-start gap-2 max-w-[500px]"
                  >
                    <span className="text-[20px] text-green-700">
                      {content.icon}
                    </span>
                    <p>{content.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </article>

        <div className="w-full border-[1px] border-gray-200 my-2"></div>
      </section>
    </>
  );
};

export default Experience;
