import {Link, useLocation} from 'react-router-dom';

export const GoodNavBtn =({to, children, onClick}) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <li onClick={onClick} className={`relative group px-3 py-0 transition-colors duration-300 text-white  ${isActive ? "font-bold " : "text-gray-600 hover:text-white"}`}>
            <Link to={to}>{children}</Link>
            <span className={`
                    absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 ease-out
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                `}></span>
        </li>
    )
}