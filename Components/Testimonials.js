import { Star } from "lucide-react";

const testimonials = [
    {
        name: "John D.",
        location: "Springfield, IL",
        review:
            "Incredible service from start to finish. The team was professional, efficient, and the new roof looks fantastic. Highly recommended!",
        rating: 5,
    },
    {
        name: "Sarah L.",
        location: "Shelbyville, IL",
        review:
            "They responded immediately to our emergency leak during a storm. Their quick action saved us from major water damage. Thank you!",
        rating: 5,
    },
    {
        name: "Michael P.",
        location: "Bloomington, IL",
        review:
            "Amazing workmanship and attention to detail. The crew was polite and completed the project ahead of schedule. Excellent job!",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-gray-50" id="testimonials">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    What Our Clients Say
                </h2>
                <p className="text-gray-600 mt-2 mb-12">
                    Real stories from our satisfied customers.
                </p>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Rating */}
                            <div className="flex justify-center mb-4">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="text-yellow-400 fill-yellow-400 w-5 h-5"
                                    />
                                ))}
                            </div>

                            {/* Review */}
                            <p className="text-gray-700 italic mb-4">“{t.review}”</p>

                            {/* Author */}
                            <div className="flex flex-col items-center">
                                <span className="font-semibold text-gray-900">{t.name}</span>
                                <span className="text-gray-500 text-sm">{t.location}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
