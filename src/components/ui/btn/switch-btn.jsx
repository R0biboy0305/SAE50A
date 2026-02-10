import {useGame} from "../../../context/GameContext.jsx";

export const SwitchBtn = () => {

    const {isNightMare, toggleMode} = useGame();

    return (
<button onClick={toggleMode} className={`fixed bottom-[300px] right-4 px-4 py-2 rounded 
            ${isNightMare ? 
                'bg-gray-700 text-white'
                : 'bg-gray-300 text-gray-900'} 
                transition-colors duration-300`}>
                {isNightMare ?
                    'Switch to Good UX'
                    : 'Switch to Nightmare'}
</button>
    )
}