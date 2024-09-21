/* eslint-disable no-unused-vars */
/* eslint-disable no-template-curly-in-string */

import React from 'react';

// Import Footer component.
import Footer from './Footer';

const ContactPage = () => {
  return (
    <>
      {/* Main image */}
      <div className="w-full overflow-hidden">
        <img
          src="https://img.freepik.com/premium-photo/stove-with-bunch-vegetables-it_987764-225949.jpg?w=826"
          alt="BannerImage"
          className="w-full h-auto"
        />
      </div>

      {/* Contact form and map section */}
      <div className="w-full md:w-4/5 mx-auto mt-10 px-4 md:px-0 flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <div className="md:w-1/2 w-full bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <form name="submit-to-google-sheet">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  name="message"
                  placeholder="Enter your message"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="md:w-1/2 w-full h-[490px] flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.3912275929997!2d77.146119!3d28.737734000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01b20e6a2e19%3A0x8aa5fc0b71887ad0!2sBajaj%20Enterprises!5e0!3m2!1sen!2sin!4v1726222642202!5m2!1sen!2sin"
            className="w-full h-full rounded-lg shadow-lg"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>

      {/* Footer section */}
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
