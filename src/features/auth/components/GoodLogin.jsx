import { useState } from "react";
import { useGame } from "../../../context/GameContext.jsx";
import { User, Lock, AlertCircle } from "lucide-react";
import { GoodInput } from "./GoodInput.jsx";

export const GoodLogin = () => {
    const { login } = useGame();

    const validateMission = useGame().validateMission;

    const [formData, setFormData] = useState({ pseudo: "", password: "", confirmPassword: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const confirmNotEmpty = formData.confirmPassword.length > 0;
    const isMatchingPassword = formData.password === formData.confirmPassword;
    const isError = confirmNotEmpty && !isMatchingPassword;

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ pseudo: formData.pseudo, password: formData.password });
        validateMission(1);
    }

    return (
        <div className="max-w-md w-full mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-8 border border-gray-100">

            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Bienvenue !</h1>
                <p className="text-gray-500 text-sm">Remplissez vos informations pour commencer l'aventure.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

                <GoodInput
                    label="Pseudo"
                    name="pseudo"
                    placeholder="Ex: Warrior99"
                    icon={User}
                    onChange={handleChange}
                />

                <div>
                    <GoodInput
                        label="Mot de passe"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        icon={Lock}
                        onChange={handleChange}
                    />
                    <p className="text-xs text-gray-500 mt-1 pl-1">
                        Utilisez au moins 8 caractères.
                    </p>
                </div>

                <div>
                    <GoodInput
                        label="Confirmez le mot de passe"
                        name="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        icon={Lock}
                        onChange={handleChange}
                        error={isError ? "Les mots de passe ne correspondent pas" : null}
                    />

                    {isError && (
                        <div className="flex items-center gap-2 text-red-500 text-xs font-medium animate-pulse mt-2">
                            <AlertCircle size={14} />
                            <span>Les mots de passe ne correspondent pas.</span>
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={!isMatchingPassword && formData.confirmPassword?.length > 0}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform active:scale-[0.98]">
                    Créer mon compte
                </button>

            </form>
        </div>
    );
}

