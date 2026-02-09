import {User, Search} from 'lucide-react';
import logo from '../../../assets/user_nightmare_logo.jpg';
import {Link} from "react-router-dom";

export const GoodHeader =() => {
    return (
        <header className={`bg-gray-200`}>
            <nav className={`flex justify-between items-center px-[100px] py-8`}>
                <img className={`h-auto w-[150px] rounded-2xl`} src={`${logo}`} alt='logo'/>
                <ul className={`flex gap-5`}>
                    <li className={`hover:bg-gray-300 px-4 py-2 rounded-2xl duration-300 ease`}><Link to={`/`}>Accueil</Link></li>
                    <li className={`hover:bg-gray-300 px-4 py-2 rounded-2xl duration-300 ease`}><Link to={`/mission-1`}>Mission 1</Link></li>
                    <li className={`hover:bg-gray-300 px-4 py-2 rounded-2xl duration-300 ease`}><Link to={``}>Mission 2</Link></li>
                    <li className={`hover:bg-gray-300 px-4 py-2 rounded-2xl duration-300 ease`}><Link to={``}>Mission 3</Link></li>
                    <li className={`hover:bg-gray-300 px-4 py-2 rounded-2xl duration-300 ease`}><Link to={`#`}><User/></Link></li>
                    <li className={`hover:bg-gray-300 px-4 py-2 rounded-2xl duration-300 ease`}><Link to={`#`}><Search/></Link></li>
                </ul>
            </nav>
        </header>
    );
}