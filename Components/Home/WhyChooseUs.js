import {
    Hammer,
    Users,
    Clock,
    Smile,
    Award,
    PackageCheck,
    Factory,
    Headphones,
} from "lucide-react";

export default function WhyChooseUs() {
    const features = [
        {
            title: "High-Quality Materials",
            description:
                "We use premium, durable materials to ensure your roof lasts for decades with minimal maintenance.",
            icon: <Hammer />,
        },
        {
            title: "Experienced Professionals",
            description:
                "Our skilled team has years of experience in residential and commercial roofing solutions.",
            icon: <Users />,
        },
        {
            title: "On-Time Delivery",
            description:
                "We value your time — every project is completed efficiently without compromising quality.",
            icon: <Clock />,
        },
        {
            title: "Customer Satisfaction",
            description:
                "Your happiness is our top priority. We provide personalized service and transparent communication.",
            icon: <Smile />,
        },
        {
            title: "18+ Years of Experience",
            description:
                "Decades of industry knowledge ensure reliable and proven roofing solutions.",
            icon: <Award />,
        },
        {
            title: "Premium Quality Materials",
            description:
                "We source only the best raw materials for superior durability and performance.",
            icon: <PackageCheck />,
        },
        {
            title: "Expert Manufacturing",
            description:
                "State-of-the-art processes guarantee precision and consistency in every product.",
            icon: <Factory />,
        },
        {
            title: "Excellent Customer Support",
            description:
                "Our dedicated team is here to guide you from selection to installation and beyond.",
            icon: <Headphones />,
        },
    ];

    return (
        <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                    Why Choose <span className="text-[#d95c3a]">NMS Roof?</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    We’re not just building roofs — we’re building trust. Here’s what
                    makes us stand out from the rest.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white flex flex-col justify-center items-center shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300"
                        >
                            <div className=" mb-4 text-[#d95c3a]">{feature.icon}</div>
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
