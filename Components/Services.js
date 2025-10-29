import { ShieldCheck, Users, CheckCircle, Wrench } from "lucide-react";

const Service = [
    {
        icon: <Wrench size={32} className="text-blue-600" />,
        title: "Roof Installation",
        description:
            "Expert installation of new roofs with high-quality materials for long-lasting protection.",
    },
    {
        icon: <Users size={32} className="text-blue-600" />,
        title: "Roof Repair",
        description:
            "Prompt and reliable repair services for leaks, damages, and wear to extend your roof's life.",
    },
    {
        icon: <CheckCircle size={32} className="text-blue-600" />,
        title: "Roof Maintenance",
        description:
            "Prompt and reliable maintenance services to keep your roof in top condition year-round.",
    },
    {
        icon: <Users size={32} className="text-blue-600" />,
        title: "Roof Repair",
        description:
            "Prompt and reliable repair services for leaks, damages, and wear to extend your roof's life.",
    },
    {
        icon: <CheckCircle size={32} className="text-blue-600" />,
        title: "Roof Maintenance",
        description:
            "Prompt and reliable repair services for leaks, damages, and wear to extend your roof's life.",
    },
    {
        icon: <Users size={32} className="text-blue-600" />,
        title: "Roof Repair",
        description:
            "Prompt and reliable repair services for leaks, damages, and wear to extend your roof's life.",
    },
];

export default function Services() {
    return (
        <section className="bg-gray-50 py-20">
            <h2 className="text-5xl font-semibold text-center text-[#2b303b] mb-4">
                Our Roofing Services
            </h2>
            <p className="text-center font-semibold text-gray-600 mb-16 max-w-2xl mx-auto">
                We offer a comprehensive range of roofing services to meet all your
                residential and commercial roofing needs. Our experienced team is
                dedicated to providing top-notch craftsmanship and exceptional customer
                service.
            </p>
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                {Service.map((service, i) => (
                    <div
                        key={i}
                        className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm text-center  transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                    >
                        <div className="flex justify-center mb-4 text-blue-600">{service.icon}</div>
                        <h3 className="text-2xl font-semibold mb-2 text-[#2b303b]">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}