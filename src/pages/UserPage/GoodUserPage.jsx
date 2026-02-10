import {useGame} from "../../context/GameContext.jsx";
import {GoodProfile} from "./components/GoodProfile.jsx";
import {GoodLogin} from "./components/GoodLogin.jsx";


export const GoodUserPage = () => {
    const {user} = useGame();

    return (
        <div>
            {user ? <GoodProfile/> : <GoodLogin/>}
        </div>
    )
}