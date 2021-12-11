import React from 'react';
import { DiFirebase, DiReact, DiZend, DiWindows, DiMongodb, DiPython, DiJira, DiGoogleCloudPlatform, DiJava} from 'react-icons/di';
import { SiWebflow } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle, Progress } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, ProgressBar} from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id= "tech">
    <SectionDivider />
    <SectionTitle>My Skills</SectionTitle>
   <List>
     <ListItem>
       <DiReact size= "2rem" />
       <ListContainer>
         <ListTitle>WEB</ListTitle>
         <ListParagraph>
           REACTJS <progress value="80" max="100" />80% <br/>
           HTML/CSS <progress value="90" max="100" />90% <br/>
           PHP <progress value="50" max="100" />50% <br/>
           JAVASCRIPT <progress value="80" max="100" /> 80%<br/>
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
     <DiMongodb size= "2rem" />
 
       <ListContainer>
         <ListTitle>DATABASE</ListTitle>
         <ListParagraph>
           MYSQL <progress value="90" max="100" />90%  <br/>
          MONGO DB <progress value="40" max="100" /> 40%
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiPython size= "2rem" />
       <ListContainer>
         <ListTitle>FRAMEWORK</ListTitle>
         <ListParagraph>
           MOCKITO <progress value="50" max="100" /> 50% <br/>
           NUMPY <progress value="70" max="100" /> 70%<br/>
           SPRING <progress value="50" max="100" /> 50%<br/>
           SWING <progress value="50" max="100" /> 50%
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiJira size= "2rem" />
       <ListContainer>
         <ListTitle>TOOLS</ListTitle>
         <ListParagraph>
           GIT <progress value="80" max="100" />80% <br/>
           JIRA <progress value="85" max="100" /> 85%
        
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiJava size= "2rem" />
       <ListContainer>
         <ListTitle>PLATFORMS</ListTitle>
         <ListParagraph>
           JAVA <progress value="90" max="100" /> 90% <br/>
           PYTHON <progress value="80" max="100" />80% <br/>
           C/C++ <progress value="90" max="100" />90% <br/>
           R <progress value="40" max="100" />40%<br/>
           UBUNTU <progress value="70" max="100" />70% <br/>
           WINDOWS <progress value="90" max="100" />90%
      
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiGoogleCloudPlatform size= "2rem" />
       <ListContainer>
         <ListTitle>DOMAINS</ListTitle>
         <ListParagraph>
           <row>
           Cloud<progress value="80" max="100"/>80% <br/>
           NLP <progress value="80" max="100" /> 80%
           </row>
         </ListParagraph>
       </ListContainer>
     </ListItem>
   </List>

  </Section>
);

export default Technologies;
