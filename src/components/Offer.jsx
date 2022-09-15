import { motion } from "framer-motion"
import { offers } from "../constant"

const Offer = () => {
    return (
        <>
            <section class="h-section">
                <div class="h-container">
                    <dl class="grid gap-10 min568:grid-cols-2 md:grid-cols-3">
                        {
                            offers.map(offer => {
                                return (
                                    <>
                                        <motion.article whileHover={{ scale: 1.05 }}  class="flex flex-col items-start justify-between gap-6 border border-gray-200 rounded-lg p-8 cursor-pointer hover:bg-slate-50 hover:shadow-[0_10px_26px_-2px_rgba(0,0,0,.1)]">
                                            <div>
                                                <h2 class="text-purple-900 font-semibold maxMd:text-xl text-2xl">{offer.title}</h2>
                                                <p class="h-section-description" style={{ marginBottom: 0, textAlign: 'left', padding: 0 }}>{offer.description}</p>
                                            </div>

                                            <div class="flex justify-center items-baseline">
                                                <span class="mr-2 text-4xl font-bold">${offer.price}</span>
                                                <span class="text-gray-500 dark:text-gray-400 text-sm">/month</span>
                                            </div>
                                        </motion.article>
                                    </>
                                )
                            })
                        }
                    </dl>
                </div>
            </section>
        </>
    )
}

export default Offer