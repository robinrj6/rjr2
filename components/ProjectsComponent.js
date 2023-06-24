import { useEffect, useState } from "react";
import "../styles/project.css";
import { gsap } from "gsap";
import { Card, CardFooter, CardGroup, CardTitle, Col, Row } from "reactstrap";
import { Octokit } from "octokit";



export default function ProjectComponent({ projectsRef }) {

    var octokit = null;
    const [project, setProjects] = useState([]);

    function getRadius(innerWidth, innerHeight) {
        if (innerWidth <= 600) {
            return Math.min(300, innerWidth, innerHeight) / 2;
        } else if (innerWidth <= 1200) {
            return Math.min(500, innerWidth, innerHeight) / 2;
        } else {
            return Math.min(800, innerWidth, innerHeight) / 2;
        }
    }

    async function getRepoInfo(name) {
        let response = await octokit.request('GET /repos/{owner}/{repo}/languages', {
            owner: 'robinrj6',
            repo: name,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        }
        )
        setProjects([...project, {
            name: name,
            data:JSON.stringify(response.data)
            // data: Object.keys(response.data).map(function (_) { return [_, response.data[_]]; })

        }])
        console.log(Object.keys(response.data).map(function (_) { return [_, response.data[_]]; }))
    }

    const animateProfile = () => {
        gsap.from(projectsRef.current, { backgroundColor: "white", duration: 1, delay: .2 }),
            gsap.from(projectsRef.current, { color: "black", duratrion: 1 });
    };

    useEffect(() => {
        const projectsObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateProfile();
                    }
                });
            },
            { threshold: 0.001 } // Adjust the threshold as needed
        );

        if (projectsRef.current) {
            projectsObserver.observe(projectsRef.current);
        }
        octokit = new Octokit({
            auth: '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'
        })
        getRepoInfo("rjr2");
        return () => {
            projectsObserver.disconnect();
        };
    }, []);

    return (
        <div className="projects section" ref={projectsRef}>
            <Row>
                {project.map((item) => {
                    return <Col sm={11} md={6}>
                        <Card>
                            <CardTitle>
                                {item.name}
                            </CardTitle>
                            <CardFooter>
                                {
                                    item.data
                                    // .map((language) => {
                                    //     <div>
                                    //         {language[0]}+" "+{language[1]}
                                    //     </div>
                                    // })
                                }
                            </CardFooter>
                        </Card>
                    </Col>
                })}
            </Row>
        </div>
    );
};

// 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 Github Token