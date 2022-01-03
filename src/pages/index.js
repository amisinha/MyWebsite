import Acomplishments from '../components/Acomplishments/Acomplishments';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import Publication from '../components/Publications/publication';
import Certi from '../components/CertificateAchievement/CertificateAchievement';
import Achieve from '../components/Achievements/Achievements';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Footer from '../components/LastFooter/Lastfooter'


const Home = () => {
  return (
    <Layout>
      <Section grid> 
      <Hero /> 
       </Section>   
       <Technologies /> 
       <Timeline />
       <Acomplishments />
      <Projects />
      <Publication />
      <Certi/>
      <Achieve />
      <Footer/>
    </Layout>
    
  );
};

export default Home;
