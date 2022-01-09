import React from 'react';

import { List, GridContainer,ListContainer, Container, Hr, Tag, TagList, TitleContent, Button, Img, Iy, Iz, Ia, Iu } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { FaGithubSquare} from "react-icons/fa";
import { projects } from '../../constants/constants';
import Popup from 'reactjs-popup';

const Projects = () => (
<Section id="project">
  <SectionDivider />
  <SectionTitle>
Projects
  </SectionTitle>
  <GridContainer>
    <List>
      <ListContainer>
      <Img  style={{
    alignSelf: 'center',
    height: 150,
    width: 300,
    color: 'black'
  }} src="/images/5.jpg" roundedCircle resizeMode="stretch" />
  
  <br/>
  <Iy>Machine Learning Detection of Depression using Machine Learning</Iy>
  <hr color={"#FCCD04"}/>
  <br/>
  <Popup trigger={<Ia><Button >More Info</Button></Ia>} position="top" width="500px" height="300px">
    <List><ListContainer>
      <Iy>Depression Detection using ML algorithms</Iy>
      <hr color="#FCDDO4"/>
    <br/>  <Iu>• For early detection of depression in people and curbing the related problems using social media data, worked 
in a team of 3 using tools like Scrape storm and NLTK. <br/> <br/>
• Used Bayes theorem, SVM, Random Forest and Logistic Regression algorithm for data modeling.
<hr color="FCCD04"/>
<br/>
<Iz><FaGithubSquare/></Iz>
</Iu>
    
    
    </ListContainer></List>
  </Popup>
  <Iz><Ia><br/>Dec 2019- May 2020</Ia></Iz>
        
      </ListContainer>

    </List>
    <List>
      <ListContainer>
      <Img  style={{
    alignSelf: 'center',
    height: 170,
    width: 300,
    color: 'black'
  }} src="/images/7.jpg" roundedCircle resizeMode="stretch" />
  <br/>
  <Iy>Hand Gesture Recognition using OpenCV</Iy>
  <hr color={"#FCCD04"}/>
  <br/>
  <Popup trigger={<Ia><Button >More Info</Button></Ia>} position="top">
    <List><ListContainer>
    <Iy>Hand Gesture Recognition using OpenCV</Iy>
      <hr color="#FCDDO4"/>
    <br/>  <Iu>
    • Worked in a group of 5 to implement human-computer interaction using an innovative real-time method for 
hand gesture detection and feature extraction using a webcam. <br/>
• Pre-processed real-time input images to remove noise. <br/>
• Hand region was extracted using background subtraction method and palm/fingers were segmented and 
finally convex hull method was used to recognize the fingers.
<hr color="FCCD04"/>
<br/>
<Iz><FaGithubSquare/></Iz>
</Iu>
      </ListContainer></List>
  </Popup>
  <Iz><Ia><br/>June 2019- Nov 2020</Ia></Iz>
        
      </ListContainer>

    </List>
    <List>
      <ListContainer>
        
        
        
      </ListContainer>

    </List>
  
  </GridContainer>
</Section>
);

export default Projects;