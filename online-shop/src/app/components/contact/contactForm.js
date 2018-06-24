import React from 'react';
import PropTypes from "prop-types";

const ContactForm = ({
  handleInputChange,
  formState,
  formTitle,
  handleSubmit,
  actionText
}) => {
  return (
    <div>
      <div>
        <header>
          <div className="wrapper">
            <h1>{formTitle}</h1>
          </div>
        </header>
        <div className="container">
          <section className="send-message">
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <br />
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={handleInputChange}
                value={formState.name}
              />
              <br />
              <label>Email</label>
              <br />
              <input
                type="text"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                placeholder="Enter you email"
              />
              <br />
              <label>Subject</label>
              <br />
              <input
                type="text"
                name="subject"
                placeholder="Enter subject"
                onChange={handleInputChange}
                value={formState.subject}
              />
              <br />
              <label>Message</label>
              <br />
              <input
                type="text"
                name="message"
                placeholder="Contact price"
                onChange={handleInputChange}
                value={formState.message}
              /> <br/>
              <button className="btn-primary" type="submit">{actionText}</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};


export default ContactForm;