"use client";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
    return (
        <section className="bg-[#f9fafb] py-20 px-6" id="contact">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 mt-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3">
                        Get in Touch
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Ready to start your project? Contact us for a free, no-obligation quote.
                    </p>
                </div>

                {/* Layout */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left: Contact Form */}
                    <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-semibold text-gray-700 mb-1"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#d95c3a]"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-gray-700 mb-1"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#d95c3a]"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-semibold text-gray-700 mb-1"
                                >
                                    Phone (Optional)
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="(123) 456-7890"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#d95c3a]"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold text-gray-700 mb-1"
                                >
                                    Message / Service Needed
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Tell us about your project..."
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#d95c3a]"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#d95c3a] text-white font-semibold py-3 rounded-lg hover:bg-[#b74a2e] transition"
                            >
                                Submit Request
                            </button>
                        </form>
                    </div>

                    {/* Right: Contact Info */}
                    <div className="max-w-md mx-auto">
                        <h3 className="text-3xl font-bold text-[#d95c3a] mb-4">
                            Contact Information
                        </h3>
                        <p className="text-gray-600 mb-8">
                            Reach out to us directly through phone, email, or visit our office.
                        </p>

                        <ul className="space-y-6">
                            {/* Phone */}
                            <li className="flex items-start gap-3">
                                <Phone className="w-6 h-6 text-[#d95c3a] mt-1" />
                                <div>
                                    <p className="font-semibold text-gray-800">Phone</p>
                                    <a
                                        href="tel:+1234567890"
                                        className="text-gray-700 hover:text-[#b74a2e] transition"
                                    >
                                        (123) 456-7890
                                    </a>
                                </div>
                            </li>

                            {/* Email */}
                            <li className="flex items-start gap-3">
                                <Mail className="w-6 h-6 text-[#d95c3a] mt-1" />
                                <div>
                                    <p className="font-semibold text-gray-800">Email</p>
                                    <a
                                        href="mailto:contact@natarajroofing.com"
                                        className="text-gray-700 hover:text-[#b74a2e] transition"
                                    >
                                        contact@natarajroofing.com
                                    </a>
                                </div>
                            </li>

                            {/* Address */}
                            <li className="flex items-start gap-3">
                                <MapPin className="w-6 h-6 text-[#d95c3a] mt-1" />
                                <div>
                                    <p className="font-semibold text-gray-800">Address</p>
                                    <span className="text-gray-700">
                                        Udaipurwati, Rajasthan, India
                                    </span>
                                </div>
                            </li>

                            {/* Business Hours */}
                            <li className="flex items-start gap-3">
                                <Clock className="w-6 h-6 text-[#d95c3a] mt-1" />
                                <div>
                                    <p className="font-semibold text-gray-800">Business Hours</p>
                                    <span className="text-gray-700">Mon–Fri, 9:00 AM – 6:00 PM</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-md border mt-16">
                    <iframe
                        title="Company Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.012108220208!2d80.99603107526414!3d26.86992887667775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2c92a2b5a8b%3A0xe16e7d4c06d64dcd!2sMNNIT%20Allahabad!5e0!3m2!1sen!2sin!4v1695043668456!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
