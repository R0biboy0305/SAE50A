import { useGame } from "../../../context/GameContext.jsx";
import { LogOut, Skull, AlertTriangle, BadgeCent, Frown } from "lucide-react";
import { useState } from "react";

export const BadProfile = () => {
    const { user, logout } = useGame();
    const [adClosed, setAdClosed] = useState(false);

    const handleLogout = () => {
        const confirm = window.confirm("Êtes-vous sûr de vouloir abandonner votre famille User Nightmare ? 😢");
        if (confirm) {
            alert("Erreur 503 : Impossible de partir. Le serveur est triste.");
            setTimeout(logout, 2000);
        }
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto bg-yellow-100 border-8 border-dashed border-red-500 p-2 overflow-hidden font-mono">

            {!adClosed && (
                <div className="absolute inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4 text-center animate-pulse">
                    <h2 className="text-4xl text-green-500 font-bold mb-4">FELICITATIONS !!!</h2>
                    <p className="text-white mb-8">Vous êtes le 999,999ème visiteur ! Réclamez votre iPhone 4 maintenant !</p>
                    <button
                        onClick={() => setAdClosed(true)}
                        className="text-xs text-gray-500 hover:text-white underline"
                    >
                        Non merci, je déteste les cadeaux et je préfère rester pauvre.
                    </button>
                </div>
            )}

            <div className="bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 p-4 mb-8 transform -skew-y-3">
                <div className="flex items-center gap-4">
                    <img
                        src="https://api.dicebear.com/7.x/adventurer/svg?seed=Felix"
                        alt="Avatar"
                        className="w-16 h-48 object-cover border-4 border-white rounded-none shadow-xl"
                    />
                    <div>
                        <h1 className="text-3xl font-black text-white stroke-black drop-shadow-md">
                            USER_ID_#99283
                        </h1>
                        <p className="text-xs text-black bg-white inline-block px-1">
                            Statut : EN DANGER
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-1 mb-8">

                <div className="bg-gray-800 text-green-400 p-4 text-right">
                    <span className="block text-[10px] uppercase tracking-widest">Identification</span>
                    <span className="text-xl font-bold">{user?.pseudo || "ANONYME"}</span>
                </div>

                <div className="bg-red-600 text-yellow-200 p-4 border-4 border-yellow-400 animate-pulse">
                    <span className="block text-[10px] uppercase font-bold flex items-center gap-2">
                        <AlertTriangle size={12}/> MOT DE PASSE (VISIBLE)
                    </span>
                    <span className="text-2xl font-black">
                        {user?.password || "123456"}
                    </span>
                    <p className="text-[8px] leading-tight mt-1">
                        Ne partagez ce mot de passe avec personne sauf notre équipe marketing.
                    </p>
                </div>

                <div className="col-span-2 bg-blue-900 p-8 text-center text-blue-800">
                    <p className="bg-blue-900 select-none">
                        {user?.email || "email@caché.com"}
                    </p>
                    <p className="text-white text-xs mt-2">(Surlignez le texte bleu sur fond bleu pour voir votre email)</p>
                </div>

            </div>

            <div className="relative border-4 border-gray-400 p-6 grayscale mb-8">
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                    <BadgeCent size={48} className="text-green-600 mb-2" />
                    <h3 className="text-xl font-bold text-gray-800">Fonctionnalité Premium</h3>
                    <p className="text-center text-sm mb-4 max-w-xs">
                        Pour voir vos dernières commandes et modifier votre profil, veuillez souscrire à l'offre GOLD.
                    </p>
                    <button className="bg-green-600 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:scale-110 transition-transform">
                        Payer 49.99€ / mois
                    </button>
                </div>

                <h3 className="font-bold blur-sm">Mes dernières commandes</h3>
                <ul className="blur-sm list-disc pl-5">
                    <li>Dictionnaire UX/UI - 20€</li>
                    <li>Aspirine (Boîte de 100) - 15€</li>
                </ul>
            </div>

            <div className="flex justify-between items-end">

                <div className="text-[10px] text-gray-400 w-1/2">
                    Publicité : <a href="#" className="underline text-blue-600">Comment perdre 10kg en mangeant du gras ?</a>
                </div>

                <button
                    onClick={handleLogout}
                    className="group relative bg-gray-200 text-gray-400 px-2 py-1 text-xs hover:bg-red-100 hover:text-red-500 transition-colors"
                >
                    <span className="flex items-center gap-1 group-hover:hidden">
                        <LogOut size={12} /> Déconnexion
                    </span>
                    <span className="hidden group-hover:flex items-center gap-1 font-bold">
                        <Frown size={12} /> Tu nous quittes ? 😭
                    </span>
                </button>
            </div>

            <div className="fixed bottom-10 right-10 animate-bounce pointer-events-none">
                <span className="bg-yellow-300 text-black px-2 py-1 rounded shadow-lg text-xs font-bold -rotate-12 block">
                    Besoin d'aide ? <br/> Appelez le 08 99... (3€/min)
                </span>
            </div>

        </div>
    );
};