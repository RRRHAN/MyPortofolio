import * as React from 'react';

export function Hero() {
  return (
    <>
      <section id="home" className="pt-24">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 md:pl-10 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">
                Hello everyone 👋, My name is{' '}
                <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">
                  Raihan Firmansyah
                </span>
              </h1>
              <h2 className="font-medium text-secondary text-lg mb-5 mt-1 lg:text-2xl">
                BackEnd Engineer | Machine Learning Enthusiast
              </h2>
              <p className="font-medium text-secondary mb-10 leading-relaxed">
                God never promise life would be easy but he promise after
                hardship will be ease
              </p>
              <a
                href="mailto:raihan.firmansy@gmail.com"
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
              >
                Contact Me
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="mt-10">
                <img
                  src="/raihan.jpg"
                  alt="Raihan Firmansyah"
                  className="max-w-full mx-auto rounded-2xl w-56 border-8 md:w-72 lg:w-80 border-primary rotate-2  hover:-rotate-3 transition duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
