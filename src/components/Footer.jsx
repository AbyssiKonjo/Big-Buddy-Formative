import React from 'react';

// Sample data for partners. Replace with actual data fetched from WordPress.
const partners = [
  {
    name: "Founding Partner",
    imageUrl: "path/to/founding-partner-image.jpg", // Replace with actual image URL
    postLink: "https://yourwebsite.com/founding-partner" // Replace with actual post link
  },
  {
    name: "Major Partner 1",
    imageUrl: "path/to/major-partner-image-1.jpg", // Replace with actual image URL
    postLink: "https://yourwebsite.com/major-partner-1" // Replace with actual post link
  },
  {
    name: "Major Partner 2",
    imageUrl: "path/to/major-partner-image-2.jpg", // Replace with actual image URL
    postLink: "https://yourwebsite.com/major-partner-2" // Replace with actual post link
  },
];

const Footer = () => {
  return (
    <footer>
      <section>
        <div className='contact'>
          <h3>Get In Touch</h3>
          <p>info@bigbuddy.org.nz</p>
          <p>(09) 828 1358</p>
          <button><a>Donate Now</a></button>
        </div>
        <div className='partners'>
          {partners.map((partner, index) => (
            <div key={index}>
              <h3>{partner.name}</h3>
              <a href={partner.postLink} target="_blank" rel="noopener noreferrer">
                <img src={partner.imageUrl} alt={`${partner.name} Logo`} />
              </a>
            </div>
          ))}
        </div>
      </section>
      <section>
        <p>© 2024 Big Buddy. All Rights Reserved.</p>
        <p>Privacy Policy</p>
        <p>Site by Abyssinia Getcahew</p>
      </section>
    </footer>
  );
}

export default Footer;
