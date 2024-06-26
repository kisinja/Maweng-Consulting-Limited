import { Link } from 'react-router-dom'

const NavLink = ({ to, children }) => {
    return (
        <Link
            to={to}
            className="text-black hover:bg-[#62ff00] px-3 py-2 hover:text-white rounded-md text-lg "
        >
            {children}
        </Link>
    )
}

export default NavLink;