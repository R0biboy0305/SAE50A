import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

export const BadProfileMenu = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <div className="absolute top-0 left-0">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="absolute top-0 left-0 z-50 p-1 bg-gray-200 text-gray-300 hover:bg-red-500 hover:text-white transition-colors"
                title="Menu (si vous arrivez à cliquer)"
            >
                {isMenuOpen ? <X size={10} /> : <Menu size={10} />}
            </button>

            {isMenuOpen && (
                <div className="absolute top-4 left-0 w-64 bg-black border-4 border-double border-red-500 z-40 p-4 font-mono text-xs shadow-[10px_10px_0_0_rgba(0,0,0,0.5)]">
                    <h3 className="text-red-500 border-b border-red-500 mb-2 blink">NAVIGATION COMPLEXE</h3>
                    <ul className="space-y-2">
                        <li className="text-gray-500 cursor-not-allowed hover:line-through">
                            🏠 Accueil (Cassé)
                        </li>
                        <li className="text-gray-500 cursor-not-allowed hover:line-through">
                            💳 Payer ma facture
                        </li>

                        <li
                            onClick={() => navigate('/mission-2')}
                            className="text-green-600 hover:bg-green-900 cursor-pointer flex justify-between items-center group"
                        >
                            <span>⚙️ Config. Flux GDPR (Alpha)</span>
                            <ChevronRight size={10} className="group-hover:translate-x-2 transition-transform"/>
                        </li>

                        <li className="text-gray-500 cursor-not-allowed">
                            🗑️ Supprimer mon compte (Impossible)
                        </li>
                    </ul>
                    <div className="mt-4 text-[8px] text-gray-600 text-center">
                        Menu v.0.1 - Copyright 1999
                    </div>
                </div>
            )}

        </div>
    )
}