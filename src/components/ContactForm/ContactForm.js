import React from 'react';
import'./ContactForm.css';


function Contact(){
  return (
          <div className="contact-form-container">
            <h1>Contact Form</h1>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  required
                  maxLength="50"
                  className="form-control"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </div>
              {/* Repeat similar blocks for other form fields */}
              <button type="submit" className="btn btn-primary">Post</button>
            </form>
          </div>
      );
 
}

export default ContactForm;

