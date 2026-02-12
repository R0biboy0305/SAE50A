import { useState } from "react";
import { CheckCircle, Circle, ChevronDown, Award } from "lucide-react";
import { useGame} from "../../../context/GameContext.jsx";

export const GoodTaskList = ({ MissionRanking, MissionDescription, title }) => {

    const [isOpen, setIsOpen] = useState(false);

    const { completedMission } = useGame();

    const isCompleted = completedMission.includes(MissionRanking);

    return (
        <div
            className={`
                group mb-4 rounded-xl border transition-all duration-300 ease-in-out cursor-pointer hover:shadow-md
                ${isCompleted
                ? "bg-green-50 border-green-200" 
                : "bg-white border-gray-200 hover:border-blue-300" 
            }
            `}
            onClick={() => setIsOpen(!isOpen)}>
            <div className="flex items-center justify-between p-5">

                <div className="flex items-center gap-4">
                    <div className={`transition-transform duration-300 ${isCompleted ? "scale-110" : "group-hover:scale-105"}`}>
                        {isCompleted
                            ? <CheckCircle className="text-green-500 fill-green-100" size={28} />
                            : <Circle className="text-gray-300" size={28} />
                        }
                    </div>

                    <div>
                        <h3 className={`font-bold text-lg transition-colors ${isCompleted ? "text-green-800 decoration-green-500/50" : "text-gray-800"}`}>
                            {title || `Mission ${MissionRanking}`}
                        </h3>
                        <p className="text-xs font-medium uppercase tracking-wider mt-0.5">
                            {isCompleted
                                ? <span className="text-green-600">Complétée</span>
                                : <span className="text-gray-400">À faire</span>
                            }
                        </p>
                    </div>
                </div>

                <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? "bg-black/5 rotate-180" : "bg-transparent"}`}>
                    <ChevronDown size={20} className="text-gray-400" />
                </div>
            </div>

            <div
                className={`
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-5 pb-5 pt-0 ml-11">
                    <p className={`text-sm leading-relaxed ${isCompleted ? "text-green-700" : "text-gray-600"}`}>
                        {MissionDescription}
                    </p>

                    {isCompleted && (
                        <div className="mt-3 flex items-center gap-2 text-xs font-bold text-green-600 bg-white/50 w-fit px-3 py-1 rounded-full border border-green-200">
                            <Award size={14} />
                            Récompense débloquée
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};