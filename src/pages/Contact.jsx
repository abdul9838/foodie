import React from "react";

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-5 text-gray-700 font-sans">
      <h1 className="text-2xl font-semibold  mb-6">Contact Us</h1>

      <p className="mb-6">
        Have a question or just want to say hello? We'd love to hear from you —
        feel free to reach out using the details or form below.
      </p>

      {/* Contact Info */}
      <div className="mb-10 space-y-2">
        <h2 className="text-lg font-medium">Contact Details</h2>
        <p>📍 Madiyaon, Lucknow (Uttar Predesh) 206001</p>
        <p>
          📞{" "}
          <a href="tel:+919838848691" className=" hover:underline">
            +91 9838848691
          </a>
        </p>
        <p>
          ✉️{" "}
          <a
            href="mailto:abdulahadansari810@gmail.com"
            className=" hover:underline"
          >
            abdulahadansari810@gmail.com
          </a>
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-50 p-5 rounded border border-gray-200">
        <h2 className="text-lg font-medium mb-4">Send a Message</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows="4"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gray-50 text-gray-500 border text-sm px-5 py-2 rounded font-semibold hover:bg-gray-700 hover:text-gray-50 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
