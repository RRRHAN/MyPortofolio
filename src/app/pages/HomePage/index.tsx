import * as React from 'react';
import { Navbar } from './../../components/navbar';
import { Hero } from './section/hero';
import { About } from './section/about';
import { Certification } from './section/certification';
import { Contact } from './section/contact';
import { Footer } from './../../components/footer';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

const scriptURL = String(process.env.REACT_APP_SCRIPT_URL);

export function HomePage() {
  let form: HTMLFormElement;

  React.useEffect(() => {
    if (sessionStorage.getItem('counter') !== 'true') {
      sessionStorage.setItem('counter', 'true');
      let formData = new FormData(form);
      axios.post(scriptURL, formData).catch(error => {
        sessionStorage.setItem('counter', 'false');
        console.error(error.message);
      });
    }
  });

  return (
    <>
      <form className="hidden" ref={el => (form = el as HTMLFormElement)}>
        <input type="hidden" value={process.env.NODE_ENV} name="environment" />
        <input type="hidden" value="counter" name="type" />
      </form>
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
