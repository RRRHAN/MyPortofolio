import * as React from 'react';
import { DarkModeToggle } from './darkModeToggle';

// check if eventTarget is part of elements
const ispartOf = (
  eventTarget: EventTarget,
  ...elements: HTMLElement[] | ChildNode[]
): boolean => {
  let contain = false;
  let returnValue = false;
  elements.forEach(element => {
    contain = eventTarget === element;
    if (contain) {
      returnValue = true;
      return true;
    }
    element.childNodes.forEach(childNode => {
      contain = ispartOf(eventTarget, childNode);
      if (contain) {
        returnValue = true;
        return true;
      }
    });
  });
  return returnValue;
};

export function Navbar() {
  let button: HTMLButtonElement,
    header: HTMLElement,
    nav: HTMLElement,
    toTop: HTMLElement;

  return (
    <>
      <header
        ref={el => (header = el as HTMLElement)}
        className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10"
      >
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a
                href="#home"
                className="font-bold text-lg text-primary block py-6"
              >
                raihanfirmansyah
              </a>
            </div>
            <div className="flex items-center px-4">
              <button
                ref={el => (button = el as HTMLButtonElement)}
                onClick={() => {
                  button.classList.toggle('hamburger-active');
                  nav.classList.toggle('scale-0');
                }}
                className="block absolute right-4 lg:hidden"
              >
                <span className="hamburger-line origin-top-left"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line origin-bottom-left"></span>
              </button>
              <nav
                ref={el => (nav = el as HTMLButtonElement)}
                className="scale-0 absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full transition duration-300 ease-in-out lg:block lg:static lg:bg-transparent lg:max-w-full lg:scale-100 lg:shadow-none lg:rounded-none dark:bg-dark dark:shadow-slate-500 lg:dark:bg-transparent"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                    >
                      Home
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                    >
                      About
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#certification"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                    >
                      Certification
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#contact"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="group">
                    <div className="py-2 mx-8 flex">
                      <DarkModeToggle />
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <a
        ref={el => (toTop = el as HTMLElement)}
        href="#home"
        className="border-[.3px] opacity-90 border-white hover:opacity-80 h-14 w-14 bg-primary scale-0 rounded-full fixed transition duration-300 ease-in-out flex z-[9999] right-4 bottom-4 p-4 justify-center items-center"
      >
        <span className="block h-5 w-5 border-t-2 border-l-2 rotate-45 mt-2"></span>
      </a>
      {React.useEffect(() => {
        window.onclick = (e: MouseEvent) => {
          let eventTarget = e.target as EventTarget;
          if (!ispartOf(eventTarget, button, nav)) {
            button.classList.remove('hamburger-active');
            nav.classList.add('scale-0');
          }
        };
        window.onscroll = () => {
          button.classList.remove('hamburger-active');
          nav.classList.add('scale-0');
          if (window.scrollY > header.offsetTop) {
            header.classList.add('navbar-fixed');
            toTop.classList.remove('scale-0');
          } else {
            header.classList.remove('navbar-fixed');
            toTop.classList.add('scale-0');
          }
        };
      })}
    </>
  );
}
