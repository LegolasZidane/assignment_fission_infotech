import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

    const [ isOpen, setIsOpen ] = useState(false);

    return (

        <nav className="fixed top-0 left-0 w-full bg-white shadow border-b border-black z-50">
        
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 py-4">

                <div className="text-2xl font-bold tracking-wide">Leo</div>

                <ul className="hidden md:flex gap-8 text-black font-medium">
                    <li><a href="#work" className="hover:text-gray-700">Work</a></li>
                    <li><a href="#services" className="hover:text-gray-700">Services</a></li>
                    <li><a href="#clients" className="hover:text-gray-700">Clients</a></li>
                    <li><a href="#about" className="hover:text-gray-700">About</a></li>
                    <li><a href="#knowledge" className="hover:text-gray-700">Knowledge</a></li>
                    <li>
                        <a 
                            href="#contact" 
                            className="bg-black text-white px-10 py-3 rounded text-sm font-bold transition"
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    { isOpen ? <X size={28} /> : <Menu size={28} /> }
                </button>
            </div>

            { isOpen && (
                <ul className="flex flex-col items-center gap-6 py-6 bg-white border-t border-gray-200 md:hidden">
                    <li><a href="#work" onClick={() => setIsOpen(false)}>Work</a></li>
                    <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
                    <li><a href="#clients" onClick={() => setIsOpen(false)}>Clients</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                    <li><a href="#knowledge" onClick={() => setIsOpen(false)}>Knowledge</a></li>
                    <li>
                        <a 
                            href="#contact"
                            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            ) }
        </nav>
    );
}