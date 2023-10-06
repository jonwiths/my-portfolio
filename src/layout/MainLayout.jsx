import Layout from './Layout';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import GotoTop from '../components/GoToTop';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        <AboutMe />
        <Experience />
      </Layout>
      <Footer />
      <GotoTop />
    </>
  );
};

export default MainLayout;
