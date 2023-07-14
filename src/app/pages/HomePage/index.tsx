import * as React from 'react';
import { Hero } from './section/hero';
import { About } from './section/about';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Hero />
      <About />
    </>
  );
}
