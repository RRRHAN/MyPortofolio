import * as React from 'react';
import { socialmedias } from 'config';

export function Footer() {
  return (
    <>
      <footer className="bg-dark pt-24 pb-6">
        <div className="container lg:m-10">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-12 text-slate-500 font-medium md:w-1/3">
              <h2 className="font-bold text-3xl text-white mb-5">
                Raihan Firmansyah
              </h2>
              <p>
                <a href="mailto:raihan.firmansy@gmail.com">
                  📧 raihan.firmansy@gmail.com
                </a>
              </p>
              <p>📍 Malang, Jawa Timur</p>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">Contact</h3>
              <ul className="text-slate-300">
                {socialmedias.map(socialMedia => {
                  return (
                    <li>
                      <a
                        href={socialMedia.url}
                        className="inline-block text-base hover:text-primary mb-3"
                      >
                        {socialMedia.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">Section</h3>
              <ul className="text-slate-300">
                <li>
                  <a
                    href="#home"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#certification"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Certification
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full pt-5 border-t border-slate-700">
          <p className="font-medium text-sm text-slate-500 text-center">
            Made By Raihan Firmansyah
          </p>
        </div>
      </footer>
    </>
  );
}
