import { X } from "lucide-react";

export const GoodSubscribe = ({ onClose, isActive, toggleSubscribe }) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={onClose}>

            <div
                className="flex gap-6 items-stretch justify-center p-8 rounded-2xl w-[90%] max-w-4xl relative"
                onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 md:-top-4 md:-right-4 text-white hover:text-gray-300 bg-gray-800 p-2 rounded-full transition-colors z-50">
                    <X size={24} />
                </button>

                <div className={`relative bg-white p-6 rounded-2xl shadow-xl w-full flex flex-col gap-4 border-2 transition-all duration-300 ${!isActive ? 'border-blue-600 scale-105' : 'border-transparent opacity-80'}`}>

                    {!isActive && (
                        <div className="absolute top-0 left-0 w-full rounded-t-xl bg-blue-600 py-1">
                            <p className="text-white text-center text-xs font-bold uppercase tracking-wider">Plan Actuel</p>
                        </div>
                    )}

                    <div className={`flex flex-col w-full ${!isActive ? 'mt-4' : 'mt-0'}`}>
                        <h3 className="font-bold text-2xl text-gray-900 mb-1">Standard</h3>
                        <p className="text-gray-500 text-sm mb-6">L'essentiel pour commencer.</p>

                        <div className="flex flex-col gap-4 w-full flex-grow">
                            <div className="border-b border-gray-100 pb-3 flex justify-between items-center">
                                <p className="text-gray-700 font-medium text-sm">Facturation</p>
                                <p className="text-gray-900 font-bold text-sm">Mensuelle</p>
                            </div>

                            <div className="pb-2 flex justify-between items-center">
                                <p className="text-gray-700 font-medium text-sm">Tarif</p>
                                <p className="text-gray-900 font-bold text-lg">Gratuit</p>
                            </div>

                            <p className="text-xs text-gray-400 mt-2">* Contient des publicités</p>
                        </div>
                    </div>

                    {isActive ? (
                        <button
                            onClick={toggleSubscribe}
                            className="w-full mt-auto bg-gray-100 text-gray-800 px-4 py-3 rounded-xl hover:bg-gray-200 font-medium transition-colors"
                        >
                            Rétrograder vers Standard
                        </button>
                    ) : (
                        <div className="w-full mt-auto text-center text-blue-600 font-bold py-3 bg-blue-50 rounded-xl">
                            Actif
                        </div>
                    )}
                </div>

                <div className={`relative bg-gray-900 p-6 rounded-2xl shadow-xl w-full flex flex-col gap-4 border-2 transition-all duration-300 ${isActive ? 'border-yellow-400 scale-105' : 'border-transparent'}`}>

                    {isActive && (
                        <div className="absolute top-0 left-0 w-full rounded-t-xl bg-yellow-400 py-1">
                            <p className="text-gray-900 text-center text-xs font-bold uppercase tracking-wider">Plan Actuel</p>
                        </div>
                    )}

                    <div className={`flex flex-col w-full ${isActive ? 'mt-4' : 'mt-0'}`}>
                        <h3 className="font-bold text-2xl text-white mb-1">Premium</h3>
                        <p className="text-gray-400 text-sm mb-6">L'expérience ultime, sans limites.</p>

                        <div className="flex flex-col gap-4 w-full flex-grow">
                            <div className="border-b border-gray-700 pb-3 flex justify-between items-center">
                                <p className="text-gray-300 font-medium text-sm">Facturation</p>
                                <p className="text-white font-bold text-sm">Mensuelle</p>
                            </div>

                            <div className="pb-2 flex justify-between items-center">
                                <p className="text-gray-300 font-medium text-sm">Tarif</p>
                                <p className="text-yellow-400 font-bold text-lg">9.99 €</p>
                            </div>

                            <ul className="text-xs text-green-400 mt-2 space-y-1">
                                <li>✓ Zéro publicité</li>
                                <li>✓ Support prioritaire</li>
                            </ul>
                        </div>
                    </div>

                    {!isActive ? (
                        <button
                            onClick={toggleSubscribe}
                            className="w-full mt-auto bg-yellow-400 text-gray-900 px-4 py-3 rounded-xl hover:bg-yellow-500 font-bold shadow-[0_0_15px_rgba(250,204,21,0.5)] transition-all"
                        >
                            Passer à Premium
                        </button>
                    ) : (
                        <div className="w-full mt-auto text-center text-yellow-500 font-bold py-3 bg-yellow-400/10 rounded-xl border border-yellow-400/20">
                            Actif
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}