import Link from "next/link";
import { MapPin, Phone, Mail, Globe, Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className=" text-gray-600 pt-12 px-6 border-t border-gray-300">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 border-b border-gray-300 pb-8">
                <div>
                    <h3 className="text-2xl font-bold mb-4">NMSRoof</h3>
                    <p className="text-sm text-gray-500">
                        Your trusted partner for superior roofing solutions. We ensure
                        durability, safety, and satisfaction.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold  mb-3">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><Link href="/services" className="hover:text-gray-500">Services</Link></li>
                        <li><Link href="/gallery" className="hover:text-gray-500">Gallery</Link></li>
                        <li><Link href="/products" className="hover:text-gray-500">Products</Link></li>
                        <li><Link href="/contact" className="hover:text-gray-500">Contact</Link></li>
                    </ul>
                </div>
                
                {/* Contact Section */}
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-900">Contact</h4>
                    <p className="flex items-center gap-2 text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 text-[#d95c3a]" /> New Delhi, India
                    </p>
                    <p className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                        <Phone className="w-4 h-4 text-[#d95c3a]" /> +91 9XXXXX3210
                    </p>
                    <p className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                        <Mail className="w-4 h-4 text-[#d95c3a]" /> info@nmsroof.com
                    </p>
                </div>

                {/* Follow Us Section */}
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-900">Follow Us</h4>
                    <div className="flex gap-4 text-gray-600">
                        <a
                            href="#"
                            className="hover:text-[#d95c3a] transition"
                            aria-label="Website"
                        >
                            <Globe className="w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#d95c3a] transition"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#d95c3a] transition"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            <div className=" m-2 pt-2 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} NMSRoof. All rights reserved.
            </div>
        </footer>
    );
}
