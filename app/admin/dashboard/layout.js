import Header from "@/Components/Admin/Header";
import Sidebar from "@/Components/Admin/Sibebar";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});



export default function DashboardLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="flex">
                    <Sidebar />
                    <div className="ml-64 flex-1 min-h-screen bg-gray-100">
                        <Header />
                        <main className="p-6">{children}</main>
                    </div>
                </div>
            </body>
        </html>
    );
}