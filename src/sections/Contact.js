"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="py-16 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Get in Touch</h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-red-600">Phone</h4>
              <p className="text-gray-700">+91 1227774774</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-red-600">Email</h4>
              <p className="text-gray-700">contact@aaoji.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-red-600">Location</h4>
              <p className="text-gray-700">123 Street, Haridwar, Uttrakhand, India</p>
            </div>

            {/* Map */}
          <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110632.80105052044!2d78.15285865159976!3d29.94276666060405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909470eb8ee57c9%3A0x4e449176a640f5f3!2sHaridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1744019097866!5m2!1sen!2sin"
                className="w-full h-56 rounded-md"
                loading="lazy">
          </iframe>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


              
  
           