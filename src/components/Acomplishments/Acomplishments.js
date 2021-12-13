import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import {It} from '../TimeLine/TimeLineStyles'
import { FaUserGraduate, FaUniversity,FaRegWindowMaximize } from "react-icons/fa";
import { Box, Boxes, BoxNum, BoxText, GridContainer, ListContainer, List, ListTitle, Img, Iz, Io, Ia,Ig, ListParagraph, ListItem } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
<Section id= "tech">
  <SectionDivider/>
  <SectionTitle>Education</SectionTitle>
  <GridContainer>
    <List>
      <ListContainer>
      <Img  style={{
    alignSelf: 'center',
    height: 100,
    width: 100,
    borderWidth: 5,
    borderRadius: 75,
    marginTop:-30,
    color: 'black'
  }} src="/images/13.png" roundedCircle resizeMode="stretch" />
     <It> SRM INSTITUTE OF SCIENCE AND TECHNOLOGY </It>
     <Iz>Kattankulathur, Chennai, India</Iz>
     <hr color="#4169e1"/>
     <br/>
     <Ia><FaUserGraduate/>   BACHELOR OF TECHNOLOGY </Ia>
     <Io>INFORMATION TECHNOLOGY</Io>
     <br/>
     <Ig>2016-2020 &nbsp;&nbsp;<FaUniversity/>&nbsp;&nbsp; GPA- 9.11/10</Ig>
     <br/>
     <ListParagraph>  • Big Data &nbsp;&nbsp; • Computer Graphics &nbsp;&nbsp; • Data Structures &nbsp;&nbsp; • Cloud Computing &nbsp;&nbsp; 
       • Discrete Mathematics &nbsp;&nbsp; • Operating System</ListParagraph>
      </ListContainer>
    </List>
    
    
  </GridContainer>
  <br/>
</Section>

);

export default Acomplishments;
