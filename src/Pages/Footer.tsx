import { Link } from "react-router-dom";
import { NavLinks } from "../Components/NavComp/NavFucn";

export const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-5">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3  text-center gap-8">
                {/* Logo and Description */}
                <div>
                    <h2 className="text-2xl font-bold">Punch 9ja</h2>
                    <p className="mt-2 text-gray-400">
                        At Punch 9ja we gathers, investigates, and presents news and current events through various media platforms.
                    </p>
                  
                </div>
                
                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold text-red-500">Categories</h3>
                    <ul className="mt-2 space-y-2">
                        {NavLinks.map((link) => (
                            <li key={link.to}>
                                <Link to={link.to} className="hover:text-red-500 duration-300">{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Contact and Policies */}
                <div>
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="mt-2 space-y-2">
                        {/* <li><Link to="/about" className="hover:text-red-500 duration-300">About us</Link></li> */}
                        <li><Link to="/contact" className="hover:text-red-500 duration-300">Contact</Link></li>
                        <li><Link to="/privacy-policy" className="hover:text-red-500 duration-300">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-red-500 duration-300">Terms of Use</Link></li>
                        <li><Link to="/disclaimer" className="hover:text-red-500 duration-300">Disclaimer</Link></li>
                    </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-8 border-t gap-2 flex flex-col border-gray-700 pt-4 text-gray-400 text-sm">
                <p>Copyright © {new Date().getFullYear()} Punch 9ja. All rights reserved.</p>
            </div>
        </footer>
    );
};
