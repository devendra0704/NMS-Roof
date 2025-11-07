import React from "react";
import Image from "next/image";
import { ShieldCheck, Shield, Medal, Zap, Users } from "lucide-react";

const About = () => {
    return (
        <div className="about-page bg-gray-100 ">
            {/* Hero Section */}
            <section className=" relative text-center py-16 mt-16 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('/about-hero-bg.avif')",
                }}
            >
                <div className="absolute inset-0 bg-[#0a192fb3]/60"></div>

                <div className="relative z-10">
                    <h1 className="text-5xl font-bold text-white">About NLM Roofing</h1>
                    <p className="text-lg text-gray-300 mt-2">
                        Building Trust, One Roof at a Time Since 2005
                    </p>
                </div>
            </section>

            {/* History Section */}
            <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <Image
                        src="/placeholder.svg"
                        alt="NLM Roofing manufacturing facility"
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-md"
                    />
                </div>
                <div>
                    <h2 className="text-5xl text-[#363D39] font-bold mb-4">Our History</h2>
                    <p className="text-[#5f6b80] mb-3 text-base leading-[1.7] font-normal ">
                        Founded in 2005, NLM Roofing has grown from a small, family-owned
                        business into a trusted name in the roofing industry. Our journey
                        began with a simple goal: to provide our community with durable,
                        high-quality roofing materials coupled with exceptional, honest
                        service.
                    </p>
                    <p className="text-[#5f6b80] text-base leading-[1.7] font-normal ">
                        Over the years, we&apos;ve expanded our operations and now proudly serve
                        thousands of residential and commercial customers. While we&apos;ve
                        grown, our core values and commitment to craftsmanship have remained
                        unchanged, forming the bedrock of our success.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="bg-white py-16 px-6 max-w-6xl rounded-3xl flex flex-col items-center mx-auto mb-16 justify-center">
                <div className="max-w-6xl mx-auto ">
                    <h2 className="text-5xl text-[#363D39] font-bold text-center mb-6">
                        Our Mission & Values
                    </h2>
                    <blockquote className=" text-center italic text-gray-600 mb-12 text-3xl">

                        <span className="text-5xl mr-2 text-[#d95c3a] font-bold">“</span>
                        Our mission is to provide premium roofing solutions that protect
                        your investment and enhance your property&apos;s value.
                        <span className="text-5xl ml-2 text-[#d95c3a] font-bold">”</span>
                    </blockquote>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {[
                            {
                                title: "Quality",
                                text: "Uncompromising standards in every product we manufacture.",
                                icon: <ShieldCheck className="w-10 h-10 mx-auto text-primary text-[#d95c3a]" />,
                            },
                            {
                                title: "Integrity",
                                text: "Honest, transparent, and ethical in all our dealings.",
                                icon: <Medal className="w-10 h-10 mx-auto text-primary text-[#d95c3a]" />,
                            },
                            {
                                title: "Innovation",
                                text: "Continuously improving our products and processes.",
                                icon: <Zap className="w-10 h-10 mx-auto text-primary text-[#d95c3a]" />,
                            },
                            {
                                title: "Customer Satisfaction",
                                text: "Exceeding expectations is our standard practice.",
                                icon: <Users className="w-10 h-10 mx-auto text-primary text-[#d95c3a]" />,
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="p-6 bg-white  rounded-2xl border-gray-300 shadow-sm text-center duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer transition"
                            >
                                <div className="text-4xl mb-3">{item.icon}</div>
                                <h3 className="font-semibold text-lg">{item.title}</h3>
                                <p className="text-gray-600 mt-2 text-sm">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-16"></section>
        </div>
    );
};

export default About;
