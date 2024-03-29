import * as React from 'react';
import { socialmedias } from 'config';
import { Animate } from 'app/components/animate';

export function About() {
  return (
    <>
      <section id="about" className="pt-36 pb-16 dark:bg-dark">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <Animate from="left">
                <h4 className="font-bold uppercase text-primary text-lg mb-3">
                  About Me
                </h4>
                <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl dark:text-white">
                  Who Am I ?
                </h2>
                <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">
                  I am a backend engineer currently working at Govtech
                  Procurement by Telkom Indonesia, proficient in Golang,
                  Node.js, PostgreSQL, MySQL, MongoDB, and Jenkins. With a keen
                  interest in machine learning, I strive to innovate and deliver
                  efficient solutions that drive digital transformation in the
                  public sector.
                </p>
              </Animate>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <Animate from="right">
                <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10 dark:text-white">
                  Stay Connect
                </h3>
                <p className="font-medium text-base text-secondary mb-6 lg:text-lg">
                  Join me on social media to explore the exciting world of
                  backend engineering, machine learning, and cutting-edge
                  technologies. Let's connect and share knowledge for mutual
                  growth and inspiration.
                </p>
                <div className="flex items-center">
                  {socialmedias.map(socialMedia => {
                    return (
                      <a
                        href={socialMedia.url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover-white dark:border-slate-100"
                      >
                        <img
                          src={socialMedia.logoUrl}
                          alt={socialMedia.name}
                          width="20"
                        />
                      </a>
                    );
                  })}
                </div>
              </Animate>
            </div>
          </div>
          {/* TODO: use better solution to offset scroll certification */}
          <div id="certification"></div>
        </div>
      </section>
    </>
  );
}
