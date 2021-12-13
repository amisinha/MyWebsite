import { Section, SectionDivider, SectionText, SectionTitle, Progress } from '../../styles/GlobalComponents';
import { List, ListContainer, Ia,Img, ListItem,GridContainer, ListParagraph, ListTitle, ProgressBar, Grid, It, Row, Col, coloredLine, Iy} from './TimeLineStyles';
import React from 'react';

const Timeline=()=> (
<Section id="tech">
<SectionDivider/>
<SectionTitle>Experience</SectionTitle>
<GridContainer>
   
      <List>
      
  <ListContainer>
  <Img  style={{
    alignSelf: 'center',
    height: 100,
    width: 100,
    borderWidth: 5,
    borderRadius: 75,
    marginTop:-50,
    color: 'black'
  }} src="/images/8.jpg" roundedCircle resizeMode="stretch" />
    <It>Bangaluru, India<Iy>July 2020- Present</Iy></It> 
  <ListTitle>Software Engineer</ListTitle>
  <It>BRIDGE SOLUTIONS GROUP </It> 
  <hr color="#FCCD04"/>
  <ListParagraph>
  • Developed and performed several optimizations of the codebase for flawless OMS implementation as a 
Software Engineer for a major upscale chain of department stores based in Mexico (in partnership with Fluent 
commerce) <br/>
• Built significant client relationships resulting in contract extension and adding a valuable asset to the firm.<br/>
• Solved critical issues raised by clients by seamlessly coordinating with the team and the client.
<Ia>TECH/DOMAIN</Ia>
•JAVA 8 • Maven • GraphQL • JSON •Postman •Insomnia

  </ListParagraph>

  </ListContainer> 
</List>

      <List>
  <ListContainer>
  <Img  style={{
    alignSelf: 'center',
    height: 100,
    width: 100,
    borderWidth: 5,
    borderRadius: 50,
    marginTop:-40,
    boxShadow: '#FCCD04',
    color: 'black'
  }} src="/images/8.jpg" roundedCircle resizeMode="stretch" />
    <It>Bangaluru, India<Iy>Jan 2020-June 2020</Iy></It> 
  <ListTitle>Software Engineer Intern</ListTitle>
  <It>BRIDGE SOLUTIONS GROUP </It> 
  <hr color="#FCCD04"/>
  <ListParagraph>
  • Worked as a front-end developer for an in-house project ‘Magnum’ an online assessment, courses, and 
certification platform for the employees. <br/>
• Worked as a front-end developer for the project- ‘The Personal Shopper’ a personal style recommendation 
platform for customers. <br/>
• Used ReactJS for the front-end development integrated with the Rabbit framework and dockerized the 
application to allow the application to be commuted easily between environments.<br/>
<Ia>TECH/DOMAIN</Ia>
•ReactJS •Django •RabbitMQ Framework

  </ListParagraph>

  </ListContainer> 
</List>

<List>
  <ListContainer>
  <Img  style={{
    alignSelf: 'center',
    height: 100,
    width: 100,
    borderWidth: 5,
    borderRadius: 50,
    marginTop:-40,
    boxShadow: '#FCCD04',
    color: 'black'
  }} src="/images/10.png" roundedCircle resizeMode="stretch" />
    <It>Ranchi, India<Iy>Dec 2018-Jan 2019</Iy></It> 
  <ListTitle>Intern</ListTitle>
  <It> Research & Development centre for Iron and Steel </It> 
  <hr color="#FCCD04"/>
  <ListParagraph>
  • Developed an Employee Management System for the Human resource department of the organization.<br/>
• Worked independently and used HTML/CSS for front-end designing which included modules for both 
employee and admin dashboard that included many webpages for admin and employees to view and update 
information regarding profile, leaves, and salary revision.
<Ia>TECH/DOMAIN</Ia>
•HTML/CSS •MySQL •BootStrap

  </ListParagraph>

  </ListContainer> 
</List>
<List>
  <ListContainer>
  <Img  style={{
    alignSelf: 'center',
    height: 100,
    width: 100,
    borderWidth: 5,
    borderRadius: 50,
    marginTop:-40,
    boxShadow: '#FCCD04',
    color: 'black'
  }} src="/images/10.png" roundedCircle resizeMode="stretch" />
    <It>Ranchi, India<Iy>May 2018-Jun 2019</Iy></It> 
  <ListTitle>Intern</ListTitle>
  <It> Research & Development centre for Iron and Steel </It> 
  <hr color="#FCCD04"/>
  <ListParagraph>
  • Developed a Library management system for the Iron and Steel research centre of Steel Authority of India 
(SAIL).<br/>
• Worked independently and used JAVA swings toolkit for GUI and JDBC for application programming 
interface.
<Ia>TECH/DOMAIN</Ia>
•Java •SwingL •JDBC

  </ListParagraph>

  </ListContainer> 
</List>
<List>
  <ListContainer>
  <Img  style={{
    alignSelf: 'center',
    height: 100,
    width: 100,
    borderWidth: 5,
    borderRadius: 50,
    marginTop:-40,
    boxShadow: '#FCCD04',
    color: 'black'
  }} src="/images/11.png" roundedCircle resizeMode="stretch" />
    <It>Ranchi, India<Iy>Dec 2017-Jan 2018</Iy></It> 
  <ListTitle>Trainee</ListTitle>
  <It> Bharat Sanchar Nigam Limited </It> 
  <hr color="#FCCD04"/>
  <ListParagraph>
  •ASP.NET training on Introduction & Control, Architecture, working with User control, Validation controls & 
web caching
<Ia>TECH/DOMAIN</Ia>
•ASP.NET

  </ListParagraph>

  </ListContainer> 
</List>
        
        
   
  </GridContainer>


</Section>
);
export default Timeline;

