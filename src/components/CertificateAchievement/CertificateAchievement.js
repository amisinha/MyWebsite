import React from 'react';

import { List, GridContainer,ListContainer, Container, Hr, Tag, TagList, TitleContent, Button, Img, Iy, Iz, Ia, Iu } from '../Projects/ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const Certi=()=>(
    <Section>
        <SectionDivider/>
        <SectionTitle>Certificates</SectionTitle>
        <GridContainer>
            <List>
                <ListContainer>
                <Img style={{
    alignSelf: 'center',
    height: 150,
    width: 300,
    color: 'black'
  }} src="/images/course1.jpg" roundedCircle resizeMode="stretch"/>
   <br/>
  <Ia><Button as="a" href="https://www.udemy.com/certificate/UC-371c37f1-03e0-4e7b-a851-a8d49ba8baaa/" >View Certificate</Button></Ia>
  <br/>
                </ListContainer>
            </List>
            <List>
              <ListContainer>
                  <Img style={{
    alignSelf: 'center',
    height: 150,
    width: 300,
    color: 'black'
  }} src="/images/course2.png" roundedCircle resizeMode="stretch"/>
  <br/>
  <Ia><Button as="a" href="https://www.coursera.org/account/accomplishments/certificate/Y7AFCBC6YZN9" >View Certificate</Button></Ia>
  <br/>
              
              </ListContainer>
                         
            </List>
            <List>
              <ListContainer>
                  <Img style={{
    alignSelf: 'center',
    height: 150,
    width: 300,
    color: 'black'
  }} src="/images/course3.png" roundedCircle resizeMode="stretch"/>
  <br/>
  <Ia><Button as="a" href="https://www.coursera.org/account/accomplishments/certificate/8XCSNLJ78AGU" >View Certificate</Button></Ia>
  <br/>
              
              </ListContainer>
                         
            </List>
            <List>
              <ListContainer>
                  <Img style={{
    alignSelf: 'center',
    height: 150,
    width: 300,
    color: 'black'
  }} src="/images/course4.png" roundedCircle resizeMode="stretch"/>
  <br/>
  <Ia><Button as="a" href="https://www.coursera.org/account/accomplishments/certificate/34P3TA6PBSCC" >View Certificate</Button></Ia>
  <br/>
              
              </ListContainer>
                         
            </List>
            <List>
              <ListContainer>
                  <Img style={{
    alignSelf: 'center',
    height: 150,
    width: 300,
    color: 'black'
  }} src="/images/course5.png" roundedCircle resizeMode="stretch"/>
  <br/>
  <Ia><Button as="a" href="https://www.coursera.org/account/accomplishments/certificate/GPR4GS248W5X" >View Certificate</Button></Ia>
  <br/>
              
              </ListContainer>
                         
            </List>
        </GridContainer>

    </Section>

);

export default Certi;