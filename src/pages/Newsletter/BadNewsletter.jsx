import { useState } from "react";
import { Save, ThumbsDown, ThumbsUp } from "lucide-react";
import { useGame } from "../../context/GameContext.jsx";

export const BadNewsletter = () => {
    const [newsletter, setNewsletter] = useState();
    const {validateMission, invalidateMission} = useGame();

    const handleSave = () => {
        if(newsletter){
            alert("Vos préférences ont été (peut-être) mises à jour. Vous recevrez un email de confirmation toutes les heures.");
            validateMission(2);
        }else{
            invalidateMission(2)
            alert("Merci de continuer a nous supporter ou pas. En fait on s'en fiche.")
        }
    };

    return (
        <div className="w-full bg-pink-200 py-4">
            <div className="max-w-2xl mt-10 p-6 bg-pink-100 border-4 border-dotted border-purple-500 font-comic-sans">

                <h1 className="text-3xl font-bold text-purple-700 text-center mb-2 transform -rotate-1">
                    Gérez vos abonnements ❤️
                </h1>
                <p className="text-center text-sm text-gray-600 mb-8 bg-white p-2 rounded">
                    Nous sommes tristes de vous voir hésiter.
                </p>

                <div className="space-y-6 bg-white p-6 rounded-xl shadow-xl">

                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                        <input
                            type="checkbox"
                            name="newsletter"
                            checked={newsletter}
                            onChange={(e)=> setNewsletter(e.target.checked)}
                            className="mt-1 w-6 h-6 accent-pink-500"
                        />
                        <label className="text-sm font-bold text-gray-800 leading-tight">
                            Ne décochez pas cette case si vous ne souhaitez pas refuser de recevoir nos offres incroyables de partenaires tiers.
                        </label>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded hover:bg-gray-100">
                        <input
                            type="checkbox"
                            name="newsletter"
                            checked={!newsletter}
                            onChange={(e)=>(setNewsletter(!e.target.checked))}
                            className="mt-1 w-6 h-6 accent-green-500"
                        />
                        <label className="text-sm font-bold text-gray-800 leading-tight">
                            Cochez ici pour ne pas ARRÊTER de recevoir notre newsletter quotidienne (qui arrive en fait toutes les 10 minutes).
                        </label>
                    </div>

                    <div className="border-t-2 border-dashed border-gray-300 pt-4">
                        <h3 className="font-bold text-red-600 mb-2">Pourquoi partez-vous ?</h3>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2">
                                <input type="radio" name="reason" className="accent-red-500" />
                                <span className="text-xs text-black">Je déteste les bonnes affaires.</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="reason" className="accent-red-500" />
                                <span className="text-xs text-black">Je suis une personne ennuyeuse.</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="reason" className="accent-red-500" />
                                <span className="text-xs text-black">J'aime payer trop cher ailleurs.</span>
                            </label>
                        </div>
                    </div>

                    <div className="flex justify-between items-center pt-4">

                        <button
                            onClick={() => alert("Erreur : Veuillez d'abord envoyer un courrier recommandé.")}
                            className="text-gray-300 text-xs hover:text-gray-500 underline decoration-dotted"
                        >
                            Je veux vraiment me désinscrire de tout (Déconseillé)
                        </button>

                        <button
                            onClick={handleSave}
                            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
                        >
                            <ThumbsUp size={20} />
                        </button>
                    </div>
                </div>

                <p className="text-[8px] text-center mt-4 text-gray-400">
                    En restant sur cette page plus de 30 secondes, vous acceptez de renouveler votre abonnement.
                </p>
            </div>

        </div>
    );
};