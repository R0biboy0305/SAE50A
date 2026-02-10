import {createContext, useState, useContext, useEffect} from "react";
import { useNavigate } from 'react-router-dom';

const GameContext = createContext();


export const GameProvider = ({children}) => {
    const navigate = useNavigate();

    const [isNightMare, setIsNightMare] = useState(true);

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    const login = (userData) => setUser(userData);

    const logout = () => {
        setUser(null);

        localStorage.removeItem("user");
        navigate("/user");
    }

    const toggleMode = () =>{
        setIsNightMare((prevState) => !prevState);

        document.body.style.transition = 'background 0.5s ease';
        if(!isNightMare){
            document.body.classList.add('nightMare')
        }else{
            document.body.classList.remove('nightMare')
        }
    }

    return (
        <GameContext.Provider value={{isNightMare, toggleMode, user, login, logout}}>
            {children}
        </GameContext.Provider>
    )
}

export const useGame = () => useContext(GameContext);