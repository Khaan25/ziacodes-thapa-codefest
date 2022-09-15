import { NavLink } from 'react-router-dom'
import { footerLinks } from '../constant'
// import { UilTwitter } from '@iconscout/react-unicons'
// import { UilFacebookF } from '@iconscout/react-unicons'
// import { UilLinkedin } from '@iconscout/react-unicons'
import { logo } from '../assets'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <>
            <footer className="p-4 bg-white sm:p-14 dark:bg-gray-800">
                <div className={`vs-container`}>
                    <div className="md:flex md:justify-between gap-8">
                        <div className="maxSm:mt-6 mb-12 md:mb-0">
                            <div className="flex flex-col dark:text-white">
                                <NavLink to="/" className="flex items-end mb-2">
                                    <img src={logo} className="max-w-[250px]" alt="Hostinger Logo" />
                                </NavLink>

                                <p className="text-lg">We are a web hosting provider <br className="sm:block hidden" /> on a mission to bring success to everyone who goes online.</p>
                            </div>
                            {/* <br className="sm:block hidden" /> */}
                        </div>

                        <div className="grid max320:grid-cols-1 grid-cols-2 gap-16 sm:gap-12 sm:grid-cols-3">
                            {
                                footerLinks.map((footerLink, index, arr) => (
                                    <div key={index + 1}>
                                        <h2 className="mb-6 font-semibold text-purple-900 uppercase dark:text-white">{footerLink.title}</h2>
                                        <ul className="text-gray-600 dark:text-gray-400">
                                            {
                                                footerLink.links.map((link, index, arr) => (
                                                    <li key={link.name} className={`text-lg ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}><a href={link.link} target={'_blank'} className="hover:underline">{link.name}</a></li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="block text-gray-500 maxSm:text-center dark:text-gray-400">&copy; {new Date().getFullYear()} <a href="https://zia.vennsol.pk" className="hover:underline">ZiaCodes</a>. All Rights Reserved.</span>
                        <a href="https://www.hostinger.com/" target={'_blank'} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">Offical Website</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer