import React from "react";
import Back from "../Common/Back/Back";
import Footer from "../Footer/Footer";

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.070106200748!2d90.35977005!3d23.7645786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c09f9ba3d447%3A0x1babce9f1c6c95a3!2sMohammadpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1669128824401!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade ';
  <>
    <Back title="Contact Us" />
    <section className="contact padding">
      <div className="container shadow flexSB">
        <div className="left row">
          <iframe title="frame" src={map}></iframe>
        </div>
        <div className="right row">
          <h1>Contact Us</h1>
          <p>
            LorNostrud dolore id elit cillum velit. Quis eu ad dolore dolore
            amet in excepteur amet labo
          </p>

          <div className="items grid2">
            <div className="box">
              <h4>ADDRESS:</h4>
              <p>29/A, Ring Road, Mohammadpur, Dhaka</p>
            </div>
            <div className="box">
              <h4>Email:</h4>
              <p>info@gmail.com</p>
            </div>
            <div className="box">
              <h4>PHONE</h4>
              <p>+8801918935859</p>
            </div>
          </div>
          <form action="">
            <div className="flexSB">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <input type="email" placeholder="Subject" />
            <textarea cols="30" rows="10">
              Create a massage here...
            </textarea>
            <button className="primary-btn">SEND MESSAGE</button>
          </form>
          <h3>Follow us here</h3>
          <span>FACEBOOK TWITTER INSTAGRAM</span>
        </div>
      </div>
    </section>
    <Footer />
  </>;
};

export default Contact;
