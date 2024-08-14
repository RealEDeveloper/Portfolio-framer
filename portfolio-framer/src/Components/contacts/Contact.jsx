import "./Contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false); // Reset error state
    setSuccess(false); // Reset success state

    emailjs
      .sendForm(
        'service_3qpp7p6', 
        'template_13ezvt9g', 
        formRef.current, 
        'jCqEgcc-qQU9D_B5k'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      );
  };

  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="text-container" variants={variants}>
        <motion.h1>Let's Work Together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>tanishk15112001@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>A-552 Govind Marg Malviya Nagar Jaipur Rajasthan</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>7023630072</span>
        </motion.div>
      </motion.div>
      <div className="form-container">
        <motion.form ref={formRef} onSubmit={sendEmail}>
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button type="submit">Submit</button>
          {error && <span style={{ color: 'red' }}>Error</span>}
          {success && <span style={{ color: 'green' }}>Success</span>}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
