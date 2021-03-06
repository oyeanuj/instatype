import React from 'react';

const Layout = ({ body, head, serverData }) => (
  <html>
    <head>
      <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
     
      {head.title.toComponent()}
      {head.meta.toComponent()}

      <link rel='stylesheet' type='text/css' href='/assets/style.css'/>
    </head>
    <body>
      <div id='app' dangerouslySetInnerHTML={{__html: body}}></div>
      <script src='/assets/bundle.js'></script>
    </body>
  </html>
);

export default Layout;
