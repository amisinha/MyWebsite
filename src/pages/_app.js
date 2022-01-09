import Theme from '../styles/theme';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Ring} from 'react-awesome-spinners'
import '../styles/globals.js'
import { resetWarningCache } from 'prop-types';
import Favicon from 'react-favicon'

export default function App({ Component, pageProps }) {
  
  return (
    <>
     <Favicon url="https://favicon-generator.org/favicon-generator/htdocs/favicons/2015-01-16/e6c637d0b91eaa669b8e6ad82b9a1b96.ico" />  
      <Theme>
        <Component {...pageProps} />
      </Theme>
      
      
    </>
  );
}
 