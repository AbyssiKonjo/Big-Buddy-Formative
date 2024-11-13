import { useState } from 'react';
import axios from 'axios';

const formEndpoint = import.meta.env.VITE_APP_WP_API_FORM_ENDPOINT;

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const [enquiry, setEnquiry] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [region, setRegion] = useState('');
    const [suburb, setSuburb] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const contactForm = new FormData();
        contactForm.append('your-enquiry', enquiry);
        contactForm.append('your-phone', phone);
        contactForm.append('your-email', email);
        contactForm.append('your-region', region);
        contactForm.append('your-suburb', suburb);
        contactForm.append('your-message', message);
    
        axios.post(formEndpoint, contactForm)
        .then((response) => {
          console.log(response);
          setSubmitted(true);
        })
        .catch((error) => {
          console.log(error);
          setError(true);
        });
    };

    if (submitted) {
        return (
            <>
                <h3>Thank You!</h3>
                <p>We'll be in touch soon.</p>
            </>
        );
    }
    
    if (error) {
        return (
            <>
                <h3>Error!</h3>
                <p>Sorry, we were unable to send your message.</p>
            </>
        );
    }

    return (
      <form onSubmit={handleSubmit} method='POST'>
          <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                name='firstName'
                onChange={(event) => setFirstName(event.target.value)}
                value={firstName}
                required
              />
          </div>

            <div>
              <label htmlFor="firstName">Your Phone:</label>
              <input
                type="text"
                name='firstName'
                onChange={(event) => setFirstName(event.target.value)}
                value={firstName}
                required
              />
          </div>

          <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name='email'
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                required
              />
          </div>

          <div>
              <label htmlFor="region">Region:</label>
              <input
                type="text"
                name='region'
                onChange={(event) => setRegion(event.target.value)}
                value={region}
                required
              />
          </div>

          <div>
              <label htmlFor="suburb">Suburb:</label>
              <input
                type="text"
                name='suburb'
                onChange={(event) => setSuburb(event.target.value)}
                value={suburb}
                required
              />
          </div>

          <div>
              <label htmlFor="message">Brief description about your enquiry:</label>
              <textarea
                name='message'
                onChange={(event) => setMessage(event.target.value)}
                value={message}
                required
              />
          </div>

          <div>
              <button className='regular-button' type='submit'>Send Message</button>
          </div>
      </form>
    );
}

export default ContactForm;
