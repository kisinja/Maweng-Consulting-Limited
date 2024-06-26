// components/Navbar.js

import { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import MobileNavLink from './MobileNavLink';
import NavLink from './NavLink';

const Navbar = () => {
    var [isOpen, setIsOpen] = useState(false);

    var toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white py-[20px] px-[5%] sticky top-0 z-[100000]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/" className="text-black text-xl font-bold">
                            MAWENG CONSULTING
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                        <NavLink to="/gallery">Gallery</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="#faq">FAQ{"'"}s</NavLink>
                        <NavLink to="/book-appointment">Book Appointment</NavLink>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleNavbar}
                            className="text-white focus:outline-none focus:text-white"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="black"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-2">
                        <MobileNavLink to="/">Home</MobileNavLink>
                        <MobileNavLink to="/about">About</MobileNavLink>
                        <MobileNavLink to="/portfolio">Portfolio</MobileNavLink>
                        <MobileNavLink to="/gallery">Gallery</MobileNavLink>
                        <MobileNavLink to="/contact">Contact</MobileNavLink>
                        <MobileNavLink to="/book-appointment">Book Appointment</MobileNavLink>
                        <MobileNavLink to="/faq">FAQ{"'"}s</MobileNavLink>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;