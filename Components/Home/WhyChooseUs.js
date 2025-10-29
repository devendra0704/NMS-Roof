// app/components/WhyChooseUs.jsx or src/components/WhyChooseUs.jsx

export default function WhyChooseUs() {
    const features = [
        {
            title: "High-Quality Materials",
            description:
                "We use premium, durable materials to ensure your roof lasts for decades with minimal maintenance.",
            icon: "🏗️",
        },
        {
            title: "Experienced Professionals",
            description:
                "Our skilled team has years of experience in residential and commercial roofing solutions.",
            icon: "👷‍♂️",
        },
        {
            title: "On-Time Delivery",
            description:
                "We value your time — every project is completed efficiently without compromising quality.",
            icon: "⏱️",
        },
        {
            title: "Customer Satisfaction",
            description:
                "Your happiness is our top priority. We provide personalized service and transparent communication.",
            icon: "💬",
        },
        {
            title: "Customer Satisfaction",
            description:
                "Your happiness is our top priority. We provide personalized service and transparent communication.",
            icon: "💬",
        },
        {
            title: "Customer Satisfaction",
            description:
                "Your happiness is our top priority. We provide personalized service and transparent communication.",
            icon: "💬",
        },
    ];

    return (
        <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                    Why Choose <span className="text-blue-600">NMS Roof?</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    We’re not just building roofs — we’re building trust. Here’s what
                    makes us stand out from the rest.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white flex flex-row shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
