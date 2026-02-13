import {useEffect, useState} from "react";
import {useGame} from "../../../context/GameContext.jsx";
import {User, Lock, AlertCircle} from "lucide-react";
import {GoodInput} from "./GoodInput.jsx";

export const GoodLogin = () => {
    const {login} = useGame();

    const validateMission = useGame().validateMission;

    const [formData, setFormData] = useState({pseudo: "", password: "", confirmPassword: ""});

    const [toast, setToast] = useState(null);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const passwordRequirement = [
        {id: 1, label: 'Au moins 8 caractères', isValid: formData.password.length >= 8},
        {id: 2, label: 'Une majuscule', isValid: /[A-Z]/.test(formData.password)},
        {id: 3, label: 'Un caractère spécial', isValid: /[^A-Za-z0-9]/.test(formData.password)},
        {id: 4, label: 'Un chiffre', isValid: /[0-9]/.test(formData.password)},
    ]

    const strength = passwordRequirement.filter(r => r.isValid).length;

    const getStrengthColor = () => {
        if (strength <= 1) return "bg-red-500";
        if (strength === 2) return "bg-yellow-500";
        if (strength === 3) return "bg-green-500";
        if (strength === 4) return "bg-blue-500";
    }

    const getStrengthLabel = () => {
        if (strength <= 1) return "Très faible";
        if (strength === 2) return "Moyen";
        if (strength === 3) return "Bien";
        if (strength === 4) return "Excellent";
    }

    const confirmNotEmpty = formData.confirmPassword.length > 0;
    const isMatchingPassword = formData.password === formData.confirmPassword;
    const isError = confirmNotEmpty && !isMatchingPassword;


        useEffect(()=>{
            if(formData.password.length === 0){
                setToast(null);
                return
            }

            if(strength < 4){
            setToast({message: "Votre mot de passe n'est pas assez fort", type: "error"})
            }else{
                setToast(null)
            }
        }, [strength, formData.password.length])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(strength < 4){
            return
        }
        login({pseudo: formData.pseudo, password: formData.password});
        validateMission(1);
    }

    return (
        <div
            className="max-w-md w-full mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-8 border border-gray-100">

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
                    <div className="flex flex-row justify-between">
                        <div className="mt-1">
                            {passwordRequirement.map(req => {
                                return (
                                    <div className="flex flex-row gap-2 text-xs translate-x-2">
                                        <p key={req.id} className={`${req.isValid ? 'text-blue-600' : 'text-gray-700'}`}>{req.id}.</p>
                                        <p className={`${req.isValid ? 'text-blue-600' : 'text-gray-700'}`}>{req.label}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="flex flex-col">
                            <div className="h-1.5 w-full bg-gray-200 rounded-full mt-2 overflow-hidden">
                                <div
                                    className={`h-full transition-all duration-500 ease-out rounded-full ${getStrengthColor()}`}
                                    style={{width: `${(strength / 4) * 100}%`}}></div>
                            </div>
                            <div>
                                <span className="text-xs text-gray-500">Force du mot de passe : </span>
                                <span
                                    className={`text-xs ${strength === 1 ? 'text-red-500' : strength === 2 ? 'text-yellow-600' : strength === 3 ? 'text-green-600' : 'text-blue-600'}`}>
                                    {getStrengthLabel()}
                                </span>
                            </div>
                        </div>
                    </div>
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
                            <AlertCircle size={14}/>
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

                {toast && (
                    <div className="w-full text-center relative">
                        <span className="w-full text-red-600 animate-pulse text-xs text-center absolute left-2 bottom-1/2">{toast.message}</span>
                    </div>
                )}

            </form>
        </div>
    );
}

