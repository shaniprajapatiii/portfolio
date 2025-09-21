import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return (
        <>
        
        <section 
            id="about"
            className="py-24 px-4 relative"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* first grid item */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Lorem ipsum dolor sit amet.</h3>
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quasi tenetur inventore eaque repellat voluptate blanditiis alias veniam natus facere.
                        </p>
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, ipsum. Possimus quae obcaecati laborum dolor deleniti quaerat quos iusto. Natus!
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> Get In Touch</a>
                            <a 
                                href="https://drive.google.com/file/d/1gon3FEZmwsbJtsVifhIqoaYkgVfDB0dx/view?usp=sharing" 
                                className="px-6 py-2 border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                                target="_blank"
                            >
                                See My Resume
                            </a>
                        </div>
                    </div>
                    {/* second grid item */}
                    <div className="grid grid-col-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="text-primary w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <h5 className="text-lg font-semibold">Web Development</h5>
                                    <p className="text-muted-foreground text-sm">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="text-primary w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <h5 className="text-lg font-semibold">UI/UX Design</h5>
                                    <p className="text-muted-foreground text-sm">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="text-primary w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <h5 className="text-lg font-semibold">Project Management</h5>
                                    <p className="text-muted-foreground text-sm">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}