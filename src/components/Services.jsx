import React from 'react'
import { services } from '../constant'

const Services = () => {
    return (
        <>
            <section class="h-section">
                <div class="h-container">
                    <h2 class="h-section-title">Designed for business teams like yours</h2>
                    <p class="h-section-description">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>

                    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-7">
                        {
                            services.map(service => {
                                return (
                                    <>
                                        <div className="h-service-card">
                                            <img src={service.img} alt={service.title} />
                                            <h3 class="h-service-card-title">{service.title}</h3>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services