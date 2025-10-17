import React, { useState } from "react";
import { cn } from "../lib/Utiis";

const skills = [
    // programming languages
    {name: "Java", level: "90", category: "Programming"},
    {name: "Python", level: "70", category: "Programming"},
    // frontend
    {name: "HTML", level: "90", category: "Frontend"},
    {name: "CSS", level: "90", category: "Frontend"},
    {name: "JavaScript", level: "80", category: "Frontend"},
    {name: "React", level: "80", category: "Frontend"},
    // backend
    {name: "Node.js", level: "80", category: "Backend"},
    {name: "Express", level: "80", category: "Backend"},
    {name: "MongoDB", level: "80", category: "Database"},
    // {name: "SQL", level: "10", category: "Database"},
    // tools
    {name: "Git and GitHub", level: "70", category: "Tools"},
    {name: "Docker", level: "70", category: "Tools"},
];

const categories = ["All","Programming", "Frontend", "Backend", "Database", "Tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "All" || skill.category === activeCategory
    );

    return (
        <>
        
        <section
            id="skills"
            className="py-24 px-4 relative bd-secondary/30"
        >

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span> 
                </h2>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map( (category, key) => (
                        <button
                            key={key}
                            onClick={ () => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                "cursor-pointer",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* we going to replace skills.map into filteredSkills.map */}
                    {filteredSkills.map( (skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="text-lg font-semibold">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 rounded-full overflow-hidden h-2">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-in-out]"
                                    style={{ width: `${skill.level}%` }}     /* width: skill.level + "%" */
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>    
        </section>
        
        </>
    )
}