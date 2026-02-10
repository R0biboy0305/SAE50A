import {useState} from "react";
import {ChevronDown} from "lucide-react";

export const GoodTaskList = ({MissionRanking, MissionDescription}) => {

    const [isActivate, setIsActivate] = useState(false);

    const clickHandler = () => {
        setIsActivate(!isActivate);
    }
    return (
       <div className={`flex flex-col justify-center ${isActivate ? 'duration-500 ease mb-4' : 'duration-500 ease mb-0'}`}>
           <div className={`w-full mx-auto bg-gray-300 flex justify-between p-4 ${isActivate ? 'rounded-t-2xl duration-200 ease' : 'duration-200 ease rounded-2xl'}`} onClick={clickHandler}>
               <h3 className="font-bold text-xl">Mission n°{MissionRanking}</h3>
               <ChevronDown className={`duration-500 ease ${isActivate ? 'rotate-180' : ''}`} />
           </div>
           <div className={`p-4 bg-gray-300 rounded-b-2xl ${isActivate ? "max-h-40 opacity-100 duration-200 ease " : "max-h-0 duration-200 ease opacity-0"}`}>
               <p>{MissionDescription}</p>
           </div>
       </div>
    )
}