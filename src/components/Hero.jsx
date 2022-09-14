const Hero = () => {
    return (
        <>
            <section className="h-section h-hero bg-white dark:bg-gray-900 -mt-12 md:-mt-28">
                <div className="maxMd:pt-16 px-4 mx-auto h-container text-center lg:px-12">
                    <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                        <span className="text-xs bg-purple-600 rounded-full text-white px-4 py-1.5 mr-3">Sale</span> <span className="text-sm font-medium">All in one Offer only for $2.99</span>
                        <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    </a>

                    <h1 className="mb-4 text-2xl font-bold leading-none text-white md:text-3xl lg:text-5xl">Savings to Set Your Website in Motion</h1>
                    <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">Get things moving with a free domain, lifetime SSL, and DDoS protection included with a yearly subscription.</p>
                    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="#" className="inline-flex justify-center items-center py-4 px-10 text-base font-medium text-center text-white rounded-full bg-pink-700 hover:bg-pink-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500">
                            Learn more
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>

                    {/* <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                        <span className="font-semibold text-gray-400 uppercase">FEATURED IN</span>
                        <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
                            
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default Hero