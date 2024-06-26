import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    const [isActive, setIsActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        const links = document.getElementById("nav-links");
        links.forEach((link) => {
            link.classList.toggle("underline");
        });
        setIsActive(!isActive);
    };

    return (
        <nav className="bg-white sticky top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between w-full h-16">
                    <div className="flex-shrink-0">
                        <Link to="/">
                            <h1 className="font-bold text-2xl text-black">
                                <span>MAWENG</span> <span className="text-green-600">CONSULTING</span>
                            </h1>
                        </Link>
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        <ul className="flex space-x-4">
                            <li><a href="/" className={`roboto-regular text-lg ${isActive ? 'underline' : ''}`} id="nav-links" onClick={handleClick}>Home</a></li>
                            <li><a href="/about" className={`roboto-regular text-lg ${isActive ? 'underline' : ''}`} id="nav-links" onClick={handleClick}>About</a></li>
                            <li><a href="/portfolio" className={`roboto-regular text-lg ${isActive ? 'underline' : ''}`} id="nav-links" onClick={handleClick}>Portfolio</a></li>
                            <li><a href="/gallery" className={`roboto-regular text-lg ${isActive ? 'underline' : ''}`} id="nav-links" onClick={handleClick}>Gallery</a></li>
                            <li><a href="#contact" className={`roboto-regular text-lg ${isActive ? 'underline' : ''}`} id="nav-links" onClick={handleClick}>Contact</a></li>
                            <li><a href="#faqs" className={`roboto-regular text-lg ${isActive ? 'underline' : ''}`} id="nav-links" onClick={handleClick}>FAQ{"'"}s</a></li>
                        </ul>
                        <div className="ml-4">
                            <a href="/" className="get-app-btn">Get App</a>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-black hover:text-green-600 focus:outline-none focus:text-green-600">
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4 5h16M4 12h16m-7 7h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <ul className="space-y-4 px-2 pt-2 pb-3">
                        <li><a href="/" className={`roboto-regular text-lg block ${isActive ? 'underline' : ''}`} id="nav-links" onClick={handleClick}>Home</a></li>
                        <li><a href="/about" className={`roboto-regular text-lg block ${isActive ? 'underline' : ''}`} id="nav-links" onClick={handleClick}>About</a></li>
                        <li><a href="/portfolio" className={`roboto-regular text-lg block ${isActive ? 'underline' : ''}`} id="nav-links" onClick={handleClick}>Portfolio</a></li>
                        <li><a href="/gallery" className={`roboto-regular text-lg block ${isActive ? 'underline' : ''}`} id="nav-links" onClick={handleClick}>Gallery</a></li>
                        <li><a href="#contact" className={`roboto-regular text-lg block ${isActive ? 'underline' : ''}`} id="nav-links" onClick={handleClick}>Contact</a></li>
                        <li><a href="/" className="get-app-btn block">Get App</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;