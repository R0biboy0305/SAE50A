import {useGame} from "../../context/GameContext.jsx";
import {GoodMission1} from "./GoodMission1/GoodMission1.jsx";
import {BadMission1} from "./BadMission1/BadMission1.jsx";

export const Mission1 = () => {
    const{isNightMare} = useGame();

    return (
        <>
        {isNightMare
            ? <BadMission1/>
            : <GoodMission1/> }
        </>
    )
}