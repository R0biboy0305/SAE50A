
export const ToggleBtn = ({isOn, onToggle}) => {
    return (
        <button onClick={onToggle}
        className={`w-10 h-4 border-2 shadow rounded-full flex items-center transition-color ease duration-200 ${isOn ? 'bg-blue-300' : ''}`}>
            <div className={`p-2 rounded-full bg-blue-500 shadow w-fit transition-transform ease duration-200 ${isOn ? 'translate-x-5' : ''}`}>
            </div>
        </button>
    )
}