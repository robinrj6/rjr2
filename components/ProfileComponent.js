import "../styles/profile.css";
import { useEffect } from 'react';
import gsap from 'gsap';

export default function ProfileComponent({ profileRef }) {   
    const animateProfile = () => {
        gsap.from(profileRef.current, { backgroundColor: "black", duration: 1, delay: .2 }),
        gsap.from(profileRef.current, { color: "white", duratrion: .5 });
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
            <div>   
        Plassdjfhkajshgd
            </div>
        </div>

    )
}