import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import { MdEmail } from 'react-icons/md';
import { BsPhoneFill } from 'react-icons/bs';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <BsPhoneFill />,
    title: 'Phone Number',
    desc: '(+63)915-184-3480',
    type: 'phone'
  },
  {
    icon: <MdEmail />,
    title: 'Email',
    desc: 'jonslogar.arenque@gmail.com',
    type: 'email'
  },
  {
    icon: <FaFacebook />,
    title: 'Facebook',
    desc: ' Jonslogar Arenque',
    link: 'https://www.facebook.com/jonwiths/',
    type: 'socials'
  },
  {
    icon: <FaLinkedin />,
    title: 'Linkedin',
    desc: 'Jonslogar Arenque',
    link: 'https://www.linkedin.com/in/jonslogar-arenque/',
    type: 'socials'
  }
];

const handlelink = (data) => {
  switch (data?.type) {
    case 'email':
      window.location = `mailto:${data?.desc}`;
      break;
    case 'phone':
      window.location = `tel:${data?.desc}`;
      break;
    case 'socials':
      if (data.link) {
        window.open(data.link, '_blank', 'noopener noreferrer');
      }
      break;
    default:
      break;
  }
};

const ContactMe = () => {
  return (
    <>
      <section id="contact-me" className="md:my-10 my-5" data-aos="fade-up">
        <h4 className="text-2xl text-center text-slate-600 ">Get in Touch</h4>
        <h4 className="my-3 text-4xl text-center text-slate-800 font-bold uppercase">
          My Contact Information
        </h4>
        <div
          className="my-5 grid lg:grid-cols-4 md:grid-cols-2 mt-6 gap-4 cursor-pointer "
          data-aos="fade-right"
        >
          {contactInfo.map((content) => (
            <div
              key={content.title}
              className="p-2 flex flex-col items-center justify-center gap-2 mb-2 bg-gray-100 hover:bg-slate-100 rounded-2xl hover:transform hover:-translate-y-3 hover:z-10 transition-transform hover:text-blue-800 max-h-[200px] md:h-[200px]"
              onClick={() => handlelink(content)}
            >
              <span className="md:text-[50px] text-[35px] text-gray-800 md:pt-0 pt-4 ">
                {content.icon}
              </span>
              <h3 className="text-center font-semibold text-gray-800 ">
                {' '}
                {content.title}
              </h3>
              <p className="text-center md:pb-0 pb-4">{content.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ContactMe;
