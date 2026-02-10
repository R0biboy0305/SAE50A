import {useGame} from "../../../context/GameContext.jsx";

export const GoodProfile = () => {
    const {user, logout} = useGame();


    return(
        <div className="flex flex-col gap-4">
            <h1>Profil de {user.pseudo}</h1>
            <button onClick={logout}>Se déconnecter</button>
        </div>
    )
}