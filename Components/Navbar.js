"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const navItems = [
        { name: "Home", href: "/" },
        // { name: "Services", href: "/services" },
        { name: "Gallery", href: "/gallery" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className=" fixed z-50 top-0 left-0 w-full bg-white/90 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
                <Link href="/" className="text-2xl font-bold text-gray-900 ">
                    NMSRoof
                </Link>

                <nav className="md:flex gap-1 hidden ">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`px-4 py-2 rounded-lg font-semibold ${pathname === item.href
                                    ? "text-[#d95c3a]"
                                    : "text-gray-500 hover:text-[#b74a2e]"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <Link
                    href="/"
                    className="px-4 py-2 text-[#ffffff] font-semibold  bg-[#d95c3a] hover:bg-[#b74a2e] rounded-lg hidden lg:inline-block"
                >
                    Get Quote
                </Link>


                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-gray-800 hover:text-gray-900 py-2"
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>


                {/* Mobile Dropdown */}
                {isOpen && (
                    <div className="max-w-56 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-md absolute top-full right-8 w-full">
                        <nav className="flex flex-col px-6 py-4 space-y-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`px-4 py-2 rounded-lg ${pathname === item.href
                                        ? "text-[#d95c3a] font-semibold"
                                        : "text-gray-700 hover:text-[#b74a2e]"
                                        }`}
                                    onClick={toggleMenu}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/quote"
                                className="text-center mt-3 bg-[#d95c3a] text-white font-medium py-2 rounded-lg hover:bg-[#b74a2e] transition"
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
