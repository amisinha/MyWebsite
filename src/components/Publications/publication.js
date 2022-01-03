import { Section, SectionDivider, SectionText, SectionTitle, Progress } from '../../styles/GlobalComponents';
import { List, ListContainer, Ia,Img, ListItem,GridContainer, Button , ListParagraph, ListTitle, ProgressBar, Grid, It, Row, Col, coloredLine, Iy} from './publicationStyle';
import React from 'react';

const Timeline=()=> (
<Section id="tech">
<SectionDivider/>
<SectionTitle>Publications</SectionTitle>
<GridContainer>
   <List>
       <ListContainer>
       <Img  style={{
    alignSelf: 'center',
    height: 100,
    width: 100,
    borderWidth: 5,
    borderRadius: 75,
    marginTop:-37,
    color: 'black'
  }} src="/images/14.jpg" roundedCircle resizeMode="stretch" />
  <br/>
  <It>Machine Learning Based Detection of Deceptive Tweets on Covid-19</It>
  <br/>
  <Iy>Publication Date: 30 June 2021</Iy>
  <hr color="#ADD8E6"/>
  <br/>
  <Ia>We analyzed and assessed machine learning-based deceptive information detection concerning Covid-19 in this article. With the spread of Covid-19, we've seen a lot of falsified articles and tweets regarding treatments, medicine, and general pandemic information. The project's goal is to assist in data analysis and to prevent the spread of misleading information. The developed model can also be utilised in real-time to track down the source of misleading information. We conducted a thorough investigation of natural language processing methods for data analysis and machine learning algorithms in this work.</Ia>
 <br/>
  <Button as="a" href="https://www.ijeat.org/wp-content/uploads/papers/v10i5/E28310610521.pdf">Link to Paper</Button>
  <br/>
       </ListContainer>
       
   </List>
        
        
   
  </GridContainer>


</Section>
);
export default Timeline;

