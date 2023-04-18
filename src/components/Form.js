import { useInView } from "react-intersection-observer";
import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vd6hnow', 'template_4osj99v', form.current, 'x-B7h-wETYEvY92jq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    setSuccess(false);
    };

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [success, setSuccess] = useState(true);

  return (
    <form
      ref={form}
      className="contactForm"
      initial={{ x: "-10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onSubmit={sendEmail}
    >
      <h4 className="contentTitle">Message Me</h4>
      <div className="col-12 col-md-6 formGroup" style={{ display: "inline-block" }}>
        <input
          type="text"
          className="formControl"
          id="contactName"
          name="from_name"
          placeholder="Name"
          required
        />
      </div>
      <div className="col-12 col-md-6 formGroup" style={{ display: "inline-block" }}>
        <input
          type="email"
          className="formControl"
          id="contactEmail"
          name="from_email"
          placeholder="Email"
          required
        />
      </div>

      <div className="col-12 formGroup">
        <textarea
          className="formControl"
          name="message"
          id="contactMessage"
          rows="5"
          placeholder="Message"
          required
        ></textarea>
      </div>
      <div className="col-12 formGroup formSubmit">
        <button  type = "submit" className="btn" >{success ? "Enviar mensaje" : "Mensaje enviado"}</button>
      </div>
    </form>
  );
};

export default Form;
