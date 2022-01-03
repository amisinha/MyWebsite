import { Section, SectionDivider, SectionText, SectionTitle, Progress } from '../../styles/GlobalComponents';
import { List, ListContainer, Ia,Img, ListItem,GridContainer, Button , ListParagraph, ListTitle, ProgressBar, Grid, It, Row, Col, coloredLine, Iy} from './AchievementStyle';
import React from 'react';
import Marquee from "react-easy-marquee";

const Achievement=()=>(
    <Section id ="achieve">
        <SectionDivider/>
<SectionTitle>Achievements</SectionTitle>

    
    
      <Marquee duration={10000} background="rgb(0,33,71)" height="80px" axis="X">
        <Iy>Achievement1</Iy>
        <Iy>Achievement2</Iy>
        <Iy>Achievement3</Iy>
        <Iy>Achievement4</Iy>
      </Marquee>





    </Section>

);

export default Achievement;