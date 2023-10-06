import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import GotoTop from '../components/GoToTop';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import TechStack from '../components/TechStack';
import Layout from './Layout';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        <AboutMe />
        <Experience />
      </Layout>
      <GotoTop />
    </>
  );
};

export default MainLayout;
