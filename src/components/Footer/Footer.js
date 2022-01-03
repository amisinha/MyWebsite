import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiBackbone, DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './FooterStyles';

const Header = () =>  (
  <div>
    <br/>
   <Container>
     <Div1>
       <Link href="/">
         <a style={{ display:"flex", alignItems:"center", color:"black", marginBottom:"10px", fontFamily:'cursive'}}>
           <span size="17px">Copyright ©2021</span>
         </a>

       </Link>
     </Div1>
 
  
   </Container>
  </div>
);

export default Header;
