
import { useEffect, React } from 'react';
import gsap from 'gsap';
import TagCloud from '@frank-mayer/react-tag-cloud';
import "../styles/skills.css";

export default function SkillsComponent({ skillsRef }) {

    function getRadius(innerWidth, innerHeight) {
        if (innerWidth <= 600) {
            return Math.min(300, innerWidth, innerHeight) / 2;
        } else if (innerWidth <= 1200) {
            return Math.min(500, innerWidth, innerHeight) / 2;
        } else {
            return Math.min(800, innerWidth, innerHeight) / 2;
        }
    }

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
            <TagCloud
                options={(w) => ({
                    radius: getRadius(w.innerWidth, w.innerHeight),
                    maxSpeed: "fast",
                })}
                onClick={(tag, ev) => alert(tag)}
                onClickOptions={{ passive: true }}
                className='tagCloud'
            >
                {[
                    "VSCode",
                    "C/C++",
                    "React",
                    "Python",
                    "Java",
                    "Springboot",
                    "NextJs",
                    "HTML",
                    "CSS",
                    "Javascript",
                    "Three.js",
                    "Web Development",
                    "PHP",
                    "Rest API",
                    "NodeJs",
                    "MySQL",
                    "PostgreSQL",
                    "OracleDB",
                    "MongoDB",
                    "Angular",
                    "Express",
                    "Git",
                ]}
            </TagCloud>
        </div>
    )
}