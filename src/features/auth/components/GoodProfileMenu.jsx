import {useState} from "react";
import {Menu, Sun, Mail, ChevronDown, User, LucideBadgeCheck} from "lucide-react";
import {ToggleBtn} from "../../../components/ui/Button/ToggleBtn.jsx";
import {useGame} from "../../../context/GameContext.jsx";
import {GoodSubscribe} from "./GoodSubscribe.jsx";

export const GoodProfileMenu = () => {

    const {newsletterSubscribed, setNewsletterSubscribed, validateMission, invalidateMission, isPremium, setIsPremium} = useGame();

    const [openSubMenus, setOpenSubMenus] = useState({
        apparence: false,
        preferences: false,
        abonnements: false
    });

    const handleSubscribe = () =>{
        const newPremiumState = !isPremium;
        setIsPremium(newPremiumState);

        if(newPremiumState === false){
            validateMission(3);
        } else {
            invalidateMission(3);
        }
    }

    const handleNewsletterToggle = () => {
        const newState = !newsletterSubscribed;

        setNewsletterSubscribed(newState);

        if (newState === false) {
            validateMission(2);
        } else {
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
        <div
            className="absolute left mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">

            <div className="border-b border-gray-100">
                <button
                    onClick={() => toggleSubMenu('apparence')}
                    className="w-full flex items-center justify-between p-4 hover:bg-blue-50 transition-colors">
                    <div className="flex items-center gap-3">
                        <Sun size={18} className="text-orange-500"/>
                        <span className="font-medium text-gray-700">Apparence</span>
                    </div>
                    <ChevronDown size={16}
                                 className={`text-gray-400 transition-transform ${openSubMenus.apparence ? 'rotate-180' : ''}`}/>
                </button>
                {openSubMenus.apparence && (
                    <div className="bg-gray-50 p-4 space-y-3 text-sm animate-in slide-in-from-top-2">
                        <p className="text-gray-500">Thème sombre (Bientôt)</p>
                    </div>
                )}
            </div>

            <div className="border-b border-gray-100">
                <button
                    onClick={() => toggleSubMenu('preferences')}
                    className="w-full flex items-center justify-between p-4 hover:bg-blue-50 transition-colors">
                    <div className="flex items-center gap-3">
                        <Mail size={18} className="text-blue-500"/>
                        <span className="font-medium text-gray-700">Préférences</span>
                    </div>
                    <ChevronDown size={16}
                                 className={`text-gray-400 transition-transform ${openSubMenus.preferences ? 'rotate-180' : ''}`}/>
                </button>

                {openSubMenus.preferences && (
                    <div className="bg-gray-50 p-4 space-y-4 animate-in slide-in-from-top-2">
                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <p className="font-medium text-gray-700">Newsletter</p>
                                <p className="text-xs text-gray-500">Recevoir les actus</p>
                            </div>
                            <ToggleBtn isOn={newsletterSubscribed} onToggle={handleNewsletterToggle}/>
                        </div>
                    </div>
                )}
            </div>

            <div className="relative">
                <button onClick={()=> toggleSubMenu('abonnements')}
                        className="w-full flex items-center justify-between p-4 hover:bg-blue-50 transition-colors">
                    <div className="flex items-center gap-3">
                        <LucideBadgeCheck size={18} color={'blue'}></LucideBadgeCheck>
                        <span className="font-medium text-gray-700">Abonnement</span>
                    </div>
                    <ChevronDown size={16}
                                 className={`text-gray-400 transition-transform  ${openSubMenus.abonnements ? 'rotate-90' : '-rotate-90'}`}/>
                </button>
                    {openSubMenus.abonnements && (
                        <GoodSubscribe isActive={isPremium} toggleSubscribe={handleSubscribe} onClose={()=>toggleSubMenu('abonnements')}/>
                        )}
            </div>

        </div>
    )
}

