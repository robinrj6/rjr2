import "../styles/profile.css";
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
                <img src="/img/Myproject1.jpg"
                    alt="Image"
                    className="imageMe"/>
                <p className="build">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}