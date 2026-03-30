import { useState } from 'react'
import { NavLink, Outlet } from 'react-router'
import logo from '../assets/logo.svg'

const NAV_LINKS = [
    { to: '/about', label: 'ABOUT' },
    { to: '/artists', label: 'ARTISTS' },
    { to: '/transport', label: 'TRANSPORT' },
    { to: '/accommodation', label: 'ACCOMMODATION' },
]

export const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(prev => !prev)
    const closeMenu = () => setMenuOpen(false)

    return (
        <div className="flex min-h-svh flex-col">
            <header className=" sticky top-0 z-50 flex items-center justify-between p-3 md:p-4">
                <NavLink to="/" onClick={closeMenu}>
                    <img src={logo} alt="Dial Forest" className="block h-15 w-auto" />
                </NavLink>

                <button
                    className="z-50 flex flex-col justify-center gap-[5px] border-none bg-transparent p-2 md:hidden"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span className={`block h-0.5 w-6 rounded-sm bg-text-heading transition-all duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
                    <span className={`block h-0.5 w-6 rounded-sm bg-text-heading transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block h-0.5 w-6 rounded-sm bg-text-heading transition-all duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
                </button>

                <nav className={`
                    fixed inset-0 top-[53px] z-40 flex flex-col gap-1 bg-bg p-5 transition-transform duration-300 ease-in-out
                    md:static md:flex-row md:gap-2 md:bg-transparent md:p-0 md:translate-x-0
                    ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    {NAV_LINKS.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                `rounded-lg px-4 py-3.5 text-lg font-medium no-underline transition-colors duration-200 md:rounded-md md:px-4 md:py-2 md:text-[15px] ${isActive
                                    ? 'underline'
                                    : 'text-text hover:bg-accent-bg hover:text-text-heading'
                                }`
                            }
                            onClick={closeMenu}
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>
            </header>

            <main className="flex flex-1 flex-col overflow-visible">
                <Outlet />
            </main>

            {/*      <footer className="border-t border-border px-5 py-5 text-center text-[13px] text-text md:px-8 md:py-6">
                <p>&copy; {new Date().getFullYear()} Dial Forest. All rights reserved.</p>
            </footer> */}
        </div>
    )
}
