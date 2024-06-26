import { useState } from "react"
import { Link } from "react-router-dom"


const MobileNavLink = ({ to, children }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Link
            to={to}
            onClick={() => setIsOpen(!isOpen)}
            className="block text-black hover:bg-[#62ff00] px-3 py-2 hover:text-white rounded-md text-base font-medium z-[100000]"
        >
            {children}
        </Link>
    )
}

export default MobileNavLink;
