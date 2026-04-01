import { Fragment } from 'react'
import { LINEUP_SECTIONS, tokensFromLine } from './lineupData'

export const Artists = () => {
    return (
        <div className="mx-auto">
            <div className="lineup-shell relative min-w-0 w-full overflow-hidden rounded-xl px-3 py-6 sm:px-4 sm:py-8 md:px-10 md:py-12">
                <div className="lineup-noise pointer-events-none" aria-hidden />
                <div className="lineup-scan pointer-events-none" aria-hidden />
                <div className="relative z-1 flex min-w-0 flex-col gap-8 md:gap-14">
                    <h1 className="m-0 text-2xl font-medium tracking-tight text-text-heading ">
                        LINE UP
                    </h1>
                    {LINEUP_SECTIONS.map(section => (
                        <section
                            key={section.id}
                            className="w-full"
                            aria-labelledby={`lineup-${section.id}`}
                        >
                            <h2 id={`lineup-${section.id}`} className="m-0 mb-3 sm:mb-4">
                                <img
                                    src={section.headingSrc}
                                    alt={section.headingAlt}
                                    className="block h-auto max-h-16 w-auto max-w-full object-contain object-left sm:max-h-20 md:max-h-28"
                                    decoding="async"
                                />
                            </h2>
                            <div className="lineup-section-content">
                                <ul className="m-0 min-w-0 list-none space-y-1 p-0 ">
                                    {section.lines.map((line, lineIdx) => {
                                        const tokens = tokensFromLine(line)
                                        if (tokens.length === 0) return null
                                        return (
                                            <li key={`${section.id}-${lineIdx}`} className="min-w-0 leading-snug">
                                                <p className="m-0 flex min-w-0 flex-wrap items-baseline gap-x-0.5 gap-y-1.5 sm:gap-x-1 sm:gap-y-2">
                                                    {tokens.map((name, ti) => {
                                                        /*   const j = nameJitter(section.id, lineIdx, ti, name) */
                                                        return (
                                                            <Fragment key={`${lineIdx}-${ti}-${name}`}>
                                                                {ti > 0 && (
                                                                    <span
                                                                        className="inline-block shrink-0 select-none text-base text-text-heading sm:text-lg md:text-xl lg:text-xl"
                                                                        aria-hidden
                                                                    >
                                                                        /
                                                                    </span>
                                                                )}
                                                                <span className="inline-block max-w-full text-base font-black uppercase tracking-wide text-text-heading sm:text-lg md:text-xl lg:text-xl">
                                                                    {name}
                                                                </span>
                                                            </Fragment>
                                                        )
                                                    })}
                                                </p>
                                            </li>
                                        )
                                    })}
                                </ul>

                            </div>
                        </section>
                    ))}
                </div>
                {/* <img src={logo} alt="Dial Forest" className="absolute bottom-0 right-0" /> */}
            </div>
        </div>
    )
}
