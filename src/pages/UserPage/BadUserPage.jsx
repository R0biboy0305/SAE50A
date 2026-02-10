import {useGame} from "../../context/GameContext.jsx";
import {BadLogin} from "./components/BadLogin.jsx";
import {BadProfile} from "./components/BadProfile.jsx";

export const BadUserPage = () => {
    const {user} = useGame();

    return (
        <div>
            {user ? <BadProfile/> : <BadLogin/>}
        </div>
    )
}