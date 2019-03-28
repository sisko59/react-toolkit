import React from 'react';
import Frame from 'react-frame-component';

const Iframe = ({ children }) => (
  <Frame
    height="1000"
    initialContent={`
          <!DOCTYPE html>
          <head>
          <link rel="stylesheet" href="/_next/static/css/commons.css">
          <link rel="stylesheet" href="/_next/static/css/styles.css">
          </head>
          <html>
            <body>
              <div id="mountHere"></div>
            </body>
          </html>
        `}
  >
    {children}
  </Frame>
);

export default Iframe;
