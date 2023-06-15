import "../styles/workExp.css";
import { useEffect } from 'react';
import gsap from 'gsap';
import { Card, CardBody, CardGroup } from "reactstrap";


export default function WorkExpComponent({ workExpRef }) {
    const animateworkExp = () => {
        gsap.from(workExpRef.current, { backgroundColor: "black", duration: 1, delay: .2 }),
            gsap.from(workExpRef.current, { color: "white", duratrion: 1 });
    };

    useEffect(() => {
        const workExpObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateworkExp();
                    }
                });
            },
            { threshold: 0.001 } // Adjust the threshold as needed
        );

        if (workExpRef.current) {
            workExpObserver.observe(workExpRef.current);
        }

        return () => {
            workExpObserver.disconnect();
        };
    }, []);


    return (

        <div className="workExp section" ref={workExpRef}>
            <div className="box-group">
                <div className="box box1" data-aos="zoom-out-right">
                    <span className="textGroup">
                        <h1 className="subHeading">Capgemini Technologies Pvt. Ltd.</h1>
                        <h3 className="subHeading subText">Software Engineer</h3>
                        <h4 className="subHeading subText2">September 2021 - June 2023</h4>
                    </span>
                </div>
                <div className="box box2" data-aos="fade-right">
                    <span className="textGroup">
                        <h1 className="subHeading">NeST Cyber Campus,Kochi, India</h1>
                        <h3 className="subHeading subText">Intern</h3>
                    </span>
                </div>
                <div className="box box3" data-aos="fade-left">
                    <span className="textGroup">
                        <h1 className="subHeading">Keltron, Kottayam, India.</h1>
                        <h3 className="subHeading subText">Intern</h3>
                    </span>
                </div>
            </div>
        </div>
    )
}