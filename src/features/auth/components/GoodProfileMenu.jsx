import { useState } from "react";
import { Menu, Sun, Mail, ChevronDown, User } from "lucide-react";
import { ToggleBtn } from "../../../components/ui/btn/ToggleBtn.jsx";
import { useGame } from "../../../context/GameContext.jsx";

export const GoodProfileMenu = () => {

    const {newsletterSubscribed = true, setNewsletterSubscribed, validateMission, invalidateMission} = useGame();

    const [showMenu, setShowMenu] = useState(false);

    const [openSubMenus, setOpenSubMenus] = useState({
        apparence: false,
        preferences: false
    });

    const handleNewsletterToggle = () => {
        const newState = !newsletterSubscribed;

        setNewsletterSubscribed(newState);

        if (newState === false){
            validateMission(2);
        }else{
            invalidateMission(2);
        }
    }

    const toggleSubMenu = (menuName) => {
        setOpenSubMenus(prev => ({
            ...prev,
            [menuName]: !prev[menuName]
        }));
    };

    return (
        <div className="relative">
            <button
                onClick={() => setShowMenu(!showMenu)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Menu size={24} className="text-gray-700"/>
            </button>

            {showMenu && (
                <div className="absolute left mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">

                    <div className="border-b border-gray-100">
                        <button
                            onClick={() => toggleSubMenu('apparence')}
                            className="w-full flex items-center justify-between p-4 hover:bg-blue-50 transition-colors">
                            <div className="flex items-center gap-3">
                                <Sun size={18} className="text-orange-500"/>
                                <span className="font-medium text-gray-700">Apparence</span>
                            </div>
                            <ChevronDown size={16} className={`text-gray-400 transition-transform ${openSubMenus.apparence ? 'rotate-180' : ''}`} />
                        </button>
                        {openSubMenus.apparence && (
                            <div className="bg-gray-50 p-4 space-y-3 text-sm animate-in slide-in-from-top-2">
                                <p className="text-gray-500">Thème sombre (Bientôt)</p>
                            </div>
                        )}
                    </div>

                    <div>
                        <button
                            onClick={() => toggleSubMenu('preferences')}
                            className="w-full flex items-center justify-between p-4 hover:bg-blue-50 transition-colors">
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-blue-500"/>
                                <span className="font-medium text-gray-700">Préférences</span>
                            </div>
                            <ChevronDown size={16} className={`text-gray-400 transition-transform ${openSubMenus.preferences ? 'rotate-180' : ''}`} />
                        </button>

                        {openSubMenus.preferences && (
                            <div className="bg-gray-50 p-4 space-y-4 animate-in slide-in-from-top-2">
                                <div className="flex items-center justify-between">
                                    <div className="text-sm">
                                        <p className="font-medium text-gray-700">Newsletter</p>
                                        <p className="text-xs text-gray-500">Recevoir les actus</p>
                                    </div>
                                    <ToggleBtn  isOn={newsletterSubscribed} onToggle={handleNewsletterToggle}/>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            )}
        </div>
    )
}

