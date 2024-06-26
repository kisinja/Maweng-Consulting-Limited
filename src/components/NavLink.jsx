import { Link } from 'react-router-dom'

const NavLink = ({ to, children }) => {
    return (
        <Link
            to={to}
            className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
        >
            {children}
        </Link>
    )
}

export default NavLink;