import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import send from "../../assets/send.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Contact.css";

const Contact = () => {


  // toast notification on sending message

  const notifySuccess = () =>
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const notifyError = () => {
      toast.error('Sorry! Failed to send Message', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

    // contact form handling

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3hry6kw", "template_snqa46l", form.current, {
        publicKey: "Sm1b5EApMYXJFPE0p",
      })
      .then(
        () => {
          e.target.reset();
          notifySuccess();
          console.log("SUCCESS!");
        },
        (error) => {
          notifyError();
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <ToastContainer />

      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card" data-aos='fade-right'>
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                akash.kumarajbhar@gmail.com
              </span>

              <a
                href="mailto:akash.kumarajbhar@gmail.com"
                target="_blank"
                className="contact__button"
              >
                {" "}
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card" data-aos='fade-right' data-aos-delay='200'>
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+91 9311687306</span>

              <a
                href="https://api.whatsapp.com/send?phone=9311687306&text=Hello, more information!"
                target="_blank"
                className="contact__button"
              >
                {" "}
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card" data-aos='fade-right' data-aos-delay='400'>
              <i className="bx bxl-instagram contact__card-icon"></i>
              <h3 className="contact__card-title">Instagram</h3>
              <span className="contact__card-data">@aakashrajbhar25</span>

              <a
                href="https://instagram.com/aakashrajbhar25"
                target="_blank"
                className="contact__button"
              >
                {" "}
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                type="text"
                name="message"
                cols={30}
                rows={10}
                className="contact__form-input"
                placeholder="Write your message"
                required
              />
            </div>
            <button className="button button-flex">
              {" "}
              Send Message <img src={send} alt="" />{" "}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
import "./Contact.css";

export default Contact;
