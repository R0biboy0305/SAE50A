import {useGame} from "../../context/GameContext.jsx";
import {BadLogin} from "./components/BadLogin.jsx";
import {BadProfile} from "./components/BadProfile.jsx";

export const BadUserPage = () => {
    const {user} = useGame();

    return (
        <div className="bg-gradient-to-b from-yellow-400 to-red-500">
            {user ? <BadProfile/> : <BadLogin/>}
        </div>
    )
}