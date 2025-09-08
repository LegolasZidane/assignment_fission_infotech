import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Clients", href: "#clients" },
    { name: "About", href: "#about" },
    { name: "Knowledge", href: "#knowledge" },
];

export default function Navbar() {

    const [ isOpen, setIsOpen ] = useState(false);
    const [ isDark, setIsDark ] = useState(false);
    const [ mounted, setMounted ] = useState(false);

    useEffect(() => {

        setMounted(true);
        if( typeof window !== "undefined" ){

            if( localStorage.theme === "dark" ){

                document.documentElement.classList.add("dark");
                setIsDark(true);

            } else {
                
                document.documentElement.classList.remove("dark");
                setIsDark(false);

            }
        }
    }, []);

    const toggleTheme = () => {

        setIsDark((prev) => {

            const newTheme = !prev;
            if( typeof window !== "undefined" ){

                if( newTheme ){

                    document.documentElement.classList.add("dark");
                    localStorage.theme = "dark";

                }   else{

                    document.documentElement.classList.remove("dark");
                    localStorage.theme = "light";

                }
            }
            return newTheme;
        });
    };

    if( !mounted ) return null;

    return (

        <nav className="fixed top-0 left-0 w-full bg-white text-black shadow border-b border-black dark:border-white z-50">
        
            <div className="max-w-7xl mx-auto flex items-center justify-between px-14 py-4">
                {/* Logo */}
                <div className="text-2xl font-bold tracking-wide">leo9</div>

                <ul className="hidden md:flex gap-6 font-medium text-sm items-center">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a 
                                href={link.href} 
                                className="hover:text-gray-700 dark:hover:text-gray-300 transition"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}

                    <li>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        >
                            { isDark ? <Moon size={20} /> : <Sun size={20} /> }
                        </button>
                    </li>

                    <li>
                        <a 
                            href="#contact" 
                            className="bg-black text-white px-12 py-3.5 rounded text-sm font-bold transition"
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                <button
                    className="md:hidden text-gray-700 dark:text-gray-200"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    { isOpen ? <X size={28} /> : <Menu size={28} /> }
                </button>
            </div>

            { isOpen && (
                <ul className="flex flex-col items-center gap-6 py-6 px-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 md:hidden">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a 
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="hover:text-gray-700 dark:hover:text-gray-300 transition"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}

                    <li>
                        <button
                            onClick={() => {
                                toggleTheme();
                                setIsOpen(false);
                            }}
                            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        >
                            { isDark ? <Sun size={20} /> : <Moon size={20} /> }
                        </button>
                    </li>

                    <li>
                        <a 
                            href="#contact"
                            className="bg-black text-white px-10 py-3 rounded text-sm font-bold hover:bg-gray-800 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
}