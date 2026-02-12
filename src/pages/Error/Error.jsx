export const ErrorPage = () => {
    return (
        <div className="bg-red-500 w-full h-screen flex flex-col justify-evenly">
            <div>
                <p className="text-yellow-400 font-serif uppercase underline text-3xl text-left">
                    Oups, le lien
                </p>
            </div>
            <div className="h-full h-1/2">
                <marquee direction="down" behavior="alternate" scrollamount="30" height="100%" width="100%">
                    <marquee behavior="alternate" direction="right">
                        <span className="inline-block p-2 border-[6px] border-dotted border-red-200 animate-pulse">
                            <p className="text-6xl font-black text-green-400 drop-shadow-[3px_3px_0_rgba(0,0,0,1)] ">
                            ERROR 404
                            </p>
                        </span>
                    </marquee>
                </marquee>
            </div>
            <div>
                <p className="text-yellow-400 font-serif uppercase underline text-3xl text-right">
                    ne fonctionne
                </p>
            </div>
            <div>
                <p className="text-yellow-400 font-serif uppercase underline text-3xl text-center">
                    pas
                </p>
            </div>
        </div>
    )
}