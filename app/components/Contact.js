'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillInstagram, AiFillMail, AiFillLinkedin } from 'react-icons/ai';
import emailjs from 'emailjs-com';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ReCAPTCHA from 'react-google-recaptcha';


// Contact Component
const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', honeypot: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [recaptchaToken, setRecaptchaToken] = useState('');

    // Validate form input
    const validateForm = () => {
        const { name, email, phone, message, honeypot } = formData;
        if (honeypot) {
            return 'Spam detected!';
        }
        if (!name || !email || !phone || !message) {
            return 'All fields are required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return 'Please enter a valid email';
        }
        if (phone.length <= 10) {
            return 'Please enter a valid phone number';
        }
        if (!recaptchaToken) {
            return 'Please complete the reCAPTCHA';
        }
        return '';
    };

    // Handle input change for text fields
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
        setSuccess('');
    };

    // Handle phone number input change
    const handlePhoneChange = (value) => {
        setFormData({ ...formData, phone: value });
    };

    // Handle reCAPTCHA change
    const handleRecaptchaChange = (value) => {
        setRecaptchaToken(value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

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
                process.env.NEXT_PUBLIC_EMAILJS_PRIVATE_KEY,
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID,

            )
            .then(
                () => setSuccess('Message sent successfully!'),
                () => setError('Failed to send message. Please try again later.')
            );
    };

    return (
        <motion.section
            className="min-h-screen p-6 bg-[#dbd5f7]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">Contact Me</h2>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <AiFillInstagram className="w-8 h-8 hover:text-purple-600 transition duration-300" />
                </a>
                <a href="mailto:your.email@example.com">
                    <AiFillMail className="w-8 h-8 hover:text-[#4e41ff] transition duration-400" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin className="w-8 h-8 rounded-lg hover:text-[#3c65ee] transition duration-300" />
                </a>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="max-w-md lg:max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg space-y-4 sm:space-y-6">
                <div className="hidden">
                    <label htmlFor="honeypot" className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium text-gray-600">Leave this field empty</label>
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
                    <label htmlFor="name" className="block mb-1 sm:mb-2 text-base font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm sm:text-base"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium text-gray-600">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm sm:text-base"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium text-gray-600">Phone Number</label>
                    <PhoneInput
                        country={'gh'}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        inputClass="w-full px-3 py-2 border border-gray-300 rounded-md text-sm sm:text-base"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium text-gray-600">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm sm:text-base"
                        rows={4}
                        required
                    />
                </div>
                {/* <div className="mt-4">
                    <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        onChange={handleRecaptchaChange}
                    />
                </div> */}
                {error && <p className="text-red-500 text-sm sm:text-base">{error}</p>}
                {success && <p className="text-green-500 text-sm sm:text-base">{success}</p>}
                <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300 text-sm sm:text-base"
                >
                    Send
                </button>
            </form>
        </motion.section>
    );
};

export default Contact;
