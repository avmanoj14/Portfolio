import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2w7rok5', 'template_u3x4g9s', form.current, 'PFz6t1x6XD5FEC0Qc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();  
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>amara.v@northeastern.edu</h5>
            <a href="mailto:amara.v@northeastern.edu" target="_blank" rel="noreferrer">Send an email</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className="contact__option-icon"/>
            <h4>Linkedin</h4>
            <h5>Venkata Manoj Amara</h5>
            <a href="https://www.linkedin.com/in/manojav1413/" target="_blank" rel="noreferrer">Connect with me</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+1(669)204-8091</h5>
            <a href="https://wa.me/16692048091" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* End of Contact Options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="emial" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
