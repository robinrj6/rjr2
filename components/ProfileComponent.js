
import { useEffect } from 'react';
import gsap from 'gsap';


export default function ProfileComponent({ profileRef }) {
    const animateProfile = () => {
        gsap.from(profileRef.current, { backgroundColor: "black", duration: 1, delay: .2 }),
            gsap.from(profileRef.current, { color: "white", duratrion: 1 });
    };

    useEffect(() => {
        const profileObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateProfile();
                    }
                });
            },
            { threshold: 0.001 } // Adjust the threshold as needed
        );

        if (profileRef.current) {
            profileObserver.observe(profileRef.current);
        }

        return () => {
            profileObserver.disconnect();
        };
    }, []);


    return (
        <div className="profile section" ref={profileRef}>
            <div className="textCover text">
                <div className="svg" >
                    <img src="/img/Myproject2.png"
                        alt="Image"
                        className="imageMe" />
                </div>
                <p className="build">
                    <span className="red">M</span>y abiding passion for technology has driven my academic path in computer science and engineering. Alongside a solid academic foundation, I've actively participated in significant projects, including COVID-19 monitoring apps and groundbreaking IoT solutions. My deep learning project on Pneumonia Detection resulted in a published IEEE paper. Proficient in full-stack development, I am enthusiastic about applying my expertise in emerging technologies to contribute to innovative projects.</p>
            </div>
        </div>
    )
}