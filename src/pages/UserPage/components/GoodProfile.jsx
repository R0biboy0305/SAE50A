import { useState } from "react";
import { useGame } from "../../../context/GameContext";
import {GoodProfileMenu} from "./GoodProfileMenu";

import { User, Shield, Lock, LogOut, Eye, EyeOff, Trophy, Calendar } from "lucide-react";

export const GoodProfile = () => {
    const { user, logout, completedMission } = useGame();
    const [showPassword, setShowPassword] = useState(false);

    const today = new Date().toLocaleDateString('fr-FR');

    return (
        <div className="flex flex-row gap-6">
            <GoodProfileMenu />
            <div className="max-w-2xl mx-auto space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                        {user.pseudo.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Bonjour, {user.pseudo} !</h1>
                        <p className="text-gray-500 flex items-center gap-2 text-sm mt-1">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            Compte Actif
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <h2 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2">
                            <User className="text-blue-500" size={20}/> Informations
                        </h2>

                        <div className="space-y-4">
                            <div className="bg-gray-50 p-3 rounded-lg">
                                <p className="text-xs text-gray-400 uppercase font-bold">Pseudo</p>
                                <p className="text-gray-800 font-medium">{user.pseudo}</p>
                            </div>

                            <div className="bg-gray-50 p-3 rounded-lg flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-bold">Membre depuis le</p>
                                    <p className="text-gray-800 font-medium flex items-center gap-2">
                                        <Calendar size={14}/> {today}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <h2 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2">
                            <Shield className="text-purple-500" size={20}/> Sécurité
                        </h2>

                        <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-xs text-gray-400 uppercase font-bold mb-1">Mot de passe</p>
                            <div className="flex justify-between items-center">
                                <p className="text-gray-800 font-mono text-lg">
                                    {showPassword ? user.password : "••••••••"}
                                </p>
                                <button
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-gray-400 hover:text-blue-600 transition-colors"
                                    title={showPassword ? "Masquer" : "Afficher"}
                                >
                                    {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                                </button>
                            </div>
                        </div>

                        <div className="mt-4 flex items-center gap-2 text-xs text-green-600 bg-green-50 p-2 rounded border border-green-200">
                            <Lock size={12} />
                            Votre mot de passe est chiffré.
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 shadow-lg text-white flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold mb-1">Progression</h2>
                        <p className="text-blue-100 text-sm">Missions accomplies dans l'aventure</p>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 px-4 py-2 rounded-xl backdrop-blur-sm">
                        <Trophy className="text-yellow-300" size={28} />
                        <span className="text-3xl font-bold">{completedMission?.length || 0}</span>
                    </div>
                </div>

                <button
                    onClick={logout}
                    className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-bold py-4 rounded-xl border border-red-200 flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98]"
                >
                    <LogOut size={20} />
                    Se déconnecter
                </button>

                <p className="text-center text-xs text-gray-400 mt-4">
                    User ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
            </div>
            </div>
    );
};