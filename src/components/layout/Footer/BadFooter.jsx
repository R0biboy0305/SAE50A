import {useState} from "react";
import {BadgeQuestionMark, Car, CardSim, Rat} from 'lucide-react';
import {Link} from "react-router-dom";

export const BadFooter = () => {

    const [showPopup, setShowPopup] = useState(false);

    const handlePopup = () => {
        if (!showPopup) {
            setShowPopup(true);
        }
        if (showPopup) {
            setShowPopup(false);
        }
    }


    return (
        <footer className="bg-gradient-to-r from-yellow-200 to-red-500 border-8 border-green-500 ">
            {showPopup && (
                <div
                    className="border-8 border-green-500 bg-gradient-to-bl from-yellow-400 to-green-400 absolute top-1/2 left-[40%] animate-bounce w-1/3 h-1/3 flex flex-col justify-between items-center">
                    <p className="text-green-400">Attention a la pop Up</p>
                    <Car className="absolute top-1/2 right-1/2 animate-spin" size={40}/>
                    <Rat className="absolute top-1/3 left-1/4 animate-spin" size={40}/>
                    <CardSim className="absolute top-1/3 right-1/4 animate-spin" size={40}/>
                    <div
                        className="border-green-500 bg-gradient-to-tr from-yellow-400 to-green-400 w-full h-1/2"></div>
                    <div className="flex gap-5 items-center">
                        <p>Elle peut être dangereuse</p>
                        <BadgeQuestionMark className="animate-spin" size={40}/>
                    </div>
                    <div>
                        <button onClick={handlePopup} className="text-green-400">Fermer</button>
                    </div>
                </div>
            )}
            <div className="flex flex-row relative">
                <div
                    className="border-8 border-red-500 flex flex-col flex-1 items-start justify-between overflow-hidden">
                    <marquee scrollamount="40"
                             className="font-serif text-white text-2xl bottom-5 animate-bounce z-10">C'est surement le
                        footer
                    </marquee>
                    <button onClick={handlePopup}
                            className="text-2xl font-thin font-light text-red-400 hover:cursor-col-resize">Cliquez ici
                        !!!
                    </button>
                    <marquee direction="right" scrollamount="30"
                             className=" rotate-6 bg-gradient-to-r from-red-500 to-yellow-200 font-serif text-white text-xs bottom-5 z-10">
                        <p className="animate-bounce">© 2026 Bad Footer. All rights reserved. </p></marquee>
                </div>
                <div className="w-40 h-5 bg-gray-400 absolute duration-500 top-1/2 left-[40%] hover:bg-gray-500 hover:duration-500">
                    <Link to={`/error`} className="text-gray-400 font-serif">NeWsLetTer</Link>
                </div>

                <div className="absolute bottom-[80%] left-[71%] text-xs font-serif text-red-500">
                    <Link to={"/subscribe"}>Abonnement</Link>
                </div>
                <div className="flex w-1/4">
                    <marquee direction="down" scrollamount="20" height="96"
                             className="bg-black text-green-500 font-mono text-xs p-1">
                        <p className="text-center font-thin text-2xl">ATTRAPES MOI !</p>
                    </marquee>
                </div>
            </div>
            <div className="w-full bg-indigo-500">
                <marquee direction="left" scrollamount="50" className="text-red-500 text-center">🚨 VOUS ETES ELIGIBLE AUX RENOVATIONX D'ISOLATIONS 🚨</marquee>
            </div>
        </footer>
    )
}