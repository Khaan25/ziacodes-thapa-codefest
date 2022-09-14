import { useState } from "react"
import { Link } from "react-router-dom"
import { UilApps } from '@iconscout/react-unicons'
import { UilAngleDown } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'

const Header = () => {
    const [ActiveHeader, setActiveHeader] = useState(false)
    const [ShowMenu, setShowMenu] = useState(false)

    function scrollHeader() {
        if (this.scrollY >= 20) setActiveHeader(true)
        else setActiveHeader(false)
    }

    window.addEventListener('scroll', scrollHeader)

    const CloseMenu = () => setShowMenu(false)
    const OpenMenu = () => setShowMenu(true)

    return (
        <>
            <header className={`${ActiveHeader ? 'shadow-[0_1px_20px_7px_rgba(0,0,0,.1)] bg-white border-gray-200 text-black fixed top-0 left-0 w-full' : 'text-white '} h-header `}>
                <div className="flex items-center justify-between w-full h-container">
                    <Link to={'/'} className="uppercase font-semibold tracking-wider">
                        HOSTINGER
                    </Link>

                    <nav className={`h-nav h-full maxMd:p-5 ${ShowMenu ? 'left-0 bg-white text-black shadow-2xl' : ''}`}>
                        <div className="h-nav__content">
                            <div className="h-nav__menu">
                                <a href="index.html" className="nav__perfil">
                                    <div className="nav__img">
                                        <img src="assets/images/logo.jpg" alt="" />
                                    </div>

                                    <h1 className="md:hidden uppercase font-semibold tracking-wider text-center mb-10">HOSTINGER</h1>
                                </a>

                                <ul className="h-nav__list">
                                    {/* <li className="h-nav__item"><a href="#" className="h-nav__link active-link">Home</a></li> */}

                                    <li className="nav__item h-dropdown">
                                        <a href="#" className="h-nav__link h-dropdown__link">Hosting <div className="h-dropdown__icon"><UilAngleDown /></div></a>

                                        <ul className="h-dropdown__menu">
                                            <li onClick={CloseMenu} className="h-dropdown__item"><a href="#" className="h-nav__link">Web Hosting</a></li>
                                            <li onClick={CloseMenu} className="h-dropdown__item"><a href="#" className="h-nav__link">Cloud Hosting</a></li>
                                            <li onClick={CloseMenu} className="h-dropdown__item"><a href="#" className="h-nav__link">WordPress Hosting</a></li>
                                            <li onClick={CloseMenu} className="h-dropdown__item"><a href="#" className="h-nav__link">Hosting for Agencies</a></li>
                                        </ul>
                                    </li>

                                    <li className="nav__item h-dropdown">
                                        <a href="#" className="h-nav__link h-dropdown__link">VPS <div className="h-dropdown__icon"><UilAngleDown /></div></a>

                                        <ul className="h-dropdown__menu">
                                            <li onClick={CloseMenu} className="h-dropdown__item"><a href="#" className="h-nav__link">VPS Hosting</a></li>
                                            <li onClick={CloseMenu} className="h-dropdown__item"><a href="#" className="h-nav__link">CyberPanel Hosting</a></li>
                                            <li onClick={CloseMenu} className="h-dropdown__item"><a href="#" className="h-nav__link">Minecraft Server Hosting</a></li>
                                        </ul>
                                    </li>

                                    <li className="nav__item h-dropdown">
                                        <a href="#" className="h-nav__link h-dropdown__link">Domain <div className="h-dropdown__icon"><UilAngleDown /></div></a>

                                        <ul className="h-dropdown__menu">
                                            <li onClick={CloseMenu} className="h-dropdown__item"><a href="#" className="h-nav__link">Domain Checker</a></li>
                                            <li onClick={CloseMenu} className="h-dropdown__item"><a href="#" className="h-nav__link">WHOIS Lookup</a></li>
                                            <li onClick={CloseMenu} className="h-dropdown__item"><a href="#" className="h-nav__link">Domain Transfer</a></li>
                                        </ul>
                                    </li>

                                    <li onClick={CloseMenu} className="nav__item maxMd:mt-5"><a href="#" className="h-nav__link bg-purple-600 hover:bg-purple-500 font-normal text-white px-6 py-2 rounded-full md:bg-purple-500 md:hover:bg-purple-400">Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                {
                    ShowMenu ? <div onClick={CloseMenu} className="md:hidden cursor-pointer md:select-none md:pointer-events-none"><UilTimes /></div> : <div onClick={OpenMenu} className="cursor-pointer md:hidden md:select-none md:pointer-events-none"><UilApps /></div>
                }

            </header>
        </>
    )
}

export default Header