import Link from "next/link";

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

                <div>
                    <h4 className="text-lg font-semibold  mb-3">Contact</h4>
                    <p className="text-gray-500 text-sm">📍 New Delhi, India</p>
                    <p className="text-gray-500 text-sm">📞 +91 9XXXXX3210</p>
                    <p className="text-gray-500 text-sm">✉ info@nmsroof.com</p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold  mb-3">Follow Us</h4>
                    <div className="flex gap-4 text-xl">
                        <a href="#" className="hover:text-blue-400">🌐</a>
                        <a href="#" className="hover:text-blue-400">📘</a>
                        <a href="#" className="hover:text-blue-400">📸</a>
                    </div>
                </div>
            </div>

            <div className=" m-2 pt-2 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} NMSRoof. All rights reserved.
            </div>
        </footer>
    );
}
