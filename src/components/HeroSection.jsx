import { ArrowDown } from "lucide-react";


function HeroSection() {
    return (
        <>
        
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">

                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delayed-1"> Shani</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delayed-2"> Prajapati</span>
                    </h1>
                    <p className="text-xs md:text-sm text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delayed-3">
                        Hello! I'm Shani Prajapati, currently in my second year at GL Bajaj Institute of Technology and Management, pursuing B.Tech in IT.
                        I'm currently strengthening my skills in Data Structures and Algorithms using Java.
                        Alongside DSA, I am also building a foundation in Mern-Stack Development and exploring AI applictions, with the goal of becoming a well-rounded Software Engineer.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delayed-4">
                        <a href="#projects" className="cosmic-button">
                            <span>View My Work</span>
                        </a>
                    </div>

                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform transition-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-xs text-muted-foreground md-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
        
        </>
    )
}
export default HeroSection;