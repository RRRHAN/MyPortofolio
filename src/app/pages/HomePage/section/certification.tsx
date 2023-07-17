import * as React from 'react';
import ReactSwipe from 'react-swipe';

const certifications = [
  {
    name: 'Pemrograman Go-Lang : Pemula sampai Mahir',
    fileUrl: '/certificate/golang_pzn.jpg',
    credentialUrl:
      'https://www.udemy.com/certificate/UC-5172f9d3-029a-4f69-bb9c-99ec65dc65df/',
  },
  {
    name: 'Belajar Machine Learning untuk Pemula',
    fileUrl: '/certificate/ml-pemula_dicoding.png',
    credentialUrl: 'https://www.dicoding.com/certificates/MEPJE65VWX3V',
  },
  {
    name: 'Memulai Pemrograman Dengan Python',
    fileUrl: '/certificate/python_dicoding.png',
    credentialUrl: 'https://www.dicoding.com/certificates/NVP7KJGLOZR0',
  },
  {
    name: 'Belajar Dasar Visualisasi Data',
    fileUrl: '/certificate/visualisasi-data_dicoding.png',
    credentialUrl: 'https://www.dicoding.com/certificates/EYX42JYEJZDL',
  },
  {
    name: 'Mengenal Deep Learning',
    fileUrl: '/certificate/dl_hacktiv8.jpg',
    credentialUrl:
      'https://www.udemy.com/certificate/UC-34d0f6a9-573c-449e-a3c7-99885926b94e/',
  },
  {
    name: 'Node.js & React JS',
    fileUrl: '/certificate/ukk_dot.png',
    credentialUrl: '#',
  },
  {
    name: 'MTA: HTML5 Application Development Fundamentals',
    fileUrl: '/certificate/html_mta.png',
    credentialUrl:
      'https://www.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=171&cvid=kfShwGgK5HMy0vphNreTFw==',
  },
  {
    name: 'MTA: Introduction to Programming using JavaScript',
    fileUrl: '/certificate/js_mta.png',
    credentialUrl:
      'https://www.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=396&cvid=s3ujuJzO9++L01DLaU4Vsg==',
  },
];

export function Certification() {
  let reactSwipeEl;

  return (
    <>
      <section id="" className="pb-10 bg-primary">
        <div className="p-0">
          <div className="flex flex-wrap">
            <div className="w-full">
              <h4 className="font-bold uppercase text-white text-xl my-5 md:my-10 text-center md:text-2xl lg:text-4xl">
                Certification
              </h4>
              <ReactSwipe className="carousel" ref={el => (reactSwipeEl = el)}>
                {certifications.map(certification => {
                  return (
                    <div className="flex justify-center">
                      <div className="lg:w-[75%] w-[90%] md:w-[85%]">
                        <a
                          href={certification.credentialUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            className="rounded-2xl bg-contain"
                            src={certification.fileUrl}
                            alt={certification.name}
                          />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </ReactSwipe>
              <div className="relative">
                <div
                  onClick={() => reactSwipeEl.prev()}
                  className="inline-block w-8 h-8 lg:w-14 lg:h-14 absolute cursor-pointer -top-44 left-2 md:left-5 md:-top-80 lg:top-[-26rem] lg:left-10"
                >
                  <img
                    src="/icons/arrow.svg"
                    alt="arrow"
                    className="invert-[75%] contrast-50"
                  />
                </div>
                <div
                  onClick={() => reactSwipeEl.next()}
                  className="inline-block w-8 h-8 lg:w-14 lg:h-14 absolute cursor-pointer -top-44 right-2 md:right-5 md:-top-80 lg:top-[-26rem] lg:right-10"
                >
                  <img
                    src="/icons/arrow.svg"
                    alt="arrow"
                    className="rotate-180 invert-[75%] contrast-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
