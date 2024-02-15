import React from 'react';
import'./ContactForm.css';


function Contact(){

  
        // const [formData, setFormData] = useState({
        //   first_name: '',
        //   last_name: '',
        //   email: '',
        //   phone: '',
        //   message: '',
        // });
      
        // const handleChange = (e) => {
        //   const { name, value } = e.target;
        //   setFormData({
        //     ...formData,
        //     [name]: value,
        //   });
        // };
      
        // const handleSubmit = (e) => {
        //   e.preventDefault();
        //   // Add your form submission logic here
        //   console.log('Form submitted:', formData);
        // };
      
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
    //   };
      
    //   export default ContactForm;
         
         
    // )
}

export default ContactForm;

