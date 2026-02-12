import { useGame } from "../../context/GameContext.jsx";
import { GoodUserPage } from "./GoodUserPage.jsx";
import { BadUserPage } from "./BadUserPage.jsx";

export const UserPage = () => {
    const { isNightMare } = useGame();
    return (
        <div>
            {isNightMare ? <BadUserPage /> : <GoodUserPage />}
        </div>
    )
}

