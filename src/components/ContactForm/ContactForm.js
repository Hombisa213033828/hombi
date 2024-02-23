import { ToastContainer, toast } from "react-toastify";
import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import './ContactForm.css';


function ContactForm() {

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    EmailAdress: '',
    subject: ''
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
 } 


 const handleCaptchaChange = (response) => {
  // Assuming 'response' is the captcha response token
  // Validate the captcha response
  if (isValidCaptcha(response)) {
      // Captcha validation passed, proceed with further actions
      console.log("Captcha validation passed. Proceeding with further actions.");
      // Add your logic here
  } else {
      // Captcha validation failed
      console.error("Captcha validation failed. Please try again.");
      // Handle failure case or prompt the user to try again
  }
}

const isValidCaptcha = (response) => {
  // You can implement your captcha validation logic here
  // For now, return true to simulate a successful validation
  return true;
}


const isFormValid = () => {
  return user.firstname.trim() !== '' && user.lastname.trim() !== '' && user.EmailAdress.trim() !== '' && user.subject.trim() !== '';
}


const getData = async (e) => {
  e.preventDefault();

  if (!isFormValid()) {
      toast.error('Please fill in all fields');
      return;
  }



  const { firstname, lastname, EmailAdress, subject} = user;

        try {
            await emailjs.sendForm('service_lcs9ke8', 'template_woet0oj', e.target, 'GhRbTxPVrmNLCLs-D');
            console.log("Email sent successfully");

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstname, lastname, EmailAdress, subject
                })
            };

            const res = await fetch('https://portfolio-474cd-default-rtdb.firebaseio.com//UserData.json', options);
            if (res.ok) {
                alert('Message Sent Successfully');
                setUser({ firstname: '', lastname: '', EmailAdress: '', subject: '' }); 
            } else {
                throw new Error('Error Occurred');
            }
        } catch (error) {
            console.error(error);
            alert('Error Occurred');
        }
    }



  return (
     <section id="ContactForm">

    <div className="container" >
      <div className="contact_title">
      <h3>Contact Us</h3>
      </div>
     

      <div className="contact-info">
                  <div className="flex flex-col">
                    <div className="flex items-center mb-4">
                      <i className="fas fa-envelope mr-2"></i>
                      <div>
                        <img src="message.png" alt="" className="w-8 h-8 mr-2" />
                        <h3 className="text-lg font-semibold text-white">My Email</h3> {/* Add text-white class */}
                        <p className="text-gray-600">hombisadyasi@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <i className="fas fa-phone mr-2"></i>
                      <div>
                        <img src="phone.png" alt="" className="w-8 h-8 mr-2" />
                        <h3 className="text-lg font-semibold text-white">My Number</h3> {/* Add text-white class */}
                        <p className="text-gray-600">+27 21 234 2341</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      <div>
                        <img src="location.png" alt="" className="w-8 h-8 mr-2" />
                        <h3 className="text-lg font-semibold text-white">My Address</h3> {/* Add text-white class */}
                        <p className="text-gray-600">South Africa, Western Cape,7493</p>
                      </div>
                    </div>
                  </div>
                </div>
     
      <div className="form">
      <form onSubmit={getData}>
        {/* <label htmlFor="fname">First Name: </label> */}
        <input 
         type="text"
         id="fname"
         name="firstname" 
         placeholder="Your name.."
         onChange={handleInputChange}
         required
         value={user.firstname}
         />

        {/* <label htmlFor="lname">Last Name:</label> */}
        <input 
         type="text"
         id="lname" 
         name="lastname" 
         placeholder="Your last name.."
         onChange={handleInputChange}
         required
         value={user.lastname}
          />
{/* 
        <label htmlFor="lname">Email Address</label> */}
            {/* <input
            type="text"
            id="lname" 
            name="EmailAdress"
            placeholder="Your Email.."
            onChange={handleCaptchaChange}
            required
            value={user.EmailAddress}
            /> */}

<input type="text" id="lname" name="EmailAdress" placeholder="Your Email.." onChange={handleInputChange} value={user.EmailAdress}/>


        {/* <label htmlFor="country">Country</label> */}
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
          <option value="usa">South Africa</option>
          <option value="usa">Zimbabwe</option>
          <option value="usa">Botswana</option>
          <option value="usa">Nigeria</option>
          <option value="usa">Congo</option>
          <option value="usa">Lesotho</option>

          

        </select>

        {/* <label htmlFor="subject">Subject</label> */}
        <textarea 
        id="subject" 
        name="subject" 
        placeholder="Write something.." 
        style={{ height: '150px' }}
        onChange={handleInputChange}
        required 

        />
       
       
          <button>
        <input type="submit" value="Submit" />
       

      </button>
      </form>
      </div>
      </div>
     </section>     


  );
}

export default ContactForm;