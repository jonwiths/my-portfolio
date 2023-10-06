import profile from '../assets/Jonslogar M. Arenque.jpg';
import profile2 from '../assets/Arenque_Jonslogar_Formal.jpg';
import { FaNodeJs } from 'react-icons/fa';

import cvUrl from '../assets/files/Jonslogar Arenque CV.pdf';

const Hero = () => {
  return (
    <>
      <section id="hero" className="md:min-h-[90vh] h-auto text-slate-800">
        <div className="flex md:flex-row flex-col min-h-[80vh] justify-center items-center gap-8">
          <div className=" flex-1 flex  justify-end">
            <img
              src={profile2}
              alt="Jonslogar M. Arenque"
              className="w-[340px] h-[340px] object-cover rounded-full animate-bounce"
            />
          </div>
          <div className="flex flex-col md:items-start items-center  mt-4 flex-1 justify-start ">
            <h4 className="lg:text-2xl text-base mb-1 ">Hello World! I am</h4>
            <h1 className="lg:text-6xl text-4xl md:text-left text-center">
              {' '}
              <strong>
                {' '}
                <span className="text-blue-700">Jonslogar</span> Medina Arenque
              </strong>{' '}
              <span
                role="img"
                aria-label="waving-hand"
                className="inline-block wave-animation "
              >
                👋
              </span>
            </h1>
            <h2 className=" mt-4 lg:text-3xl text-xl italic font-semibold text-slate-500">
              Junior Full-Stack Developer
            </h2>
            <div className="flex gap-3">
              <button className="mt-3 px-6 py-3 bg-slate-700 hover:bg-slate-800 hover:underline text-white font-semibold rounded-3xl">
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  Download CV
                </a>
              </button>
              <button className="mt-3 px-6 py-3 border border-slate-700 bg-white text-slate-800 hover:bg-slate-300 hover:underline  font-semibold rounded-3xl">
                <a href={cvUrl} target="_blank" rel="noopener noreferrer">
                  View CV
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
