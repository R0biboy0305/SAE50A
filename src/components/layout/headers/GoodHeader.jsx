import {User, Search, UserCheck} from 'lucide-react';
import {GoodNavBtn} from "../../ui/btn/good-header-btn/GoodNavBtn.jsx";
import {useGame} from "../../../context/GameContext.jsx";
import {Link} from "react-router-dom";

export const GoodHeader =() => {
    const {user} = useGame();

    return (
        <header className={`bg-blue-600`}>
            <div className="flex flex-col items-center w-full px-8 py-6">
            <nav className={`flex justify-center items-center w-full`}>
                <ul className={`flex gap-5 justify-between`}>
                    <Link to={`/`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="h-8 w-auto">
                            <rect x="2" y="2" width="60" height="60" rx="12" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="2"/>
                            <path d="M18,20 V42 A10,10 0 0,0 38,42 V20" fill="none" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round"/>
                            <path d="M46,15 L46,49 L20,15" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="square"/>
                        </svg>
                    </Link>
                    <GoodNavBtn to={`/`}>Accueil</GoodNavBtn>
                    <GoodNavBtn to={`/#mission1`}>Mission 1</GoodNavBtn>
                    <GoodNavBtn to={`/#mission2`}>Mission 2</GoodNavBtn>
                    <GoodNavBtn to={`/search`}><Search color={'white'} size={22}/></GoodNavBtn>
                    <GoodNavBtn to={`/user`}>{user ? <UserCheck color={'white'} size={22}/> : <User/>}</GoodNavBtn>
                </ul>
            </nav>
            </div>
        </header>
    );
}