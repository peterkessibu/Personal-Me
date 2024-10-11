"use client";
import { useState, useRef, useEffect } from "react";
import { AiFillInstagram, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const formRef = useRef(null);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess("");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const formData = new FormData(event.target);

    // Honeypot check
    if (formData.get("website")) {
      console.log("Bot submission detected");
      setLoading(false);
      return;
    }

    formData.append("access_key", "fd243bb7-c115-4230-970c-bd35c883c839");

    // Add a timestamp to prevent replay attacks
    formData.append("timestamp", new Date().toISOString());

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        setSuccess("Message sent successfully!");
        formRef.current.reset();
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while sending the message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6 bg-[#f8f8f8]">
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
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-md lg:max-w-lg mx-auto p-6 rounded-xl shadow-xl space-y-4 sm:space-y-6"
      >
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
            inputProps={{
              name: "phone",
              required: true,
              className:
                "w-full px-14 py-2 border-[1px] border-black rounded-md text-sm",
            }}
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
            className="w-full px-3 py-2 border-[1px] focus:outline-0 border-gray-600 rounded-md text-sm"
            rows={4}
            required
          />
        </div>
        {/* Honeypot field */}
        <div className="hidden">
          <label htmlFor="website">Website</label>
          <input type="text" name="website" id="website" />
        </div>
        {error && <p className="text-red-500 text-sm sm:text-base">{error}</p>}
        {success && (
          <p className="text-green-500 text-sm sm:text-base">{success}</p>
        )}
        <div className="flex justify-center">
          <button
            type="submit"
            className={`w-1/2 items-center bg-[#06061f] text-white py-2 rounded-md hover:bg-[#0c0c3a] transition duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
