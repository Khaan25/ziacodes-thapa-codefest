import React from 'react'
import Clients from './Clients'
import Hero from './Hero'
import Offer from './Offer'
import Points from './Points'
import Pricing from './Pricing'
import Projects from './Projects'
import Services from './Services'
import Testimonials from './Testimonials'

const Home = () => {
    return (
        <>
            <Hero />
            <Clients />
            <Pricing />
            <Services />
            <Projects />
            <Testimonials />
            <Points />
            <Offer />
        </>
    )
}

export default Home