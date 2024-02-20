import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
          
    
    
    <div className="container">
      {/* <h3 id='portfolio-title'>Portfolio</h3> */}
      <div className="info">Portfolio</div>
     
      <div className="form">
      <form>
        {/* <label htmlFor="fname">First Name</label> */}
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

        {/* <label htmlFor="lname">Last Name</label> */}
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
{/* 
        <label htmlFor="lname">Email Address</label> */}
        <input type="text" id="lname" name="EmailAdress" placeholder="Your Email.." />


        {/* <label htmlFor="country">Country</label> */}
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
          <option value="usa"></option>
          <option value="usa">USA</option>
          <option value="usa">USA</option>

          

        </select>

        {/* <label htmlFor="subject">Subject</label> */}
        <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>

        <input type="submit" value="Submit" />
      </form>
      </div>



    </div>

  );
}

export default ContactForm;
