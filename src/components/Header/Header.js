import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiBackbone, DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <div>
   <Container>
     <Div1>
       <Link href="/">
         <a style={{ display:"flex", alignItems:"center", color:"black", marginBottom:"10px", fontFamily:'cursive', weight:"700"}}>
           <DiBackbone size="3rem" /><span size="17px">Amisha Sinha</span>
         </a>

       </Link>
     </Div1>
     <Div2>
       <li>
         <Link href="#projects">
           <NavLink>PROJECTS</NavLink>
         </Link>
       </li>
       <li>
         <Link href="#tech">
           <NavLink>TECHNOLOGIES</NavLink>
         </Link>
       </li>
       <li>
         <Link href="#about">
           <NavLink>ABOUT</NavLink>
         </Link>
       </li>
     </Div2>
     <Div3>
       <SocialIcons href="https://github.com">
         <AiFillGithub size="3rem" />
       </SocialIcons>
       <SocialIcons href="https://linkedin.com">
         <AiFillLinkedin size="3rem" />
       </SocialIcons>
       <SocialIcons href="https://instagram.com">
         <AiFillInstagram size="3rem" />
       </SocialIcons>
     </Div3>
   </Container>
  </div>
);

export default Header;
