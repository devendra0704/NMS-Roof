"use client";

export default function Gallery() {
    const images = [
        "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
        "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
        "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914", 
        "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    ];

    return (
        <section className="py-20 bg-gray-50" id="gallery">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Project Gallery
                </h2>
                <p className="text-gray-600 mt-2 mb-10 max-w-2xl mx-auto">
                    Explore some of our completed roofing projects showcasing our quality craftsmanship.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <img
                                src={src}
                                alt={`Roofing project ${i + 1}`}
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold text-lg transition">
                                View Project
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
