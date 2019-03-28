import React from 'react';
import NextHead from 'next/head';
import Favicon from './Favicon';

const Head = ({ meta }) => (
  <NextHead>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="HandheldFriendly" content="true" />
    <meta name="MobileOptimized" content="320" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <title>{meta.title}</title>
    <meta name="keywords" content={meta.keywords} />
    <meta name="description" content={meta.description} />
    <Favicon />
  </NextHead>
);

export default Head;
