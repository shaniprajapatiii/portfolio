import { ArrowRight, ExternalLink, Github } from "lucide-react"


const projects = [
    {
        id: 1,
        title: "Live Weather Site",
        description: "A beautiful page app using React and Tailwind.",
        image: "/WeatherMap.png",
        tags: ["React", "Tailwind", "API"],
        projectUrl: "#",
        githubUrl: "https://github.com/shaniprajapatiii",
    },
    // {
    //     id: 2,
    //     title: "Crop Yield Predictor",
    //     description: "Predict crop yields based on various factors.",
    //     image: "/WeatherMap.png",
    //     tags: ["Machine Learning", "Python", "API"],
    //     projectUrl: "#",
    //     githubUrl: "https://github.com/shaniprajapatiii",
    // },
]


export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 sm:px-6 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl font-bold  text-center md:text-4xl mb-4">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A selection of projects showcasing my skills and experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {projects.map( (project, key) => (
                        <div 
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover" 
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-conver transition-transform duration-500 group-hover:scale-107"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map( (tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/25 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1"> 
                                    {project.title} 
                                </h3>

                                <p className="text-muted-foreground text-sm mb-4"> 
                                    {project.description} 
                                </p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.projectUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300" >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        href="https://github.com/shaniprajapatiii" target="_blank"
                        className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                    >
                        Check My Github <ArrowRight />
                    </a>
                </div>
            </div>
        </section>
    )
}