import { points } from "../constant"

const Points = () => {
    return (
        <>
            <section class="h-section">
                <div class="h-container">
                    <dl class="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                        {
                            points.map(point => {
                                return (
                                    <>
                                        <div class="flex flex-col items-start border p-6 cursor-pointer hover:shadow-sm rounded-lg">
                                            <dt class="text-purple-900 font-semibold maxMd:text-xl text-2xl">{point.title}</dt>
                                            <dd class="h-section-description" style={{ marginBottom: 0, textAlign: 'start', padding: 0 }}>{point.description}</dd>
                                        </div>
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