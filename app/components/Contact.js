'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillInstagram, AiFillMail, AiFillLinkedin } from 'react-icons/ai';
import emailjs from 'emailjs-com';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// Contact Component
const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', honeypot: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

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
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY 
            )
            .then(
                () => setSuccess('Message sent successfully!'),
                () => setError('Failed to send message. Please try again later.')
            );
    };

    return (
        <motion.section
            className="min-h-screen p-6 sm:p-10 md:p-16 bg-gray-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">Contact Me</h2>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <AiFillInstagram className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800 hover:text-purple-600 transition duration-300" />
                </a>
                <a href="mailto:your.email@example.com">
                    <AiFillMail className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800 hover:text-purple-600 transition duration-300" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800 hover:text-purple-600 transition duration-300" />
                </a>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="max-w-md lg:max-w-lg mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-lg space-y-4 sm:space-y-6">
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
                    <label htmlFor="name" className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium text-gray-600">Name</label>
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
