"use client";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { usePathname } from "next/navigation";


export default function LayoutClientWrapper({ children }) {
    const pathname = usePathname();
    const hideLayout = pathname.startsWith("/admin");

    return (
        <>
            {!hideLayout && <Navbar />}
            <main>{children}</main>
            {!hideLayout && <Footer />}
        </>
    );
}
