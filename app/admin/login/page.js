"use client";
import { useState } from "react";
import { House, Info } from "lucide-react";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password);
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
                {/* Branding Section */}
                <div className="mb-8">
                    <a href="/" className="flex justify-center items-center gap-2 mb-3 text-gray-800">
                        <House className="w-6 h-6 text-[#d95c3a]" />
                        <span className="text-xl font-semibold">NLM Roofing</span>
                    </a>
                    <h1 className="text-3xl font-bold text-gray-800">Admin Portal</h1>
                    <p className="text-gray-500 text-sm mt-2">
                        Access the dashboard to manage website content.
                    </p>
                </div>

                {/* Test Credentials */}
                <div className="flex items-start bg-orange-50 border border-orange-200 p-4 rounded-lg mb-6 text-left gap-3">
                    <Info className="w-5 h-5 text-[#d95c3a] mt-1" />
                    <div>
                        <p className="font-semibold text-gray-700">Test Credentials</p>
                        <p className="text-sm text-gray-600">
                            <strong>Email:</strong> devsaini150602@gmail.com
                        </p>
                        <p className="text-sm text-gray-600">
                            <strong>Password:</strong> Pizza-Robot-5-Stone-Light
                        </p>
                    </div>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                    <div>
                        <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="your@email.com"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#d95c3a] focus:outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="email"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-gray-700 mb-1 font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#d95c3a] focus:outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="current-password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#d95c3a] hover:bg-[#b74a2e] text-white font-semibold py-2 rounded-lg transition"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </main>
    );
}
