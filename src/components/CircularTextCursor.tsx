import { useEffect, useRef, useState } from 'react';

const RING_PHRASE =
    'Parque do complexo o corgo · '.repeat(2).trim();

export function CircularTextCursor() {
    const [active, setActive] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const targetRef = useRef({ x: 0, y: 0 });
    const posRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef(0);
    const syncedRef = useRef(false);

    useEffect(() => {
        const okPointer = window.matchMedia('(pointer: fine)').matches;
        const okHover = window.matchMedia('(hover: hover)').matches;
        const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;

        if (!okPointer || !okHover || reduceMotion) return;

        setActive(true);
    }, []);

    useEffect(() => {
        if (!active) return;

        document.body.classList.add('has-custom-cursor');

        const ease = 0.14;

        const tick = () => {
            posRef.current.x +=
                (targetRef.current.x - posRef.current.x) * ease;
            posRef.current.y +=
                (targetRef.current.y - posRef.current.y) * ease;

            const el = rootRef.current;
            if (el) {
                const { x, y } = posRef.current;
                el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
            }

            rafRef.current = requestAnimationFrame(tick);
        };

        const onMove = (e: MouseEvent) => {
            targetRef.current = { x: e.clientX, y: e.clientY };
            if (!syncedRef.current) {
                posRef.current = { x: e.clientX, y: e.clientY };
                syncedRef.current = true;
            }
        };

        const onLeave = () => {
            targetRef.current = { x: -9999, y: -9999 };
        };

        rafRef.current = requestAnimationFrame(tick);
        window.addEventListener('mousemove', onMove);
        document.documentElement.addEventListener('mouseleave', onLeave);

        return () => {
            document.body.classList.remove('has-custom-cursor');
            window.removeEventListener('mousemove', onMove);
            document.documentElement.removeEventListener(
                'mouseleave',
                onLeave,
            );
            cancelAnimationFrame(rafRef.current);
        };
    }, [active]);

    if (!active) return null;

    return (
        <div
            ref={rootRef}
            className="pointer-events-none fixed top-0 left-0 z-9999 h-18 w-18 will-change-transform md:h-20 md:w-20"
            aria-hidden
        >
            <div className="cursor-text-ring spin h-full w-full text-text-heading">
                <svg
                    className="h-full w-full overflow-visible"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <path
                            id="cursor-ring-path"
                            fill="none"
                            d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                        />
                    </defs>
                    <text
                        className="fill-current font-sans font-bold"
                        fontSize="16px"
                        style={{ letterSpacing: '0.04em' }}
                    >
                        <textPath href="#cursor-ring-path" startOffset="0%">
                            {RING_PHRASE}
                        </textPath>
                    </text>
                </svg>
            </div>
        </div>
    );
}
