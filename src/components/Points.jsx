import { useState } from "react"
import { points } from "../constant"
import { motion } from "framer-motion"

const Points = () => {
    const [selectedId, setSelectedId] = useState(null)

    return (
        <>
            <section class="h-section">
                <div class="h-container">
                    <dl class="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                        {
                            points.map(point => {
                                return (
                                    <>
                                        <motion.article whileHover={{ scale: 1.02 }} whileTap={{ scale: .95 }} class="flex flex-col items-start border p-6 cursor-pointer hover:shadow-sm rounded-lg">
                                            <motion.h3 class="text-purple-900 font-semibold maxMd:text-xl text-2xl">{point.title}</motion.h3>
                                            <motion.p class="h-section-description" style={{ marginBottom: 0, textAlign: 'start', padding: 0 }}>{point.description}</motion.p>
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

export default Points