import { Link } from 'react-router-dom';
import { useState } from 'react';

export const BadHeader = () => {
    const [adClosed, setAdClosed] = useState(false);

    return (
        <header className="bg-[#FFFF00] border-b-[20px] border-double border-red-600 font-serif overflow-hidden relative z-50">
            <marquee scrollamount="20" className="bg-black text-green-500 font-mono text-xs p-1">
                ⚠️ ATTENTION : VOTRE ORDINATEUR VA EXPLOSER DANS 3... 2... 1... SI VOUS NE CLIQUEZ PAS ICI !!! ⚠️ $$ GAGNEZ UN IPHONE 4 $$
            </marquee>

            <div className="flex flex-row-reverse flex-wrap items-end justify-between p-2 h-40">

                <div className="transform rotate-12 translate-y-4 hover:rotate-180 transition-all duration-1000 cursor-wait">
                    <h1 className="text-4xl font-extrabold text-blue-800 bg-red-500 p-2 border-4 border-dotted border-lime-400 select-none shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                        UsEr<br/>NiGhT<br/>MaRe
                    </h1>
                </div>
                {!adClosed && (
                    <div className="absolute top-10 left-1/3 bg-white border-2 border-black p-4 shadow-xl z-50 animate-bounce">
                        <p className="text-xs text-red-600 font-bold">Abonnez-vous !</p>
                        <button
                            onClick={() => alert("Impossible de fermer cette pub !")}
                            className="absolute -top-2 -right-2 bg-gray-300 rounded-full w-4 h-4 text-[8px] flex items-center justify-center border border-black"
                        >
                            X
                        </button>
                    </div>
                )}
                <div className="flex flex-col gap-0 items-start pl-4 mb-2">

                    <Link to="/" className="text-[10px] text-gray-400 bg-gray-200 underline decoration-wavy decoration-red-500 hover:cursor-none">
                        Aller à la maison
                    </Link>
                    <Link to="/mission-1" className="text-black font-thin text-xl tracking-tighter hover:text-white cursor-help">
                        Mission1(cliquezici)
                    </Link>

                    <button className="bg-gray-300 text-gray-300 border border-gray-300 mt-2 text-xs p-1" disabled>
                        Paramètres (Désactivé)
                    </button>
                    <a href="#" className="mt-4 text-purple-700 font-bold border-2 border-dashed border-purple-700 p-1 transform hover:translate-x-20 transition-transform">
                        CONTACTEZ LE SUPPORT
                    </a>
                </div>

            </div>

            <div className="bg-gradient-to-r from-red-500 via-green-500 to-blue-500 text-center text-white text-[8px] p-0.5 animate-pulse">
                Chargement des ressources : 99% (Bloqué)
            </div>
        </header>
    );
};
