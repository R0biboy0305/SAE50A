import { useState, useEffect } from "react";
import { useGame } from "../../../context/GameContext.jsx";
import { Eye, Trash2, Siren, Skull } from "lucide-react";

export const BadLogin = () => {
    const { login } = useGame();

    const validateMission = useGame().validateMission;

    const [isButtonSwapped, setIsButtonSwapped] = useState(false);

    const [formData, setFormData] = useState({ pseudo: "", password: "", motherName: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value.toUpperCase() });
    };

    const handleEyeClick = () => {
        alert("Oups ! Pour des raisons de sécurité, regarder le mot de passe l'efface.");
        setFormData({ ...formData, password: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            if (Math.random() > 0.8) {
                alert("ERREUR FATALE 0x99 : Votre pseudo ne contient pas assez de chiffres romains.");

                setFormData({ pseudo: "", password: "", motherName: "" });
            } else {

                if(!formData.pseudo && !formData.password && !formData.motherName) {
                    alert("ERREUR FATALE 0x42 : Veuillez remplir tous les champs correctement.");
                    return
                }
                validateMission(1);
                login({ pseudo: formData.pseudo, password: formData.password });
            }
        }, 3000);
    };

    return (
        <div className="max-w-md w-full mx-auto bg-red-600 border-[10px] border-double border-yellow-400 p-2 shadow-2xl animate-pulse">

            <div className="text-center mb-6 bg-black p-4 rotate-1">
                <h1 className="text-4xl font-serif text-green-400 tracking-widest blink">
                    IDENTIFICATION
                </h1>
                <div className="flex justify-center gap-2 text-red-500 mt-2">
                    <Siren className="animate-spin" />
                    <span className="text-xs text-white">PROTOCOLE ALPHA-OMEGA</span>
                    <Siren className="animate-spin" />
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 font-mono">

                <div className="relative">
                    <label className="text-xs font-bold text-yellow-300 bg-blue-800 p-1 absolute -top-3 left-10 -rotate-3">
                        VOTRE PSEUDO NUMERIQUE
                    </label>
                    <input
                        name="pseudo"
                        type="range"
                        className="hidden"
                    />
                    <input
                        name="pseudo"
                        type="text"
                        value={formData.pseudo}
                        onChange={handleChange}
                        placeholder="ne_cliquez_pas_ici"
                        onPaste={(e) => { e.preventDefault(); alert("COPIER-COLLER INTERDIT"); }}
                        className="w-full bg-green-700 text-red-900 placeholder-red-800 border-b-4 border-black p-4 text-right focus:bg-green-600 focus:outline-none cursor-help"
                    />
                    <p className="text-[10px] text-white text-right mt-1">*Format obligatoire : xxxxx@yyyyy.zzz.org</p>
                </div>

                <div className="relative border-4 border-dashed border-white p-4">
                    <label className="block text-center text-white font-black text-xl mb-2 decoration-wavy underline">
                        CODE SECRET
                    </label>

                    <div className="flex gap-1">
                        <input
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full bg-black text-white p-2 text-xs border-none"
                            placeholder="*************"
                        />
                        <button
                            type="button"
                            onClick={handleEyeClick}
                            className="bg-gray-200 p-2 hover:bg-red-500 transition-colors"
                            title="Vérifier le mot de passe"
                        >
                            <Eye size={20} className="text-black" />
                        </button>
                    </div>
                    <p className="text-[8px] text-yellow-200 mt-2 text-justify">
                        Le mot de passe doit contenir 1 majuscule, 3 symboles égyptiens, et ne pas contenir la lettre 'e'.
                    </p>
                </div>

                <div>
                    <label className="text-xs text-white">Nom de jeune fille de votre grand-mère paternelle :</label>
                    <select className="w-full bg-gray-400 text-xs p-1" name="motherName">
                        <option>Choisissez parmi 1 million de noms...</option>
                        <option>Gertrude</option>
                        <option>Cunégonde</option>
                    </select>
                </div>

                <div
                    className="flex flex-col gap-2 relative h-32"
                    onMouseEnter={() => setIsButtonSwapped(!isButtonSwapped)}
                >
                    <button
                        type="button"
                        onClick={() => setFormData({ pseudo: "", password: "", motherName: "" })}
                        className={`absolute w-full py-4 font-bold text-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all
                            ${isButtonSwapped ? "bottom-0 bg-green-600" : "top-0 bg-red-700"}
                        `}
                    >
                        {isButtonSwapped ? "PaS ValIDé" : "ANNULER TOUT"}
                    </button>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`absolute w-full py-4 font-bold text-black border-2 border-white
                            ${isButtonSwapped ? "top-0 bg-red-500" : "bottom-0 bg-green-500"}
                        `}
                    >
                        {isLoading ? "CHARGEMENT EN COURS..." : (isButtonSwapped ? "SubmIT" : "INSCriPTion SÉCuriSÉE")}
                    </button>
                </div>

                <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1 w-3 h-3 accent-red-500" required />
                    <label className="text-[9px] text-white leading-tight">
                        Je certifie être conscient que mes données seront vendues à des tiers malveillants et j'accepte d'installer la barre d'outils Ask.com.
                    </label>
                </div>

            </form>
        </div>
    );
};