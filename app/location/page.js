import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import LocationStats from "@/Components/LocationStats";
import Link from "next/link";

const LocationSection = () => {
    return (
        <section className="w-full bg-gray-50 py-16 px-4 md:px-10 lg:px-20 pt-24 mt-12">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* Map Section */}
                <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-md border">
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

                {/* Address Info */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-800">Our Location</h2>
                    <p className="text-gray-600">
                        Visit us at our office or contact us anytime. We’re happy to help
                        with any queries you may have.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <MapPin className="text-blue-600 w-6 h-6" />
                            <span className="text-gray-700">
                                MNNIT Allahabad, Teliarganj, Prayagraj, UP, India
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="text-blue-600 w-6 h-6" />
                            <span className="text-gray-700">+91 98765 43210</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="text-blue-600 w-6 h-6" />
                            <span className="text-gray-700">support@yourcompany.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <LocationStats />

            <div className="max-w-3xl mx-auto text-center mt-16 px-4 bg-gray-300 rounded-2xl p-2">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 mt-16">
                    Don&apos;t see your location?
                </h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto">
                    We are constantly expanding our reach. If you don&apos;t see your city or
                    region listed, please contact us. We would love to hear from you and
                    discuss how we can serve your roofing needs.
                </p>
                <Link href="/contact" className="text-blue-600 hover:underline mt-8 mb-12 inline-block font-semibold bg-amber-100 rounded-lg px-4 py-2">
                    Contact us
                </Link>
            </div>
        </section>
    );
};

export default LocationSection;
