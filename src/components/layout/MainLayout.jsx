import {useGame} from "../../context/GameContext.jsx";
import { Outlet } from 'react-router-dom';
import {GoodHeader} from './Header/GoodHeader.jsx'
import {BadHeader} from './Header/BadHeader.jsx'
import {SwitchBtn} from '../ui/Button/switch-btn.jsx';
import {BadFooter} from "./Footer/BadFooter.jsx";
import {GoodFooter} from "./Footer/GoodFooter.jsx";

export const MainLayout = () => {
    const {isNightMare, toggleMode} = useGame();

    return (
        <div className={`min-h-screen flex flex-col transition duration-500 
        ${isNightMare 
            ? 'bg-gray-900 text-white' 
            : 'text-gray-900 bg-gradient-to-b from-white to-gray-200 duration-500 ease'}`}>
            {isNightMare ? <BadHeader /> : <GoodHeader />}
            <main className=" w-full mx-auto px-4 py-8 flex-grow">
                <Outlet />
            </main>
            <SwitchBtn isNightMare={isNightMare} toggleMode={toggleMode} />
            {isNightMare ? <BadFooter /> : <GoodFooter />}
        </div>
    );
}
