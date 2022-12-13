import React from 'react';import emailjs from 'emailjs-com';
import './ContactUs.css';

export default function ContactUs() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('S.Lee905', 'template_6vq27k9', e.target, 'hsrmsX8j-l9046Vzb')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        </form>
    );
}