import React from 'react';

import apple57 from '../../assets/favicons/apple-touch-icon-57x57.png';
import apple60 from '../../assets/favicons/apple-touch-icon-60x60.png';
import apple72 from '../../assets/favicons/apple-touch-icon-72x72.png';
import apple76 from '../../assets/favicons/apple-touch-icon-76x76.png';
import apple114 from '../../assets/favicons/apple-touch-icon-114x114.png';
import apple120 from '../../assets/favicons/apple-touch-icon-120x120.png';
import apple144 from '../../assets/favicons/apple-touch-icon-144x144.png';
import apple152 from '../../assets/favicons/apple-touch-icon-152x152.png';
import apple180 from '../../assets/favicons/apple-touch-icon-180x180.png';

const favApple = [
  { size: '57x57', img: apple57 },
  { size: '60x60', img: apple60 },
  { size: '72x72', img: apple72 },
  { size: '76x76', img: apple76 },
  { size: '114x114', img: apple114 },
  { size: '120x120', img: apple120 },
  { size: '144x144', img: apple144 },
  { size: '152x152', img: apple152 },
  { size: '180x180', img: apple180 }
];

import classic16 from '../../assets/favicons/favicon-16x16.png';
import classic32 from '../../assets/favicons/favicon-32x32.png';

const favClassic = [
  { size: '16x16', img: classic16 },
  { size: '32x32', img: classic32 }
];

import favAndroid from '../../assets/favicons/android-chrome-192x192.png';
import manifest from '../../assets/favicons/site.webmanifest.json';
import safari from '../../assets/favicons/safari-pinned-tab.svg';
import microsoft from '../../assets/favicons/mstile-144x144.png';

const Favicon = () => (
  <>
    {favApple &&
      favApple.map(({ img, size }) => (
        <link key={img} rel="apple-touch-icon" sizes={size} href={img} />
      ))}
    {favClassic &&
      favClassic.map(({ img, size }) => (
        <link key={img} rel="icon" type="image/png" href={img} sizes={size} />
      ))}

    <link rel="icon" type="image/png" href={favAndroid} sizes="192x192" />
    <link rel="manifest" href={manifest} />
    <link rel="mask-icon" href={safari} color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="msapplication-TileImage" content={microsoft} />
    <meta name="theme-color" content="#ffffff" />
  </>
);

export default Favicon;
