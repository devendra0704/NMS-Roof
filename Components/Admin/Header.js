export default function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow-sm sticky top-0 z-10">
            <h1 className="text-2xl text-gray-800 font-bold">Admin Dashboard</h1>
            <button className="bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200">Light Mode</button>
        </header>
    );
}
