"use client";

const roofingTypes = [
    {
        title: "Residential Roofing",
        desc: "Durable and stylish roofing for homes, ensuring long-term protection and comfort.",
        img: "/images/residential.jpg",
    },
    {
        title: "Commercial Roofing",
        desc: "Efficient and cost-effective roofing for offices, warehouses, and retail spaces.",
        img: "/images/commercial.jpg",
    },
    {
        title: "Industrial Roofing",
        desc: "Heavy-duty roofing designed for factories and industrial environments.",
        img: "/images/industrial.jpg",
    },
];

export default function RoofingTypes() {
    return (
        <section className="py-16 bg-gray-50 px-6 md:px-10">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Roofing Types</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {roofingTypes.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white shadow-md hover:shadow-lg transition rounded-2xl overflow-hidden"
                        >
                            <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                                <p className="text-gray-600 mt-2">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
