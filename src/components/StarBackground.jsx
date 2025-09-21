import React, { use, useState, useEffect } from 'react';

// id, size, x, y, opacity, animationDuration
// id, size, x, y, animationDelay, animationDuration

function StarBackground() {

    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
            // generateMeteors();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    
    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

        const newStars = [];
        
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, // Size between 1 and 4
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5, // Opacity between 0.5 and 1
                animationDuration: Math.random() * 4 + 2, // Duration between 2s and 6s
            });
        }
        setStars(newStars);
    };


    const generateMeteors = () => {
        const numberOfMeteors = 4; // Fixed number of meteors

        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1, // Size between 1 and 3
                x: Math.random() * 100,
                y: Math.random() * 40,
                delay : Math.random() * 15, // Delay between 0s and 15s
                animationDuration: Math.random() * 3 + 3, // Duration between 3s and 6s
            });
        }
        setMeteors(newMeteors);
    };


    return (
        <>
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map( (star) => (
            <div
                key={star.id}
                className="star animate-pluse-subtle"  /* absolute bg-white rounded-full animate-twinkle */
                style={{
                    width: `${star.size}px`,    /* star.size + "px" instead of `${star.size}px` */
                    height: `${star.size}px`,
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    opacity: star.opacity,
                    animationDuration: `${star.animationDuration}s`,
                }}
            />
        ))}

        {meteors.map( (meteor) => (
            <div
                key={meteor.id}
                className="meteor animate-meteor"  /* absolute bg-white rounded-full animate-twinkle */
                style={{
                    width: `${meteor.size * 20}px`, 
                    height: `${meteor.size}px`,
                    left: `${meteor.x}%`,
                    top: `${meteor.y}%`,
                    animationDelay: `${meteor.animationDelay}s`,
                    animationDuration: `${meteor.animationDuration}s`,
                }}
            />
        ))}
        </div>
        </>
    )
}
export default StarBackground;
