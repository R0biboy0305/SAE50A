import {createContext, useState, useContext} from "react";

const GameContext = createContext();

export const GameProvider = ({children}) => {

    const [isNightMare, setIsNightMare] = useState(true);

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
        <GameContext.Provider value={{isNightMare, toggleMode}}>
            {children}
        </GameContext.Provider>
    )
}

export const useGame = () => useContext(GameContext);