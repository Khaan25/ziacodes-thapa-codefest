import { UilAngleDoubleUp } from '@iconscout/react-unicons'
import { useState } from 'react'

const ScrollUp = () => {
    const [ShowScrollUp, setShowScrollUp] = useState(false)

    function checkScroll() {
        this.scrollY >= 200 ? setShowScrollUp(true) : setShowScrollUp(false)
    }

    const ScrollUp = () => window.scrollTo(0, 0)

    window.addEventListener("scroll", checkScroll)

    return (
        <>
            <div onClick={ScrollUp} className={`${ShowScrollUp ? 'bottom-20' : 'bottom-[-20%]'} z-50 inline-flex fixed right-8 p-1 rounded bg-purple-800 hover:bg-purple-900 hover:-translate-y-1 text-white transition-all duration-300 shadow-md cursor-pointer`}><UilAngleDoubleUp size="30" /></div>
        </>
    )
}

export default ScrollUp