export const Home = () => {
    return (
        <div className="relative flex flex-1 flex-col items-center justify-center p-5 md:p-8">

            <div className="relative inline-block">
                <h1 className="relative z-10 text-5xl font-medium tracking-tight text-text-heading md:text-[10vw]">
                    DI
                    <span className="letter-drop inline-block">
                        <span className="letter-swing inline-block origin-top">A</span>
                    </span>
                    L FORE
                    <span className="letter-drop inline-block" style={{ animationDelay: '2s' }}>
                        <span className="letter-swing inline-block origin-top" style={{ animationDelay: '0.5s' }}>S</span>
                    </span>
                    T.
                </h1>
            </div>
            <p className="relative z-10 mt-3 text-sm tracking-widest text-text-heading md:mt-4 md:text-2xl">
                29 · 30 · 31 DE MAYO 2026
            </p>
        </div>
    )
}
