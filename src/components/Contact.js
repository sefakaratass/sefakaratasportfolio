import React, { useRef } from "react";
import { FaFacebookF, FaInstagramSquare, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";
import { userSchema } from "../Validations/UserValidation";

function Contact() {
  const form = useRef();

  // Email gönderme işlemi
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_id40u6p", "template_oytdlr6", form.current, {
        publicKey: "bLWDSK2XlxmvvP2fj",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  // Kullanıcı verisi doğrulama işlemi
  const submitUser = async (event) => {
    event.preventDefault();
    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      message: event.target[2].value,
    };
    const isValid = await userSchema.isValid(formData);
    console.log(isValid);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendEmail(e);
    await submitUser(e); 
  };

  return (
    <div id="contact">
      <h1 className="contactTitle">Benimle iletişime geçin</h1>
      <span className="contactDescription">
        Lütfen bütün form elemanlarını doldurunuz!
      </span>
      <form className="contactForm" ref={form} onSubmit={handleSubmit}>
        <input
          type="text"
          className="name"
          placeholder="İsminizi giriniz"
          name="from_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Emailinizi giriniz"
          name="from_email"
        />
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Mesajınızı giriniz"
        ></textarea>
        <button type="submit" value="Send" className="submitBtn">
          Kaydet
        </button>
        <div className="links">
          <Link to="#" className="link"><FaFacebookF /></Link>
          <Link to="#" className="link"><FaInstagramSquare /></Link>
          <Link to="#" className="link"><FaTwitterSquare /></Link>
          <Link to="#" className="link"><FaYoutube /></Link>
        </div>
      </form>
    </div>
  );
}

export default Contact;
