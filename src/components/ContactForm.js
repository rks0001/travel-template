import React from 'react';
import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <div className='headtext'>CONTACT US</div>
      <form
        action="https://formspree.io/f/xrgwqpwq"
        method="POST"
      >
        <label>
          Your Name:
        </label>
        <input placeholder="Enter your Full Name" type="text" name="text" />

        <label>
          Your Whatsapp/Contact Number:
        </label>
        <input
          placeholder="Enter your Phone Number"
          type="number"
          name="phone"
          pattern="[0-9]{10}"
          required
        />

        <label for="plans">Choose a plan you're interested in:</label>
        <select name="plans" id="plans">
          <option value="Meghalaya 4N/5D">Meghalaya 4N/5D</option>
          <option value="Arunachal 4N/5D">Arunachal 4N/5D</option>
          <option value="Assam 4N/5D">Assam 4N/5D</option>
        </select>

        <label>Your Message:</label>
        <textarea
          placeholder="Tell us about the plan you're interested in "
          name="message"
          rows="4"
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
