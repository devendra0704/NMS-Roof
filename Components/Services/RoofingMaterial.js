"use client";

const materials = [
    {
        title: "Metal Sheets",
        desc: "Lightweight, rust-resistant roofing materials perfect for all climates.",
    },
    {
        title: "Tiles & Shingles",
        desc: "Aesthetic and weatherproof options for residential and villa roofing.",
    },
    {
        title: "Polycarbonate Sheets",
        desc: "Transparent and durable sheets ideal for skylights and open spaces.",
    },
];

export default function RoofingMaterials() {
    return (
        <section className="py-16 px-6 md:px-10">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Roofing Materials</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {materials.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-md transition"
                        >
                            <h3 className="text-xl font-semibold text-blue-600">{item.title}</h3>
                            <p className="text-gray-600 mt-3">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
