
const NavBar = () => {
    return (
        <nav className="bg-white sticky top-0">
            <div className="logo">
                <h1 className="font-bold text-3xl">Logo</h1>
            </div>
            <div className="col-2-nav">
                <ul>
                    <li><a href="/" className="roboto-regular text-lg">Home</a></li>
                    <li><a href="/about" className="roboto-regular text-lg">About</a></li>
                    <li><a href="/portfolio" className="roboto-regular text-lg">Portfolio</a></li>
                    <li><a href="/gallery" className="roboto-regular text-lg">Gallery</a></li>
                    <li><a href="/contact" className="roboto-regular text-lg">Contact</a></li>
                </ul>

                <div className="get-app">
                    <a href="/" className="get-app-btn">Get App</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;