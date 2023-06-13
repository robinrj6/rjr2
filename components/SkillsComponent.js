
import { useEffect } from 'react';
import gsap from 'gsap';


export default function SkillsComponent({ skillsRef }) {
    const animateProfile = () => {
        gsap.from(skillsRef.current, { backgroundColor: "white", duration: 1, delay: .2 }),
            gsap.from(skillsRef.current, { color: "black", duratrion: .5 });
    };

    useEffect(() => {
        const skillsObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateProfile();
                    }
                });
            },
            { threshold: 0.001 } // Adjust the threshold as needed
        );

        if (skillsRef.current) {
            skillsObserver.observe(skillsRef.current);
        }

        return () => {
            skillsObserver.disconnect();
        };
    }, []);


    return (
        <div className="skills section" ref={skillsRef}>
            <div>
                Skills Component
            </div>
        </div>
    )
}