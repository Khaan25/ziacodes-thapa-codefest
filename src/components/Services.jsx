import React from 'react'
import { services } from '../constant'
import { motion } from "framer-motion"

const Services = () => {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: .1,
                staggerChildren: .1
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
            <section class="h-section">
                <div class="h-container">
                    <h2 class="h-section-title">Designed for business teams like yours</h2>
                    <p class="h-section-description">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>

                    <motion.div variants={container} whileInView={'visible'} initial="hidden" class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-7">
                        {
                            services.map(service => {
                                return (
                                    <>
                                        <motion.div variants={item} className="h-service-card">
                                            <img src={service.img} alt={service.title} />
                                            <h3 class="h-service-card-title">{service.title}</h3>
                                        </motion.div>
                                    </>
                                )
                            })
                        }
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Services