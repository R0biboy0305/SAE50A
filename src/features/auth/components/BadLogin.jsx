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
                            className="bg-yellow-400 px-2 hover:bg-red-600 transition-colors"
                            title="Révéler (à vos risques)"
                        >
                            <Eye size={16} className="text-black" />
                        </button>
                        <button
                            type="button"
                            onClick={() => setFormData({...formData, password: ""})}
                            className="bg-red-700 px-2 hover:bg-black"
                            title="Effacer (irréversible)"
                        >
                            <Trash2 size={16} className="text-white" />
                        </button>
                    </div>

                    <p className="text-[8px] text-yellow-300 mt-2 text-center">
                        Votre mot de passe sera envoyé par fax à notre équipe de sécurité.
                    </p>
                </div>

                <div className="bg-purple-900 p-4 border-2 border-green-400">
                    <label className="text-green-400 text-sm flex items-center gap-2 mb-2">
                        <Skull size={14} />
                        QUESTION DE SECURITE OBLIGATOIRE
                    </label>
                    <select
                        disabled
                        className="w-full bg-gray-800 text-gray-500 p-2 cursor-not-allowed"
                    >
                        <option>Nom de jeune fille de votre poisson rouge ?</option>
                    </select>
                    <input
                        name="motherName"
                        value={formData.motherName}
                        onChange={handleChange}
                        className="w-full mt-2 bg-purple-800 text-white p-2 placeholder-purple-400"
                        placeholder="Réponse (sera publiée sur nos réseaux)"
                    />
                </div>

                <div className="flex gap-2 justify-center">
                    {isLoading ? (
                        <div className="text-center py-4">
                            <div className="animate-spin w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full mx-auto"></div>
                            <p className="text-white text-xs mt-2 animate-pulse">Vérification de votre karma digital...</p>
                        </div>
                    ) : (
                        <>
                            <button
                                type={isButtonSwapped ? "button" : "submit"}
                                onMouseEnter={() => Math.random() > 0.5 && setIsButtonSwapped(true)}
                                className={`flex-1 py-3 font-bold text-lg border-4 transition-all ${
                                    isButtonSwapped
                                        ? "bg-gray-500 text-gray-700 border-gray-600 cursor-not-allowed"
                                        : "bg-green-500 text-black border-green-300 hover:bg-green-400"
                                }`}
                            >
                                {isButtonSwapped ? "Annuler (?)" : "VALIDER"}
                            </button>

                            <button
                                type={isButtonSwapped ? "submit" : "button"}
                                className={`flex-1 py-3 font-bold text-lg border-4 transition-all ${
                                    isButtonSwapped
                                        ? "bg-green-500 text-black border-green-300 hover:bg-green-400"
                                        : "bg-red-800 text-red-200 border-red-600 hover:bg-red-700"
                                }`}
                            >
                                {isButtonSwapped ? "Confirmer" : "TOUT EFFACER"}
                            </button>
                        </>
                    )}
                </div>

            </form>
        </div>
    );
};

