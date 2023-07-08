import { useEffect } from "react";
import "../styles/contact.css";
import { gsap } from "gsap";
import { Card, CardHeader, CardTitle } from "reactstrap";

export default function ContactComponent({ contactRef }) {
    const animateProfile = () => {
        gsap.from(contactRef.current, { backgroundColor: "white", duration: 1, delay: .2 }),
            gsap.from(contactRef.current, { color: "black", duratrion: 1 });
    };

    useEffect(() => {
        const contactObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateProfile();
                    }
                });
            },
            { threshold: 0.001 } // Adjust the threshold as needed
        );

        if (contactRef.current) {
            contactObserver.observe(contactRef.current);
        }

        return () => {
            contactObserver.disconnect();
        };
    }, []);
    return (
        <div className="contact section" ref={contactRef}>
            <div className="flip">
                <div className="flip-content">
                    <div className="flip-front">
                    <h2>Robin Jose Raju</h2>
                        <br />
                        <p>
                            Thannivelil(H),<br />
                            Chirakkadavu P.O.,<br />
                            Kanjirappally, Kottayam(Dist),<br />
                            Kerala, India<br />
                            PIN: 686520<br />
                            <br />
                            Mob. No.: +91 9526628112<br />
                            Email: robinrjr10@gmail.com <br />
                        </p>
                    </div>
                    <div className="flip-back">
                    <p>Software Engineer</p>
                        <p>Front-end Developer</p>
                        <p>Full-Stack Developer</p>
                    </div>
                </div>
            </div>

        </div>
    );

}