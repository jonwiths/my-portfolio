import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import { useState } from 'react';
import { MdUnfoldLess, MdUnfoldMore } from 'react-icons/md';

import PUPSMB from '../assets/PUPSMB.jpg';
import TechStack from './TechStack';

const AboutMe = () => {
  const [isCompetenciesOpen, setIsCompetenciesOpen] = useState(false);
  return (
    <>
      <section className="mb-20" id="about-me">
        <h4
          className="text-2xl mt-8  mb-4 text-center text-slate-600 "
          data-aos="fade-up"
        >
          Get to know me more
        </h4>
        <div
          className="w-full mx-auto flex flex-col-reverse md:flex-row-reverse gap-4 text-slate-800"
          data-aos="fade-right"
        >
          <div className="flex-1  w-full">
            <h5 className="pb-2 text-xl italic md:text-left text-center uppercase">
              About me
            </h5>
            <div className=" mb-5">
              <h2 className="font-semibold text-xl md:text-left text-center">
                MY
                <strong className=""> EDUCATION</strong>
              </h2>
              <p className="pt-3 text-justify">
                I recently graduated from the{' '}
                <strong>Polytechnic University of the Philippines</strong> –
                Santa Maria Campus (PUPSMB) from batch{' '}
                <strong>2019-2023</strong>, where I completed a{' '}
                <strong> Bachelor of Science in Information Technology</strong>{' '}
                (BSIT). I&apos;m excited to start a promising career in the
                fast-paced technology sector. My academic experience has
                provided me with a strong grasp of IT fundamentals, various
                programming languages, and the ability to tackle complex
                problems. This preparation has positioned me to make meaningful
                contributions in the constantly evolving realm of information
                technology.
              </p>
              <button
                className="my-2 bg-slate-200 hover:bg-slate-300 px-3 py-2 flex items-center gap-2 italic rounded-2xl hover:font-semibold"
                onClick={() => setIsCompetenciesOpen(!isCompetenciesOpen)}
              >
                {isCompetenciesOpen ? `Hide competencies` : `Show competencies`}
                {isCompetenciesOpen ? (
                  <MdUnfoldLess className="text-[20px] font-bold" />
                ) : (
                  <MdUnfoldMore className="text-[20px] font-bold" />
                )}
              </button>
              {isCompetenciesOpen && (
                <ul className="grid md:grid-cols-2 ml-5 list-disc ">
                  <li>Web Design</li>
                  <li>Full-stack Web Development</li>
                  <li>UI/UX Design </li>
                  <li>Database Management</li>
                  <li>Problem Solving</li>
                  <li>Project Management</li>
                  <li>Version Control</li>
                  <li>Agile Methodology</li>
                </ul>
              )}
            </div>

            <div className=" my-5">
              <h2 className="font-semibold text-xl md:text-left text-center">
                MY
                <strong className=""> AWARDS</strong>
              </h2>
              <ul className="pt-3 grid md:grid-cols-2 ml-5 list-disc ">
                <li>Director&apos;s Lister (2019-2020)</li>
                <li>President&apos;s Lister (2020-2023)</li>
                <li>
                  Promising Young I.T. Professional Web Developer (Back-end)
                </li>
                <li>
                  <strong>Cum Laude</strong>{' '}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 md:w-2/5 w-full md:mt-0 mt-4">
            <img
              src={PUPSMB}
              alt="Polytechnic University of the Philippines - Santa Maria Campus"
              className="block md:h-[500px] h-[500px] w-full object-cover rounded-3xl blur-[1px]"
            />
          </div>
        </div>
        <TechStack />
      </section>
    </>
  );
};

export default AboutMe;
