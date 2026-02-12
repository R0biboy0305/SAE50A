import { useGame } from "../../context/GameContext.jsx";
import { GoodProfile } from "../../features/auth/components/GoodProfile.jsx";
import { GoodLogin } from "../../features/auth/components/GoodLogin.jsx";
export const GoodUserPage = () => {
    const { user } = useGame();
    return (
        <div>
            {user ? <GoodProfile /> : <GoodLogin />}
        </div>
    )
}
