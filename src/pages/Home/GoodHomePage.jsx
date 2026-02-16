import { GoodTaskList } from "../../components/ui/TaskList/GoodTaskList.jsx";
import { useGame } from "../../context/GameContext.jsx";
import { Info, LayoutDashboard } from "lucide-react";
export const GoodHomePage = () => {

    const { completedMission } = useGame();

    const progress = Math.round((completedMission.length / 3) * 100);

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
            <div className="max-w-4xl mx-auto space-y-10">
                <div className="text-center space-y-4">
                    <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-2">
                        Experience Interactive
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                        User <span className="text-blue-600">Nightmare</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Comprenez l'importance d une bonne interface utilisateur en vivant le pire.
                    </p>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <LayoutDashboard className="text-blue-500"/>
                        Bienvenue dans l'experience
                    </h2>
                    <p className="text-gray-600 leading-7 mb-6">
                        User Nightmare est conçu pour decrypter les mécanismes de frustration que subissent les utilisateurs au quotidien.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg flex gap-4 items-start">
                        <Info className="text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                            <p className="font-bold text-blue-900">Comment jouer ?</p>
                            <p className="text-blue-800 text-sm mt-1">
                                Vous pouvez activer le mode Cauchemar a tout moment en cliquant sur le bouton Switch to Nightmare situé sur la droite de votre écran.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="flex items-end justify-between px-2">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Tableau de bord</h2>
                            <p className="text-gray-500 text-sm">Completez les taches ci-dessous.</p>
                        </div>
                        <div className="text-right">
                            <span className="text-sm font-bold text-blue-600">{progress}% Completé</span>
                            <div className="w-32 h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
                                <div className="h-full bg-blue-600 transition-all duration-1000 ease-out" style={{ width: progress + '%' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/3 mx-auto mt-12">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">Votre progression</h2>
                            <span className="text-sm text-gray-400">3 missions disponibles</span>
                        </div>
                        <div id="mission1" className="scroll-mt-32">
                            <GoodTaskList MissionRanking={1} title="Premiers Pas" MissionDescription="Rendez-vous sur la page de connexion et creez votre profil utilisateur avec un pseudo et un mot de passe valide." />
                        </div>
                        <div id="mission2" className="scroll-mt-32">
                            <GoodTaskList MissionRanking={2} title="Gestion des Preferences" MissionDescription="Accedez a votre profil utilisateur et trouvez l'option pour vous desinscrire de la newsletter." />
                        </div>
                        <div id="mission3" className="scroll-mt-32">
                            <GoodTaskList MissionRanking={3} title="Gestion d'abonnement" MissionDescription="Accédez a votre profil utilisateur et passez a l'abonnement premium." />
                        </div>
                    </div>
                </div>
                <p className="text-center text-gray-400 text-xs py-8">
                    Projet UX/UI - Good UX Version
                </p>
            </div>
        </div>
    );
}
