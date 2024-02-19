import React from 'react';
import'./ContactForm.css';


function ContactForm(){
  return (
          <div className="contact-form-page">
            <div className="contact-form-container">
            <h1>Contact Form</h1>
            <form className="contact-form">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  required
                  maxLength="50"
                  className="form-control"
                  id="first_name"
                  name="first_name"
                 
                />
              </div>
              {/* Repeat similar blocks for other form fields */}
              <button type="submit" className="btn btn-primary">Post</button>
            </form>
            </div>
          </div>
      );
 
}

export default ContactForm;

