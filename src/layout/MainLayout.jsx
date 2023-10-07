import Layout from './Layout';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import GotoTop from '../components/GoToTop';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import ContactMe from '../components/ContactMe';
import Projects from '../components/Projects';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        <AboutMe />
        <Experience />
        <ContactMe />
        <Projects />
      </Layout>
      <Footer />
      <GotoTop />
    </>
  );
};

export default MainLayout;
