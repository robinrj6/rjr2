import { useEffect } from "react";

import { gsap } from "gsap";
import { FaEnvelope, FaEnvelopeSquare, FaGithub, FaInstagram, FaLinkedin, FaMailchimp, FaPhone, FaPhoneAlt, FaPhoneSlash, FaPhoneSquare, FaPhoneSquareAlt, FaWhatsapp, } from "react-icons/fa";

export default function ContactComponent({ contactRef }) {
    const animateProfile = () => {
        gsap.from(contactRef.current, { backgroundColor: "white", duration: 1, delay: -.1 }),
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
                        <h2><span className="red">R</span>obin Jose Raju</h2>
                        <br />
                        <p>
                            Spardorfer Straße 38,<br />
                            Erlangen 91054,<br />
                            Germany<br/>
                            <br />
                            Mob. No.: +49 1635241542<br />
                            Email: robinrjr10germany@gmail.com <br />
                        </p>
                    </div>
                    <div className="flip-back">
                        <h2><span className="red">R</span>obin Jose Raju</h2>
                        <div className="icon">
                            <a href="tel:491635241542"><span className="item"><FaPhoneAlt className="phone i" /></span></a>
                            <a href="mailto:robinrjr10germany@gmail.com"><span className="item"><FaEnvelope className="mail i" /></span></a>
                            <a href="https://www.instagram.com/_rjr10_/"><span className="item"><FaInstagram className="insta i" /></span></a>
                            <a href="https://api.whatsapp.com/send?phone=919526628112"><span className="item"><FaWhatsapp className="wa i" /></span></a>
                            <a href="https://www.linkedin.com/in/robin-jose-raju-1522b01a2/"><span className="item"><FaLinkedin className="lin i" /></span></a>
                            <a href="https://github.com/robinrj6"><span className="item"><FaGithub className="git i" /></span></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}