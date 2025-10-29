import React from "react";

const stats = [
    {
        title: "Cities Served",
        value: "25+",
        description: "Across India with active clients",
    },
    {
        title: "Happy Customers",
        value: "1200+",
        description: "Satisfied clients who trust us",
    },
    {
        title: "Projects Completed",
        value: "800+",
        description: "Delivered with quality and precision",
    },
    {
        title: "Years of Experience",
        value: "10+",
        description: "Providing reliable roofing solutions",
    },
];

const LocationStats = () => {
    return (
        <section className="bg-gray-50 py-16 px-6 md:px-10 lg:px-20">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Our Reach & Impact
                </h2>
                <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                    We take pride in serving multiple cities and completing projects that
                    make a difference. Here’s a quick look at our footprint.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-8 border border-gray-100"
                        >
                            <h3 className="text-4xl font-bold text-blue-600 mb-2">
                                {item.value}
                            </h3>
                            <h4 className="text-lg font-semibold text-gray-800">
                                {item.title}
                            </h4>
                            <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LocationStats;
