"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className=" fixed z-50 top-0 left-0 w-full bg-white/90 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
                <Link href="/" className="text-2xl font-bold text-gray-900">
                    NMSRoof
                </Link>

                <nav className="flex gap-1">
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
                    className="px-4 py-2 text-[#ffffff] font-semibold  bg-[#4775D1] hover:bg-blue-700 rounded-lg"
                >
                    Get Quote
                </Link>
            </div>
        </header>
    );
}
