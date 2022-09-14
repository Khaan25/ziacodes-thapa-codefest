import React, { useEffect, useState } from 'react'
import { UilTimes } from '@iconscout/react-unicons'

const HeaderBanner = () => {
    const [hideBanner, setHideBanner] = useState(true)
    const ToggleBanner = () => setHideBanner(true)

    useEffect(() => {
        setTimeout(() => {
            setHideBanner(false)
        }, 2000)
    }, [])

    return (
        <>
            <div tabIndex="-1" className={`${hideBanner ? 'hidden' : 'maxMd:hidden p-2 rounded-sm  w-full bg-gray-50 border border-b border-gray-200z-50'}`}>
                <div className="h-container  flex items-center justify-between">
                    <p className="flex items-center gap-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <img loading="eager" data-srcset="https://assets.hostinger.com/images/flags/ua-flag@2x-dc66b9ac24.png 2x,
                https://assets.hostinger.com/images/flags/ua-flag-723e5b9de9.png 1x" src="data:image/webp;base64,UklGRtQAAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSD0AAAARL0CkbZubmKGJOH9EBH0GBZFsJe8zBJAE1oAhgDfg9a+DFIjo/wTguAFsHlPVMkhSV/KHtbWfMzkxgtMAAFZQOCBwAAAAEAIAnQEqEAAQAAVAfCWwAnQGLkPLp1FX8AD6hHFbXXhxBdfsLYJrus5Ahva90D9O2LJ2LKV5fXEQuUYSYPQPrqUkdBhUjkSwl3lUXc29UJ5qvavrs8azb7154BM/5tOgoObe9XC0T6skOgfqAMAAAA==" width="32" height="32" alt="Ukraine flag" srcSet="https://assets.hostinger.com/images/flags/ua-flag@2x-dc66b9ac24.png 2x,
                https://assets.hostinger.com/images/flags/ua-flag-723e5b9de9.png 1x"/>
                        We stand with Ukraine. To make an impact, please consider <a href="https://bank.gov.ua/en/about/humanitarian-aid-to-ukraine" target="_blank" rel="nofollow" className="-mx-1 text-purple-500 hover:text-purple-800 hover:underline">donating</a>.</p>
                    <button onClick={ToggleBanner} type="button" className="flex items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"><UilTimes /></button>
                </div>
            </div>
        </>
    )
}

export default HeaderBanner