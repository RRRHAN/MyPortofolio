import * as React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import styled from 'styled-components/macro';
import { Animate } from 'app/components/animate';

const scriptURL = String(process.env.REACT_APP_SCRIPT_URL);

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
  },
};

export function Contact() {
  let form: HTMLFormElement;
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [formSentSuccess, setFormSentSuccess] = React.useState(false);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formData = new FormData(form);
    axios
      .post(scriptURL, formData)
      .then(response => {
        if (response.data.result === 'success') {
          showModal(true);
        } else {
          showModal(false);
        }
      })
      .catch(error => {
        showModal(false);
        console.error(error.message);
      });
  };

  const showModal = success => {
    if (success) {
      form.reset();
    }
    setFormSentSuccess(success);
    setModalIsOpen(true);
  };

  return (
    <>
      <section id="contact" className="pt-20 pb-32 dark:bg-slate-800">
        <div className="container">
          <div className="w-full px-4">
            <Animate from="top">
              <div className="max-w-xl mx-auto text-center mb-16">
                <h4 className="font-semibold text-lg text-primary mb-2">
                  Contact
                </h4>
                <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">
                  Contact Form
                </h2>
                <p className="font-medium text-base text-secondary md:text-lg">
                  Get in touch for collaboration opportunities and exciting tech
                  discussions. Let's innovate together!
                </p>
              </div>
            </Animate>
          </div>

          <form
            onSubmit={e => submitForm(e)}
            ref={el => (form = el as HTMLFormElement)}
          >
            <input
              type="hidden"
              value={process.env.NODE_ENV}
              name="environment"
            />
            <input type="hidden" value="contact" name="type" />
            <div className="w-full lg:w-2/3 lg:mx-auto">
              <div className="w-full px-4 mb-8">
                <Animate from="left">
                  <label
                    htmlFor="name"
                    className="text-base text-primary font-bold"
                  >
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                  />
                </Animate>
              </div>
              <div className="w-full px-4 mb-8">
                <Animate from="right">
                  <label
                    htmlFor="email"
                    className="text-base text-primary font-bold"
                  >
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                  />
                </Animate>
              </div>
              <div className="w-full px-4 mb-8">
                <Animate from="left">
                  <label
                    htmlFor="message"
                    className="text-base text-primary font-bold"
                  >
                    Message
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
                  ></textarea>
                </Animate>
              </div>
              <div className="w-full px-4">
                <Animate from="right">
                  <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">
                    Send
                  </button>
                </Animate>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-wrap">
          <div className="w-full">
            <h4 className="block text-center">
              {formSentSuccess
                ? 'Message Was Successfully Sent'
                : 'Failed To Send Message Please Try Again'}
            </h4>
          </div>
          <div className="w-1/2 mx-auto">
            {formSentSuccess ? (
              <SuccesButton onClick={() => setModalIsOpen(false)}>
                OK
              </SuccesButton>
            ) : (
              <FailedButton onClick={() => setModalIsOpen(false)}>
                OK
              </FailedButton>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}

const ModalButtonStyle =
  'text-base font-semibold text-white py-3 px-8 mt-4 w-full rounded-full hover:opacity-80 hover:shadow-lg transition duration-500';
const SuccesButton = styled.button.attrs({
  className: `bg-green-500 ${ModalButtonStyle}`,
})``;
const FailedButton = styled.button.attrs({
  className: `bg-red-500 ${ModalButtonStyle}`,
})``;
