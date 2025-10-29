"use client";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
    return (
        <section className="bg-[#f9fafb] py-20 px-6" id="contact">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
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
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
                            >
                                Submit Request
                            </button>
                        </form>
                    </div>

                    {/* Right: Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Contact Information
                        </h3>
                        <p className="text-gray-600 mb-8">
                            Reach out to us directly through phone, email, or visit our office.
                        </p>

                        <ul className="space-y-6">
                            <li className="flex items-start gap-3">
                                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                                <a
                                    href="tel:+1234567890"
                                    className="text-gray-700 hover:text-blue-600 transition"
                                >
                                    (123) 456-7890
                                </a>
                            </li>

                            <li className="flex items-start gap-3">
                                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                                <a
                                    href="mailto:contact@natarajroofing.com"
                                    className="text-gray-700 hover:text-blue-600 transition"
                                >
                                    contact@natarajroofing.com
                                </a>
                            </li>

                            <li className="flex items-start gap-3">
                                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                                <span className="text-gray-700">
                                    123 Roofing Ave, Springfield, IL 62704
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
