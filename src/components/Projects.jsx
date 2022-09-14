import { projects } from "../constant"

const Projects = () => {
    return (
        <>
            <section class="h-section">
                <div class="h-container">
                    <dl class="grid gap-8 sm:grid-cols-3">
                        {
                            projects.map(project => {
                                return (
                                    <>
                                        <div class="flex flex-col items-center justify-center">
                                            <dt class="h-section-title">{project.number}</dt>
                                            <dd class="h-section-description" style={{ marginBottom: 0 }}>{project.title}</dd>
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

export default Projects