import type { CSSProperties } from 'react'
import { Fragment } from 'react'
import { LINEUP_SECTIONS, tokensFromLine } from './lineupData'
import logo from '../../assets/logo.svg'
export const Artists = () => {
    return (
        <div className="p-5 md:p-8">
            <h1 className="mb-6 text-4xl font-medium tracking-tight text-text-heading md:mb-8 md:text-5xl">
                Lineup
            </h1>

            <div className="lineup-shell relative overflow-hidden rounded-xl border border-text-heading/20 bg-text-heading px-4 py-8 text-brand shadow-[8px_8px_0_0_rgba(8,6,13,0.12)] md:px-10 md:py-12">
                <div className="lineup-noise pointer-events-none" aria-hidden />
                <div className="lineup-scan pointer-events-none" aria-hidden />
                <div className="relative z-1 flex flex-col gap-10 md:gap-14">
                    {LINEUP_SECTIONS.map(section => (
                        <section key={section.id} aria-labelledby={`lineup-${section.id}`}>
                            <h2
                                id={`lineup-${section.id}`}
                                className="lineup-section-title mb-4 text-2xl inline-block font-mono font-semibold tracking-[0.35em] uppercase"
                            >
                                {section.title}
                            </h2>
                            <div className="lineup-section-content" >
                                <ul className="m-0 list-none space-y-4 p-0 md:space-y-5">
                                    {section.lines.map((line, lineIdx) => {
                                        const tokens = tokensFromLine(line)
                                        if (tokens.length === 0) return null
                                        return (
                                            <li key={`${section.id}-${lineIdx}`} className="leading-snug">
                                                <p className="m-0 flex flex-wrap items-baseline gap-x-1 gap-y-2">
                                                    {tokens.map((name, ti) => {
                                                        /*   const j = nameJitter(section.id, lineIdx, ti, name) */
                                                        return (
                                                            <Fragment key={`${lineIdx}-${ti}-${name}`}>
                                                                {ti > 0 && (
                                                                    <span
                                                                        className="select-none font-mono text-brand/45" style={
                                                                            {
                                                                                display: 'inline-block',
                                                                                fontSize: `1.5em`,

                                                                            } as CSSProperties
                                                                        }
                                                                        aria-hidden
                                                                    >
                                                                    //
                                                                    </span>
                                                                )}
                                                                <span
                                                                    className="lineup-name font-mono font-semibold tracking-wide uppercase"
                                                                    style={
                                                                        {
                                                                            display: 'inline-block',
                                                                            fontSize: `1.5em`,

                                                                        } as CSSProperties
                                                                    }
                                                                >
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
                <img src={logo} alt="Dial Forest" className="absolute bottom-0 right-0" />
            </div>
        </div>
    )
}
