import { useGame } from "../../context/GameContext.jsx";
import { GoodHomePage } from "./GoodHomePage.jsx";
import { BadHomePage } from "./BadHomePage.jsx";

export const HomePage = () => {
    const { isNightMare } = useGame();

    return (
        <>
            {isNightMare
                ? <BadHomePage />
                : <GoodHomePage />}
        </>
    )
}

