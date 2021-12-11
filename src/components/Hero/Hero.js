import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import FileSaver from 'file-saver';
const saveFile = () => {
  FileSaver.saveAs(
    process.env.REACT_APP_CLIENT_URL + "../../asset/Resume.pdf",
    "AmishaSinha_Resume.pdf"
  );
  }


const Hero = (props) => (
 <Section row nopadding>
   
   <LeftSection>
     <SectionTitle main center color="black">
       Hi I'm 
       Amisha Sinha
     </SectionTitle>
     <SectionText color="black">
     I am Software Engineer with experience in Order Management System and E-Commerce implementations along with good working experience in consulting skills with the ability to identify issues in the process flow and develop solutions for OMS Clients.
     <br/>
     I aspire to pursue a Master’s in Computer Science to learn and enhance my knowledge and skills in various aspects 
of algorithm development and Machine Learning concepts. Post Masters, I intend to implement my acquired 
knowledge while working with interdisciplinary IT organizations as an expert in Data Science tools. In the long run, 
I want to develop expert system innovative prediction tools to assist the education and healthcare sectors worldwide.
     </SectionText>
     
     <Button onClick= {saveFile}>Download Resume</Button>

   </LeftSection>

 </Section>
);

export default Hero;