import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useGame} from "../../context/GameContext.jsx";
import { AlertOctagon, HeartCrack, Frown } from "lucide-react";

export const BadSubscribe = () => {
    const navigate = useNavigate();

    const { isPremium, setIsPremium, validateMission, invalidateMission } = useGame();

    const [cancelStep, setCancelStep] = useState(0);

    const handleUpgrade = () => {
        setIsPremium(true);
        invalidateMission(3);
        navigate("/user");
    };

    const handleBailOut = () => {
        navigate("/");
    };

    const handleDowngradeAttempt = () => {
        if (cancelStep < 2) {
            setCancelStep(prev => prev + 1);
        } else {
            setIsPremium(false);
            validateMission(3);
            navigate("/error");
        }
    };

    return (

        <div className="h-screen flex flex-col items-center justify-center bg-yellow-200 p-4">


            {!isPremium && (
                <div className="bg-yellow-300 p-8 rounded border-4 border-yellow-500 shadow-[0_0_50px_rgba(234,179,8,0.8)] w-full max-w-lg text-center relative animate-pulse">

                    <h2 className="text-4xl font-black text-red-600 mb-2 uppercase">Alerte : Compte Limité !</h2>
                    <p className="text-gray-800 font-bold mb-6">
                        Votre expérience est actuellement bridée. Débloquez tout votre potentiel instantanément !
                    </p>

                    <button
                        onClick={handleUpgrade}
                        className="w-full bg-green-500 hover:bg-green-400 text-white font-black text-2xl py-6 rounded-lg shadow-2xl mb-4 transform hover:scale-105 transition-all">
                        DEVENIR PREMIUM (1 CLIC)
                    </button>

                    <p className="text-[10px] text-gray-400 mb-4">* En cliquant, vous acceptez d'être prélevé de 99,99€ par semaine jusqu'à la fin des temps.</p>

                    <button
                        onClick={handleBailOut}
                        className="text-[11px] text-gray-300 underline mt-4 hover:text-gray-500">
                        Non merci, je préfère rester médiocre et supporter des publicités ennuyeuses toute ma vie.
                    </button>
                </div>
            )}

            {isPremium && (
                <div className="bg-yellow-300 p-8 border border-yellow-500 border-8 shadow-xl w-full max-w-xl text-center">

                    {cancelStep === 0 && (
                        <>
                            <AlertOctagon size={64} className="text-red-500 mx-auto mb-4" />
                            <h2 className="text-xl font-bold mb-4">Êtes-vous sûr de vouloir nous quitter ?</h2>
                            <p className="text-sm text-gray-600 mb-8">Vous perdrez tous vos avantages exclusifs et votre statut social baissera.</p>

                            <div className="flex flex-col gap-3">
                                <button onClick={handleBailOut} className="w-full bg-red-600 text-white font-bold py-3 rounded hover:bg-red-700 transition">
                                    ANNULER LA RÉSILIATION
                                </button>
                                <button onClick={handleDowngradeAttempt} className="text-yellow-400 text-xs hover:underline mt-2">
                                    Continuer vers la résiliation
                                </button>
                            </div>
                        </>
                    )}

                    {cancelStep === 1 && (
                        <>
                            <HeartCrack size={64} className="text-red-400 mx-auto mb-4" />
                            <h2 className="text-xl text-green-500 font-bold mb-4">Ça nous brise le cœur...</h2>
                            <p className="text-sm text-pink-500 mb-8">
                                Jean-Michel de la comptabilité va être licencié si vous partez. Êtes-vous vraiment sans cœur ?
                            </p>

                            <div className="flex flex-col gap-3">
                                <button onClick={handleBailOut} className="w-full bg-green-500 text-white font-bold py-4 text-lg rounded shadow-lg hover:bg-green-600 transition">
                                    J'AI CHANGÉ D'AVIS, JE RESTE !
                                </button>
                                <button onClick={handleDowngradeAttempt} className="text-yellow-400 text-[10px] hover:text-yellow-600 hover:underline mt-2">
                                    Oui, renvoyez.
                                </button>
                            </div>
                        </>
                    )}

                    {cancelStep === 2 && (
                        <>
                            <Frown size={64} className="text-blue-500 mx-auto mb-4" />
                            <h2 className="text-lg font-bold mb-4 text-red-500">Dernière confirmation (Étape 3/9)</h2>

                            <div className="flex items-start gap-2 text-left bg-pink-400 p-3 border border-blue-600 mb-6 text-xs text-blue-600">
                                <input type="checkbox" className="mt-1" />
                                <label>
                                    Je reconnais que je fais une terrible erreur et que je ne pourrai pas poursuivre le site en justice pour ma propre tristesse.
                                </label>
                            </div>

                            <div className="flex gap-2">
                                <button onClick={handleBailOut} className="flex-1 bg-green-500 text-white font-bold py-2 rounded hover:bg-green-600 transition">
                                    Sauvez-moi !
                                </button>
                                <button onClick={handleDowngradeAttempt} className="flex-1 border border-gray-300 text-gray-500 font-bold py-2 rounded bg-gray-100 hover:bg-gray-200 transition">
                                    Résilier définitivement
                                </button>
                            </div>
                        </>
                    )}

                </div>
            )}
        </div>
    );
};