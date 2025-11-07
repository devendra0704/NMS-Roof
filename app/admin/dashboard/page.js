import AdminTabs from "@/Components/Admin/AdminTabs";
import DashboardStats from "@/Components/Admin/DashboardStats";

export default function AdminPage() {
    return (
        <div className="p-6 bg-gray-100 h-full w-full">
            <DashboardStats />
            <AdminTabs />
        </div>
    );
}