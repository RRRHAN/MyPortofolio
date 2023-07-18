import * as React from 'react';
import { Navbar } from './../../components/navbar';
import { Hero } from './section/hero';
import { About } from './section/about';
import { Certification } from './section/certification';
import { Contact } from './section/contact';
import { Footer } from './../../components/footer';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Certification />
      <Contact />
      <Footer />
    </>
  );
}
