import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Page</h1>
      <div className="contact__form-container">
        <h2>Contact form</h2>
        <form className="contact__form">
          <div className="input-container">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-container">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
