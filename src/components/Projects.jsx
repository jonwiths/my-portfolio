import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import sha from '../assets/Sacred Heart Academy.jpg';
import philcomp from '../assets/Philcomp.jpg';
import maven from '../assets/maven-edu.jpg';

const projectContent = [
  {
    img_url: sha,
    name: 'Sacred Heart Academy Santa Maria, Bulacan Branch Website (2022)',
    desc: 'WordPress Website',
    shortDesc: 'Website for educational institution.',
    tech: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
    link: 'https://www.shabulacan.edu.ph/'
  },
  {
    img_url: philcomp,
    name: 'PhilComp (2022)',
    desc: 'WordPress Website',
    shortDesc: 'Website for Website for computer consultant company',
    tech: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
    link: 'https://www.philcomp.ph/'
  },
  {
    img_url: maven,
    name: 'Maven-Edu: An E-Mentor Web-Based Application for Students and Mentors of Santa Maria, Bulacan (2022-2023)',
    desc: 'Capstone Project',
    shortDesc: 'Web app for mentors and students',
    tech: [
      'HTML',
      'CSS',
      'TailwindCSS',
      'React JS',
      'NodeJS',
      'ExpressJS',
      'MySQL'
    ],
    link: 'https://maven-edu-v2.netlify.app/'
  }
  // {
  //   img_url: sha,
  //   name: 'Agriculture Website',
  //   desc: 'Personal Project',
  //   shortDesc: 'Website for agriculture sector',
  //   tech: ['HTML', 'CSS', 'Chakra UI', 'React JS'],
  //   link: 'https://maven-edu-v2.netlify.app/'
  // }
];

const Projects = () => {
  return (
    <>
      <section id="experience" className=" w-full mx-auto">
        <h4
          className="text-2xl text-center text-slate-600 md:mt-8 mt-4"
          data-aos="fade-up"
        >
          My Projects
        </h4>
        <h4 className="my-3 text-4xl text-center text-slate-800 font-bold uppercase">
          Explore my works
        </h4>

        <div className="">
          {projectContent.map((project, i) => (
            <div
              key={project.name}
              className={
                i % 2 === 0
                  ? 'flex md:flex-row flex-col md:mb-0 mb-4'
                  : 'flex md:flex-row-reverse flex-col md:mb-0 mb-4'
              }
              data-aos="fade-right"
            >
              <div className="flex-1 ">
                <img
                  src={project.img_url}
                  alt={project.name}
                  className="max-h-[700px]"
                />
              </div>

              <div className="flex-1 flex flex-col justify-center md:items-start items-center gap-3 text-gray-800">
                <h1 className="text-4xl font-bold md:text-left text-center">
                  {project.name}
                </h1>
                <h3 className="text-2xl text-left italic">{project.desc}</h3>

                <article className=" text-lg">
                  <h4>{project.shortDesc}</h4>
                  <p className="pt-2 text-sm">Tech used:</p>
                  <h4 className="font-semibold">{project.tech.join(', ')}</h4>
                  <h4 className="mt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer "
                      className="mt-4 hover:underline text-blue-700 "
                    >
                      View Website
                    </a>
                  </h4>
                </article>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
