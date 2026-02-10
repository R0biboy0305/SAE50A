import {User, Search, UserCheck} from 'lucide-react';
import logo from '../../../assets/user_nightmare_logo.jpg';
import {GoodNavBtn} from "../../ui/btn/good-header-btn/GoodNavBtn.jsx";
import {useGame} from "../../../context/GameContext.jsx";

export const GoodHeader =() => {
    const {user} = useGame();

    return (
        <header className={`bg-gray-200`}>
            <div className="flex flex-col items-center w-full px-8 py-6">
            <nav className={`flex justify-between items-center w-full`}>
                <ul className={`flex gap-5`}>
                    <GoodNavBtn to={`/`}>Accueil</GoodNavBtn>
                    <GoodNavBtn to={`/mission-1`}>Mission 1</GoodNavBtn>
                    <GoodNavBtn to={`/mission-2`}>Mission 2</GoodNavBtn>
                    <GoodNavBtn to={`/mission-3`}>Mission 3</GoodNavBtn>
                </ul>
                <ul className="flex gap-5">
                    <GoodNavBtn to={`/search`}><Search/></GoodNavBtn>
                    <GoodNavBtn to={`/user`}>{user ? <UserCheck/> : <User/>}</GoodNavBtn>
                </ul>
            </nav>
                <img className={`h-auto w-[150px]`} src={`${logo}`} alt='logo'/>
            </div>
        </header>
    );
}