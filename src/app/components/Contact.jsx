"use client";
import React, { useRef, useState } from 'react';
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiClipboard } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';

const Contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [copied, setCopied] = useState("");

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(""), 2000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        toast.loading("Sending message...");
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );
            toast.dismiss()
            toast.success("Message sent successfully!");
            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error);
            toast.dismiss()
            toast.error("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id='contact' className='w-full mt-20 md:mt-30 px-6 md:px-20 mb-20'>
            <div className='max-w-7xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <h1 className='text-5xl md:text-6xl font-bold bg-linear-to-r from-[#FF5005] via-[#FF5005] to-[#F7C948] bg-clip-text text-transparent pb-2'>
                        Get in Touch 
                    </h1>
                    <p className='bg-orange-500/20 text-white px-6 py-2 w-fit mx-auto mt-6 text-lg rounded-full'>
                        Have questions or ideas?
                    </p>
                </div>

                {/* Content Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12'>
                    {/* Left Side - Contact Info */}
                    <div className='lg:col-span-5 space-y-8'>
                        <div className='bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-8'>
                            <h2 className='text-2xl font-bold text-white mb-6'>Let's Work Together!</h2>
                            <p className='text-neutral-400 mb-8'>
                                Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities.
                            </p>

                            <div className='space-y-6'>
                                {/* Location */}
                                <div className='flex items-center gap-4 text-neutral-300'>
                                    <div className='h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0'>
                                        <FaMapMarkerAlt size={20} className='text-orange-500' />
                                    </div>
                                    <div>
                                        <p className='text-sm text-neutral-400'>Location</p>
                                        <p className='text-white'>Chittagong, Bangladesh</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className='flex items-center gap-4 text-neutral-300 group'>
                                    <div className='h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0'>
                                        <FaWhatsapp size={20} className='text-orange-500' />
                                    </div>
                                    <div className='flex-1'>
                                        <p className='text-sm text-neutral-400'>WhatsApp</p>
                                        <p className='text-white'>+880 1709341256</p>
                                    </div>
                                    <button
                                        onClick={() => handleCopy("+880 1709341256")}
                                        className='text-neutral-400 hover:text-orange-500 transition-colors relative'
                                        title='Copy to clipboard'
                                    >
                                        <FiClipboard size={18} />
                                        {copied === "+880 1709341256" && (
                                            <span className='absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-green-400 whitespace-nowrap bg-neutral-800 px-2 py-1 rounded'>
                                                Copied!
                                            </span>
                                        )}
                                    </button>
                                </div>

                                {/* Email */}
                                <div className='flex items-center gap-4 text-neutral-300 group'>
                                    <div className='h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0'>
                                        <MdEmail size={20} className='text-orange-500' />
                                    </div>
                                    <div className='flex-1'>
                                        <p className='text-sm text-neutral-400'>Email</p>
                                        <p className='text-white text-sm md:text-base break-all'>
                                            masadrayan2002@gmail.com
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => handleCopy("masadrayan2002@gmail.com")}
                                        className='text-neutral-400 hover:text-orange-500 transition-colors relative'
                                        title='Copy to clipboard'
                                    >
                                        <FiClipboard size={18} />
                                        {copied === "masadrayan2002@gmail.com" && (
                                            <span className='absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-green-400 whitespace-nowrap bg-neutral-800 px-2 py-1 rounded'>
                                                Copied!
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className='lg:col-span-7'>
                        <div className='bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-8'>
                            <h2 className='text-2xl font-bold text-white mb-6'>Send Me a Message</h2>
                            
                            <form ref={formRef} onSubmit={handleSubmit} className='space-y-6'>
                                {/* Name Input */}
                                <div>
                                    <label htmlFor='name' className='block text-sm font-medium text-neutral-300 mb-2'>
                                        Your Name
                                    </label>
                                    <input
                                        type='text'
                                        id='name'
                                        name='name'
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="What's your good name?"
                                        required
                                        className='w-full px-4 py-3 rounded-lg bg-neutral-800/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label htmlFor='email' className='block text-sm font-medium text-neutral-300 mb-2'>
                                        Your Email
                                    </label>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="What's your email address?"
                                        required
                                        className='w-full px-4 py-3 rounded-lg bg-neutral-800/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
                                    />
                                </div>

                                {/* Message Textarea */}
                                <div>
                                    <label htmlFor='message' className='block text-sm font-medium text-neutral-300 mb-2'>
                                        Your Message
                                    </label>
                                    <textarea
                                        id='message'
                                        name='message'
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder='How can I help you?'
                                        rows='6'
                                        required
                                        className='w-full px-4 py-3 rounded-lg bg-neutral-800/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none'
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type='submit'
                                    disabled={loading}
                                    className='w-full md:w-auto px-8 py-3 bg-[#FF500599] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed'
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;