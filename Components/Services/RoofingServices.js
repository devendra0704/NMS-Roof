"use client";

import { Wrench, Hammer, ShieldCheck, Home } from "lucide-react";

const services = [
    {
        title: "Roof Installation",
        desc: "Expert installation for new constructions with durable materials.",
        icon: <Hammer className="w-10 h-10 text-blue-600" />,
    },
    {
        title: "Roof Repair & Maintenance",
        desc: "Quick and reliable repair services to extend your roof’s life.",
        icon: <Wrench className="w-10 h-10 text-blue-600" />,
    },
    {
        title: "Waterproof Coating",
        desc: "Protect your roof from leaks and water damage with advanced coating.",
        icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    },
    {
        title: "Home Renovation Support",
        desc: "Full roofing assistance during home renovations and redesigns.",
        icon: <Home className="w-10 h-10 text-blue-600" />,
    },
];

export default function RoofingServices() {
    return (
        <section className="py-16 bg-gray-50 px-6 md:px-10">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow hover:shadow-lg p-8 flex flex-col items-center text-center border border-gray-100"
                        >
                            {item.icon}
                            <h3 className="mt-4 text-lg font-semibold text-gray-800">{item.title}</h3>
                            <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
