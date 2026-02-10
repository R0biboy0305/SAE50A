import {Link, useLocation} from 'react-router-dom';

export const GoodNavBtn =({to, children}) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <li className=
                {`hover:bg-gray-300 px-3 py-1 rounded-md duration-300 ease ${isActive ? 'bg-gray-300' : ''}`}>
            <Link to={to}>{children}</Link>
        </li>
    )
}