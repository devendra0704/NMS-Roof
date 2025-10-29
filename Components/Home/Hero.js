import Link from "next/link";

const Hero = () => {
    return (
        <section
            className="relative min-h-[80vh] bg-cover bg-center bg-no-repeat mt-16"
            style={{
                backgroundImage:
                    "url('/Hero-bg.jpeg')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0a192fb3]"></div>

            {/* Content */}
            <div className="relative max-w-4xl mx-auto  py-24 flex flex-col justify-center items-center  text-center  text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Your Trusted Partner for Superior Roofing Solutions
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl">
                    Quality, Reliability, and Craftsmanship You Can Count On. Protecting Your Home and Business.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/dashboard"
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
                    >
                        Get Free Quote
                    </Link>
                    <Link
                        href="/login"
                        className="px-6 py-3 border border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-white transition"
                    >
                        Call Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
