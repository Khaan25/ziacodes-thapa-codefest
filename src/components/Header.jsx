import { useState } from "react"
import { NavLink } from "react-router-dom"
import { UilApps } from '@iconscout/react-unicons'
import { UilAngleDown } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import { logo } from '../assets'
import { motion } from "framer-motion"

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

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <>
            <header className={`${ActiveHeader ? 'shadow-[0_1px_20px_7px_rgba(0,0,0,.1)] bg-white border-gray-200 text-black fixed top-0 left-0 w-full' : 'text-white '} h-header `}>
                <div className="flex items-center justify-between w-full h-container">
                    <NavLink to={'/'} className="uppercase font-semibold tracking-wider"><img src={logo} className={`max-w-[130px] ${ActiveHeader ? 'brightness-0 invert-0' : 'brightness-0 invert'}`} alt="Venn Solution Logo" /></NavLink>

                    <nav className={`h-nav h-full maxMd:p-5 ${ShowMenu ? 'left-0 bg-white text-black shadow-2xl' : ''}`}>
                        <div className="h-nav__content">
                            <motion.ul variants={container} whileInView={'visible'} initial="hidden" className="h-nav__menu">
                                <motion.a variants={item} href="index.html" className="nav__perfil">
                                    <div className="nav__img">
                                        <img src="assets/images/logo.jpg" alt="" />
                                    </div>

                                    <img src={logo} className="md:hidden max-w-[130px] mx-auto mb-8 brightness-0" alt="Hostinger Logo" />
                                </motion.a>

                                <ul className="h-nav__list">
                                    <motion.li variants={item} className="nav__item h-dropdown">
                                        <a className="h-nav__link h-dropdown__link">Hosting <div className="h-dropdown__icon"><UilAngleDown /></div></a>

                                        <ul className="h-dropdown__menu">
                                            <li onClick={CloseMenu} className="h-dropdown__item"><a href="https://www.hostinger.com/web-hosting" className="h-nav__link">Web Hosting</a></li>
                                            <li onClick={CloseMenu} className="h-dropdown__item"><a href="https://www.hostinger.com/cloud-hosting" className="h-nav__link">Cloud Hosting</a></li>
                                            <li onClick={CloseMenu} className="h-dropdown__item"><a href="https://www.hostinger.com/wordpress-hosting" className="h-nav__link">WordPress Hosting</a></li>
                                            <li onClick={CloseMenu} className="h-dropdown__item"><a href="https://www.hostinger.com/agency-hosting" className="h-nav__link">Hosting for Agencies</a></li>
                                        </ul>
                                    </motion.li>

                                    <motion.li variants={item} className="nav__item h-dropdown">
                                        <a className="h-nav__link h-dropdown__link">VPS <div className="h-dropdown__icon"><UilAngleDown /></div></a>

                                        <ul className="h-dropdown__menu">
                                            <li onClick={CloseMenu} className="h-dropdown__item"><a href="https://www.hostinger.com/vps-hosting" className="h-nav__link">VPS Hosting</a></li>
                                            <li onClick={CloseMenu} className="h-dropdown__item"><a href="https://www.hostinger.com/cyberpanel-vps-hosting" className="h-nav__link">CyberPanel Hosting</a></li>
                                            <li onClick={CloseMenu} className="h-dropdown__item"><a href="https://www.hostinger.com/minecraft-server-hosting" className="h-nav__link">Minecraft Server Hosting</a></li>
                                        </ul>
                                    </motion.li>

                                    <motion.li variants={item} className="nav__item h-dropdown">
                                        <a className="h-nav__link h-dropdown__link">Domain <div className="h-dropdown__icon"><UilAngleDown /></div></a>

                                        <ul className="h-dropdown__menu">
                                            <li onClick={CloseMenu} className="h-dropdown__item"><a href="https://www.hostinger.com/domain-checker" className="h-nav__link">Domain Checker</a></li>
                                            <li onClick={CloseMenu} className="h-dropdown__item"><a href="https://www.hostinger.com/whois" className="h-nav__link">WHOIS Lookup</a></li>
                                            <li onClick={CloseMenu} className="h-dropdown__item"><a href="https://www.hostinger.com/transfer-domain" className="h-nav__link">Domain Transfer</a></li>
                                        </ul>
                                    </motion.li>

                                    <motion.li variants={item} onClick={CloseMenu} className="nav__item maxMd:mt-5"><NavLink to={'/login'} className="h-nav__link bg-purple-600 hover:bg-purple-500 font-normal text-white px-6 py-2 rounded-full md:bg-purple-500 md:hover:bg-purple-400">Login</NavLink></motion.li>
                                </ul>
                            </motion.ul>
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