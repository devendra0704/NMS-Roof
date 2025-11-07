import { Package, MessageSquare, Star } from "lucide-react";

export default function DashboardStats() {
    const stats = [
        { icon: Package, title: "Total Products", value: "5" },
        { icon: MessageSquare, title: "Total Inquiries", value: "0" },
        { icon: MessageSquare, title: "New Inquiries", value: "0" },
        { icon: Star, title: "Featured Products", value: "3" },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {stats.map(({ icon: Icon, title, value }) => (
                <div
                    key={title}
                    className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4 hover:shadow-md transition hover:border-[#d95c3a] hover:border "
                >
                    <Icon className="w-6 h-6 text-[#d95c3a]" />
                    <div>
                        <p className="text-gray-600 text-sm">{title}</p>
                        <p className="text-xl font-semibold">{value}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
