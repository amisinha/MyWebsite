import { Section, SectionDivider, SectionText, SectionTitle, Progress } from '../../styles/GlobalComponents';
import { List, ListContainer, Ia,Img, ListItem,GridContainer, Button , ListParagraph, ListTitle, ProgressBar, Grid, It, Row, Col, coloredLine, Iy} from './AchievementStyle';
import React from 'react';
import Marquee from "react-easy-marquee";
import {FiAward } from 'react-icons/fi';

const Achievement=()=>(
    <Section id ="achieve">
        <SectionDivider/>
<SectionTitle>Achievements</SectionTitle>

    
    
      <Marquee duration={10000} background="rgb(0,33,71)" height="80px" axis="X">
        <Iy> <FiAward/> &nbsp;&nbsp;Top Academic scorer in 8th Semester: 10/10 GPA</Iy>
        <Iy> <FiAward/>  &nbsp;&nbsp; Among the top 2% scorers in 5th Semester: 9.85/10 GPA</Iy>
        <Iy > <FiAward/>  &nbsp;&nbsp; Writer at Writerscafe.org</Iy>
      </Marquee>





    </Section>

);

export default Achievement;