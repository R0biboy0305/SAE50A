import { useState } from "react";
import { AlertTriangle, X, Skull } from "lucide-react";

export const BadHomePage = () => {
        const [showPopup, setShowPopup] = useState(true);

        return (
            <div className="bg-yellow-200 min-h-screen overflow-x-hidden font-serif cursor-help relative">

                    {showPopup && (
                        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-10">
                                <div className="bg-red-600 border-8 border-blue-600 p-8 text-white text-center animate-bounce">
                                        <h2 className="text-4xl font-bold blink mb-4">ATTENTION !!</h2>
                                        <p>VOTRE NAVIGATEUR N'EST PAS A JOUR (V.1998)</p>
                                        <p className="text-xs mt-4">Veuillez envoyer un don pour continuer.</p>
                                        <button
                                            onClick={() => setShowPopup(false)}
                                            className="text-[10px] text-gray-400 mt-8 hover:text-red-600"
                                        >
                                                [Fermer cette fenêtre publicitaire]
                                        </button>
                                </div>
                        </div>
                    )}

                    <div className="w-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500 p-1">
                            <marquee direction="left" scrollamount="20" className="text-white font-mono text-xl">
                                    🚨 BREAKING NEWS : L'UX DESIGN EST UNE INVENTION DU GOUVERNEMENT 🚨 ACHETEZ DES CRYPTOS MAINTENANT 🚨
                            </marquee>
                    </div>

                    <div className="p-0 m-0 w-full"> {}

                            <h1 className="text-red-600 font-extrabold text-right uppercase text-[10px] bg-black p-4 rotate-1">
                                    User Nghtmre (Version Beta 0.0.1)
                            </h1>

                            <div className="bg-white border-4 border-dashed border-black p-1 m-4 max-w-xs">
                                    <h2 className="font-thin text-xs text-gray-300">Bienvenue sur... euh... le site.</h2>

                                    <p className="text-[8px] leading-3 text-justify text-blue-900 mt-2">
                                            User Nightmare est une expérience interactive conçue pour vous faire souffrir. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            <span className="text-red-500 font-bold bg-yellow-300"> CLIQUEZ ICI </span>
                                            pour voir ce qui fait la différence entre un utilisateur heureux et un utilisateur qui rage-quit. Attention, votre patience sera mise à rude épreuve (si le site charge).
                                    </p>

                                    <p className="mt-4 text-purple-600 underline decoration-wavy">
                                             Cliquez sur le bouton (lequel ?) pour passer en mode Nightmare.
                                    </p>
                            </div>
                    </div>

                    <div className="w-full pl-20 pr-0 mt-10 bg-gray-400">
                            <h2 className="text-center text-4xl text-white shadow-lg transform -skew-x-12">
                                    VOS ORDRES :
                            </h2>

                            <ul className="list-decimal marker:text-red-500 space-y-0">

                                    <li className="bg-green-300 p-8 border-b-8 border-red-500 text-right">
                                            <span className="text-xs text-gray-500 block">Priorité : Fible</span>
                                            <h3 className="text-xl font-serif italic">1. Formulaire A-38</h3>
                                            <p className="text-white mix-blend-difference">Essayez de créer un compte (Bonne chance lol)</p>
                                    </li>

                                    <li className="bg-purple-600 text-yellow-300 p-2 text-center font-bold tracking-[1em]">
                                            2.NEWSLETTER
                                            <p>Essayez de vous désinscrire de la NewsLetter</p>
                                            <p className="tracking-[1rem] font-light text-[8px]">Si vous arrivez a la trouver</p>
                                    </li>

                                    <li className="bg-transparent p-4 relative h-20 overflow-hidden">
                                            <div className="absolute top-0 left-0 animate-spin">
                                                    <Skull size={40} />
                                            </div>
                                            <p className="ml-12 text-gray-600 line-through">
                                                    3. Mission Annulée
                                            </p>
                                    </li>
                            </ul>
                    </div>

                    <div className="fixed bottom-10 right-0 bg-red-600 text-white p-2 text-xs rotate-45 z-40">
                            Besoin d'aide ? <br/> Appelez le 08 36 65...
                    </div>
            </div>
        )
}