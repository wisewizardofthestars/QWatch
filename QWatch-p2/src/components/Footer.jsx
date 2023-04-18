import Link from 'next/link';

export default function Footer() {
    return (
    <footer className="bg-gray-900 text-white py-10 px-6">
        <div className="flex justify-between items-center mb-8">
            <div>
                <Link href="/" className="text-3xl font-bold text-indigo-500">QWatch</Link>
                <p className="text-gray-600">Made with ❤️ by Roadtrip To Coimbra</p>
            </div>
            <div>
                <ul className="flex space-x-6">
                    <li><Link href="#"><i className="fab fa-facebook fa-lg"></i></Link></li>
                    <li><Link href="#"><i className="fab fa-twitter fa-lg"></i></Link></li>
                    <li><Link href="#"><i className="fab fa-instagram fa-lg"></i></Link></li>
                </ul>
            </div>
        </div>
        <p className="text-gray-600 text-center">© 2023 QWatch. All rights reserved.</p>
    </footer>
    );
}