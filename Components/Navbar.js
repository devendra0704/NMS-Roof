"use client";
import { Menu,X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <header className=" fixed z-50 top-0 left-0 w-full bg-white/90 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
                <Link href="/" className="text-2xl font-bold text-gray-900">
                    NMSRoof
                </Link>

                <nav className="md:flex gap-1 hidden ">
                    <Link
                        href="/services"
                        className="px-4 py-2 text-gray-700 hover:text-gray-900"
                    >
                        Services
                    </Link>
                    <Link
                        href="/gallery"
                        className="px-4 py-2  text-gray-700 rounded-lg"
                    >
                        Gallery
                    </Link>
                    <Link
                        href="/login"
                        className="px-4 py-2 text-gray-700 hover:text-gray-900"
                    >
                        Products
                    </Link>
                    <Link
                        href="/location"
                        className="px-4 py-2  text-gray-700 rounded-lg"
                    >
                        Location
                    </Link>
                    <Link
                        href="/login"
                        className="px-4 py-2 text-gray-700 hover:text-gray-900"
                    >
                        Blogs
                    </Link>
                    <Link
                        href="/contact"
                        className="px-4 py-2  text-gray-700 rounded-lg"
                    >
                        Contact
                    </Link>
                </nav>

                <Link
                    href="/"
                    className="px-4 py-2 text-[#ffffff] font-semibold  bg-[#4775D1] hover:bg-blue-700 rounded-lg hidden lg:inline-block"
                >
                    Get Quote
                </Link>


                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-gray-800 hover:text-gray-900"
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>


                {/* Mobile Dropdown */}
                {isOpen && (
                    <div className="max-w-56 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-md absolute top-full right-8 w-full">
                        <nav className="flex flex-col px-6 py-4 space-y-3">
                            <Link
                                href="/services"
                                className="px-4 py-2 text-gray-700 hover:text-gray-900"
                            >
                                Services
                            </Link>
                            <Link
                                href="/gallery"
                                className="px-4 py-2  text-gray-700 rounded-lg"
                            >
                                Gallery
                            </Link>
                            <Link
                                href="/login"
                                className="px-4 py-2 text-gray-700 hover:text-gray-900"
                            >
                                Products
                            </Link>
                            <Link
                                href="/location"
                                className="px-4 py-2  text-gray-700 rounded-lg"
                            >
                                Location
                            </Link>
                            <Link
                                href="/login"
                                className="px-4 py-2 text-gray-700 hover:text-gray-900"
                            >
                                Blogs
                            </Link>
                            <Link
                                href="/contact"
                                className="px-4 py-2  text-gray-700 rounded-lg"
                            >
                                Contact
                            </Link>
                            <Link
                                href="/quote"
                                className="text-center mt-3 bg-[#4775D1] text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Quote
                            </Link>
                        </nav>
                    </div>
                )}

            </div>
        </header>
    );
}
