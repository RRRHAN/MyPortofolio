import * as React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import styled from 'styled-components/macro';

const scriptURL = String(process.env.REACT_APP_CONTACT_FORM_SCRIPT_URL);

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
  let form;
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [formSentSuccess, setFormSentSuccess] = React.useState(false);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(scriptURL, new FormData(form))
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
      <section id="contact" className="pt-20 pb-32">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Contact
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Contact Form
              </h2>
              <p className="font-medium text-base text-secondary md:text-lg">
                Get in touch for collaboration opportunities and exciting tech
                discussions. Let's innovate together!
              </p>
            </div>
          </div>

          <form onSubmit={e => submitForm(e)} ref={el => (form = el)}>
            <div className="w-full lg:w-2/3 lg:mx-auto">
              <div className="w-full px-4 mb-8">
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
              </div>
              <div className="w-full px-4 mb-8">
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
              </div>
              <div className="w-full px-4 mb-8">
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
              </div>
              <div className="w-full px-4">
                <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">
                  Send
                </button>
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
