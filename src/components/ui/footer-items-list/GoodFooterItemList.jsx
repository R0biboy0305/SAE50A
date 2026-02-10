import {Link} from "react-router-dom";

export const GoodFooterItem = ({to, children, isNavLink}) => {

    return (
        <li className={`text-black font-normal ${isNavLink ? 
            'text-xs hover:underline'
            : 'text-xs py-1 px-2 hover:bg-gray-200 hover:rounded-2xl'}`}>
            <Link to={to}>{children}</Link>
        </li>
        )
}