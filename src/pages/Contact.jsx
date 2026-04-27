const Contact = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Get in Touch</h1>
      <p className="page-subtitle">Have questions? We'd love to hear from you. Reach out to our admissions team.</p>
      
      <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
        <form className="contact-form" style={{ flex: '1', minWidth: '300px' }} onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="john@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
        
        <div style={{ flex: '1', minWidth: '300px' }}>
          <div className="card" style={{ marginBottom: '2rem' }}>
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> admissions@vnrcollege.edu</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Address:</strong> 123 University Ave, College Town, CT 06520</p>
          </div>
          <div className="card">
            <h3>Office Hours</h3>
            <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
            <p>Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
