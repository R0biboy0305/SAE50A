import {useGame} from "../context/GameContext.jsx";

export const Mission1 = () => {
    const{isNightMare} = useGame();

    return (
        <div className={`${isNightMare ? 'text-gray-800'  :'text-black flex flex-col gap-2 mx-auto' }`}>
            <h2 className={`text-4xl font-bold`}>Mission 1</h2>
            <p>Bienvenue dans la premiere mission qui vous est confiée</p>
            <p>Commencez par basculer dans le mode <span className={`${isNightMare ? 'text-xs' : ''}`}>NightMare</span> et tentez de vous désabonnez de la newsletter</p>
        </div>
    )
}