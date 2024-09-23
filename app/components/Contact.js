"use client";
import { useState } from "react";
import { AiFillInstagram, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import emailjs from "emailjs-com";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Validate form input on the server side
  const validateForm = () => {
    const { name, email, phone, message, honeypot } = formData;
    if (honeypot) {
      return "Spam detected!";
    }
    if (!name || !email || !phone || !message) {
      return "All fields are required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email";
    }
    if (phone.length <= 10) {
      return "Please enter a valid phone number";
    }
    return "";
  };

  // Handle input change for text fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  // Handle phone number input change
  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true); // Set loading state
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setSuccess("Message sent successfully!");
          setLoading(false); // Reset loading state
        },
        () => {
          setError("Failed to send message. Please try again later.");
          setLoading(false); // Reset loading state
        },
      );
  };

  return (
    <div className=" p-6 bg-[#f8f8f8]">
      <h2 className="text-5xl font-bold text-center my-12 text-[#06061f]">
        Contact Me
      </h2>

      {/* Social Links */}
      <div className="flex justify-center space-x-7 mb-6">
        <a
          href="https://www.instagram.com/_zheebuuu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram className="w-9 h-9 hover:text-purple-600" />
        </a>
        <a href="mailto:peter.essibu@stu.ucc.edu.gh">
          <AiFillMail className="w-9 h-9 hover:text-[#4e41ff]" />
        </a>
        <a
          href="https://linkedin.com/in/peteressibu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="w-9 h-9 rounded-lg hover:text-[#3c65ee]" />
        </a>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-md lg:max-w-lg mx-auto p-6 rounded-xl shadow-xl space-y-4 sm:space-y-6"
      >
        <div className="hidden">
          <label
            htmlFor="honeypot"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Leave this field empty
          </label>
          <input
            type="text"
            name="honeypot"
            id="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            className="hidden"
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-base font-medium text-black"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border-[1px] focus:outline-0 border-gray-600 rounded-md text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border-[1px] focus:outline-0 border-gray-600 rounded-md text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Phone Number
          </label>
          <PhoneInput
            country={"gh"}
            value={formData.phone}
            onChange={handlePhoneChange}
            inputClass="w-full px-3 py-2 border-[1px] border-black rounded-md text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border-[1px] focus:outline-0 border-gray-600 rounded-md text-sm"
            rows={4}
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm sm:text-base">{error}</p>}
        {success && (
          <p className="text-green-500 text-sm sm:text-base">{success}</p>
        )}
        <button
          type="submit"
          className={`w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
