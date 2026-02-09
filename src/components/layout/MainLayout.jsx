import {useGame} from "../../context/GameContext.jsx";
import { Outlet } from 'react-router-dom';
import {GoodHeader} from './headers/GoodHeader.jsx'
import {BadHeader} from './headers/BadHeader.jsx'

export const MainLayout = () => {
    const {isNightMare, toggleMode} = useGame();

    return (
        <div className={`min-h-screen transition-colors duration-500 
        ${isNightMare 
            ? 'bg-gray-900 text-white' 
            : 'bg-gray-100 text-gray-900'}`}>
            {isNightMare ? <BadHeader /> : <GoodHeader />}
            <main className={`container mx-auto px-4 py-8`}>
                <Outlet />
            </main>

            <button onClick={toggleMode} className={`fixed bottom-4 right-4 px-4 py-2 rounded 
            ${isNightMare ? 'bg-gray-700 text-white'
                : 'bg-gray-300 text-gray-900'} 
                transition-colors duration-300`}>
                {isNightMare ? 'Switch to Day Mode' : 'Switch to Night Mode'}
            </button>
        </div>
    );
}

