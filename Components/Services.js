import Image from "next/image";

const Service = [
    {
        title: "Teen Shed Manufacturing",
        description:
            "We specialize in designing and fabricating durable teen sheds suitable for factories, warehouses, and agricultural spaces. Our structures are engineered for strength, weather resistance, and long-lasting performance.",
        image:
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Roof Tiles Production",
        description:
            "Our premium roof tiles combine strength, style, and sustainability. Manufactured using advanced technology, our tiles enhance the appearance of your property while ensuring long-lasting protection.",
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Roof Installation & Maintenance",
        description:
            "From new installations to maintenance and repairs, our roofing experts ensure a seamless and reliable experience that keeps your property safe and stylish for years.",
        image:
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
    },
]

export default function Services() {
    return (
        <section className="bg-gray-50 py-20">
            <h2 className="text-5xl font-semibold text-center text-[#2b303b] mb-4">
                Our Roofing Services
            </h2>
            <p className="text-center font-semibold text-gray-600 mb-16 max-w-2xl mx-auto">
                We offer a comprehensive range of roofing services to meet all your
                residential and commercial needs. Our experienced team provides top-notch
                craftsmanship and exceptional customer service.
            </p>
            <div className="max-w-6xl mx-auto px-6 space-y-24">
                {Service.map((service, index) => (
                    <div
                        key={service.title}
                        className={`grid grid-cols-1 md:grid-cols-5 gap-10 items-center`}
                    >
                        {/* Image Section */}
                        <div
                            className={`md:col-span-3 ${index % 2 !== 0 ? "md:order-2" : "md:order-1"
                                }`}
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={800}
                                height={500}
                                className="w-full h-[300px] sm:h-[400px] object-cover rounded-2xl shadow-lg"
                            />
                        </div>

                        {/* Content Section */}
                        <div
                            className={`md:col-span-2 ${index % 2 !== 0 ? "md:order-1" : "md:order-2"
                                } text-center md:text-left`}
                        >
                            <h3 className="text-4xl font-semibold text-[#2b303b] mb-6">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-base mb-6">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}