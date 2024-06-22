import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        const links = document.getElementById("nav-links");
        links.forEach((link) => {
            link.classList.toggle("underline");
        });
        setIsActive(!isActive);
    };

    return (
        <nav className="bg-white sticky top-0">
            <div className="logo">
                <Link to="/">
                    <h1 className="font-bold text-2xl text-black"><span>MAWENG</span> <span className="text-green-600">CONSULTING</span></h1>
                </Link>
            </div>
            <div className="col-2-nav">
                <ul>
                    <li><a href="/" className={`roboto-regular text-lg ${isActive ? 'underline' : ''}`} id="nav-links" onClick={handleClick}>Home</a></li>
                    <li><a href="/about" className={`roboto-regular text-lg ${isActive ? 'underline' : ''}`} id="nav-links" onClick={handleClick}>About</a></li>
                    <li><a href="/portfolio" className={`roboto-regular text-lg ${isActive ? 'underline' : ''}`} id="nav-links" onClick={handleClick}>Portfolio</a></li>
                    <li><a href="/gallery" className={`roboto-regular text-lg ${isActive ? 'underline' : ''}`} id="nav-links" onClick={handleClick}>Gallery</a></li>
                    <li><a href="#contact" className={`roboto-regular text-lg ${isActive ? 'underline' : ''}`} id="nav-links" onClick={handleClick}>Contact</a></li>
                </ul>

                <div className="get-app">
                    <a href="/" className="get-app-btn">Get App</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;