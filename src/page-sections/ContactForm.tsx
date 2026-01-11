// src/components/ContactForm.tsx
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="py-12 px-8 bg-gradient-to-r from-blue-200 to-orange-200 text-left">
      <h2 className="text-3xl font-bold uppercase mb-6">Contact Us</h2>
      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 bg-gray-300 text-gray-700 placeholder-gray-500 border-none"
        />
        <textarea
          placeholder="Message"
          className="w-full px-4 py-2 bg-gray-300 text-gray-700 placeholder-gray-500 border-none h-24"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-2 bg-black text-white font-bold uppercase hover:bg-gray-800"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;