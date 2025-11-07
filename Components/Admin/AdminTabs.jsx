"use client";
import { useState } from "react";
// import ProductsTable from "./ProductsTable";

export default function AdminTabs() {
    const [activeTab, setActiveTab] = useState("products");

    const tabs = [
        { key: "products", label: "Products Management" },
        { key: "inquiries", label: "Contact Inquiries" },
        { key: "testimonials", label: "Testimonials" },
        { key: "gallery", label: "Gallery" },
    ];

    return (
        <div className="mt-8">
            {/* Tabs Header */}
            <div className="flex border-b border-gray-300">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`py-2 mx-6 text-sm font-medium transition-colors ${activeTab === tab.key
                                ? "border-b-2 border-[#d95c3a] text-[#d95c3a]"
                                : "text-gray-600 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-500"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tabs Content */}
            <div className="mt-4">
                {activeTab === "products" && (
                    <div className="p-6 text-gray-600">Products management coming soon.</div>
                    // <ProductsTable />
                )}
                {activeTab === "inquiries" && (
                    <div className="p-6 text-gray-600">No inquiries yet.</div>
                )}
                {activeTab === "testimonials" && (
                    <div className="p-6 text-gray-600">No testimonials added.</div>
                )}
                {activeTab === "gallery" && (
                    <div className="p-6 text-gray-600">Gallery under development.</div>
                )}
            </div>
        </div>
    );
}
