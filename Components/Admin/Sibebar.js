import { House, LayoutDashboard, LogOut } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-200 border-r border-gray-300 flex flex-col justify-between h-screen fixed left-0 top-0">
            <div>
                <div className="flex items-center gap-2 px-6 py-4 mt-2">
                    <House className="w-8 h-8 text-[#d95c3a]" />
                    <span className="font-semibold text-xl">NLM Roofing</span>
                </div>
                <nav className="flex flex-col px-4 py-4 space-y-2">
                    <Link href="/admin" className="flex items-center gap-2 p-2 rounded-md text-white font-semibold bg-[#d95c3a]">
                        <LayoutDashboard size={20} />
                        Dashboard
                    </Link>
                </nav>
            </div>
            <div className="px-6 py-8 ">
                <button className="flex font-semibold items-center gap-2 text-gray-700 hover:text-[#d95c3a]">
                    <LogOut size={20} />
                    Logout
                </button>
            </div>
        </aside>
    );
}
