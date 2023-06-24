import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import "../styles/certif.css";
import data from "../public/dataCertif.json";


export default function CertificationComponent({ certifRef, OpenRef }) {

    const [showSection, setShowSection] = useState(false);
    const [selectedCert, setSelectedCert] = useState("");
    const newSection = useRef(null);

    const animatecertifExp = () => {
        gsap.from(certifRef.current, { backgroundColor: "black", duration: 1, delay: .2 }),
            gsap.from(certifRef.current, { color: "white", duratrion: 1 });
    };



    useEffect(() => {
        const certifExpObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animatecertifExp();
                    }
                });
            },
            { threshold: 0.001 } // Adjust the threshold as needed
        );

        if (certifRef.current) {
            certifExpObserver.observe(certifRef.current);
        }
        return () => {
            certifExpObserver.disconnect();
        };
    }, []);


    const handleClick = (temp) => {
        setSelectedCert(temp);
        console.log("hello " + data[temp].course[0].name);
        setShowSection(true);
        

    }

    useEffect(() => {
        // document.getElementById("newSection")?.focus();
        newSection.current?.scrollIntoView({ behavior: 'smooth' });
    },
        [showSection]);

    return (
        <div className={"certif " + (showSection ? "section" : "section-small")} ref={certifRef}>
            <div className="Image_group">
                <div className="certifImg awsClick" onClick={() => { handleClick("AWS") }}>
                    <img src="/img/AWS-Logo.png"
                        alt="AWS"
                        className="imgScene aws" />
                </div>
                <div className="certifImg courseraClick" onClick={() => { handleClick("Coursera") }}>
                    <img src="/img/Coursera-Logo.png"
                        alt="AWS"
                        className="imgScene" />
                </div>
                <div className="certifImg pluralsightClick" onClick={() => { handleClick("PluralSight") }}>
                    <img src="/img/PluralSight-Logo.png"
                        alt="AWS"
                        className="imgScene" />
                </div>
                <div className="certifImg udemyClick" onClick={() => { handleClick("Udemy") }}>
                    <img src="/img/Udemy-Logo.png"
                        alt="AWS"
                        className="imgScene" />
                </div>
            </div >

            {showSection && (
                <div ref={newSection} className="section-medium">
                    <p>
                        {
                            data[selectedCert].course.map(item => (
                                <ul>
                                    <li>{item.name}</li>
                                    <ul>{item.subItems?.map(i => (
                                        <li>{i.name}</li>
                                    ))
                                    }</ul>
                                </ul>
                            ))
                        }
                    </p>
                </div>
            )}

        </div>
    );
}