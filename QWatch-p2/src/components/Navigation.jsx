import Link from 'next/link';

export default function Navigation() {
    return (
    <nav className="flex justify-between items-center bg-white py-4 px-6 shadow-md">
        <div>
            <Link href="/" className="text-3xl font-bold text-indigo-500">QWatch</Link>
        </div>
        <div>
            <ul className="flex space-x-6 text-gray-600 ">
                <li><Link href="/" className="hover:text-black hover:font-bold">Home</Link></li>
                <li><Link href="/canteens" className="hover:text-black hover:font-bold">Canteens</Link></li>
                <li><Link href="/study" className="hover:text-black hover:font-bold">Study Rooms</Link></li>
                <li><Link href="/profile" className="hover:text-black hover:font-bold">My Profile</Link></li>
                <li><Link href="/contacts" className="hover:text-black hover:font-bold" >About</Link></li>
            </ul>
        </div>
    </nav>
    );
};
