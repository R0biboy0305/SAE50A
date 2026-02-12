import { useGame } from "../../context/GameContext.jsx";
import { BadLogin } from "../../features/auth/components/BadLogin.jsx";
import { BadProfile } from "../../features/auth/components/BadProfile.jsx";

export const BadUserPage = () => {
    const { user } = useGame();

    return (
        <div className="bg-gradient-to-b from-yellow-400 to-red-500 m-0 p-0">
            {user ? <BadProfile /> : <BadLogin />}
        </div>
    )
}

