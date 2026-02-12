import {useState} from "react";

export const ToggleBtn = ({isOn, onToggle}) => {
    return (
        <button onClick={onToggle}
        className={`w-10 h-4 border-2 shadow rounded-full flex items-center ${isOn ? 'bg-blue-300' : ''}`}>
            <div className={`p-2 rounded-full bg-blue-500 shadow w-fit ${isOn ? 'translate-x-5' : ''}`}>
            </div>
        </button>
    )
}