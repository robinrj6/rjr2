
import { useEffect } from 'react';
import gsap from 'gsap';


export default function ProfileComponent({ profileRef }) {
    const animateProfile = () => {
        gsap.from(profileRef.current, { backgroundColor: "black", duration: 1, delay: -.1 }),
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
                    <span className="red">I</span> am a Computer Science Engineering graduate with nearly two years of industry experience at Capgemini India Pvt Ltd, where I sharpened my Fullstack development skills. Currently, I am pursuing a Master’s in Artificial Intelligence, while working as a Werkstudent Frontend Developer at IMG.LY. I am passionate about crafting intuitive and efficient user interfaces that blend creativity with functionality. Explore my projects and get to know how I can bring technical innovation to life!</p>
            </div>
        </div>
    )
}