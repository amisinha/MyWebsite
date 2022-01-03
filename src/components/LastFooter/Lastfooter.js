import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle, Progress } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { GridContainer, ListContainer, List, Img, Button} from './LastfooterStyle';

const Footer = () => {
  return (
    <div>
      <Section>
        <SectionDivider/>
        <SectionTitle>Contact Me</SectionTitle>
        <GridContainer>
          <List>
            <ListContainer>
            <Img  style={{
    alignSelf: 'center',
    height: 40,
    width: 300,
    color: 'black'
  }} src="/images/linkedin.jpg" roundedCircle resizeMode="stretch" />
     <Img  style={{
    alignSelf: 'center',
    height: 240,
    width: 300,
    color: 'black'
  }} src="/images/linkImg.jpg" roundedCircle resizeMode="stretch" />
  <br/>
  <Button as="a" href='https://www.linkedin.com/in/amisha-sinha-479977158/'>View Profile</Button>
  <br/>
 

            </ListContainer>
          </List>
        </GridContainer>

      </Section>
    </div>
  );
};

export default Footer;
