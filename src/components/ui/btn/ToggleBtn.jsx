import {useState} from "react";

export const ToggleBtn = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    }

    return (
        <button onClick={handleToggle}
        className={`w-10 h-4 border-2 shadow rounded-full flex items-center ${isToggled ? 'bg-blue-300' : ''}`}>
            <div className={`p-2 rounded-full bg-blue-500 shadow w-fit ${isToggled ? 'translate-x-5' : ''}`}>
            </div>
        </button>
    )
}