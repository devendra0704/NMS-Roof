import Link from "next/link";

const ReadyToStart = () => {
    return (
        <section className="bg-blue-600 text-white py-16 px-6 mb-10">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Start Your Project?
                </h2>
                <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                    Get a free, no-obligation quote today and let’s build something
                    strong together. We’re just one call away from making your vision a reality.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/contact"
                        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-100 transition"
                    >
                        Get a Free Quote
                    </Link>
                    <Link
                        href="/services"
                        className="px-6 py-3 border border-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition"
                    >
                        View Services
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ReadyToStart;
