import { useEffect, useState } from "react";
import "../styles/project.css";
import { gsap } from "gsap";
import { Card, CardFooter, CardTitle, Col, Row, Progress, Placeholder, Button, Badge } from "reactstrap";
import { Octokit } from "octokit";;

export default function ProjectComponent({ projectsRef }) {

    var octokit = null;
    var arrLang = [];
    var arrPercent = [];
    var percent = [];
    var percentSum = 0;
    var output = [];
    const [project, setProjects] = useState([]);
    const repos = ["rjr2", "MyWebsite", "Profile-SE", "PneumoGAN", "Employee_Management_sys", "RjR_website", "Auto-Brightness-for-laptops"];

    async function getRepoInfo(name) { //gets details from github for each repo using git token
        let response = await octokit.request('GET /repos/{owner}/{repo}/languages', {
            owner: 'robinrj6',
            repo: name,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        }
        )
        setProjects((prevProjects) => [
            ...prevProjects,
            {
                name: name,
                data: Object.keys(response.data).map((key) => [key, response.data[key]])
            }
        ]);
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


        octokit = new Octokit({ //github 
            auth: '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'
        })

        repos.forEach(e => { //calls getRepoInfo for each repo
            getRepoInfo(e);
        });

        return () => {
            projectsObserver.disconnect();
        };
    }, []);

    function combineBoth(arrLang, percent, output) {//combines both languages and percentage values from different array to output array
        for (var i = 0; i < arrLang.length; i++) {
            output[arrLang[i]] = percent[i];
        }
    }

    return (
        <div className="projects section" ref={projectsRef}>
            <Row>
                {project.map((item) => {
                    return <Col xs="6">
                        <Card data-aos="fade-up-left">
                            <CardTitle>
                                {item.name}
                            </CardTitle>
                            <CardFooter>
                                {(
                                    percentSum = 0,
                                    arrLang = [],
                                    arrPercent = [],
                                    percent = [],
                                    output = [],
                                    item.data.map((k, v) => (arrLang.push(k[0]), arrPercent.push(k[1]))),

                                    arrPercent.forEach(element => {
                                        percentSum = percentSum + element
                                    }),
                                    arrPercent.forEach(e => {
                                        percent.push((e * 100) / percentSum)
                                    }),

                                    combineBoth(arrLang, percent, output),

                                    console.log(output),

                                    <Progress multi>
                                        {
                                            Object.keys(output).map((key) => {
                                                let color;
                                                if (key === "CSS") {
                                                    color = "primary";
                                                } else if (key === "JavaScript") {
                                                    color = "warning";
                                                } else if (key == "HTML") {
                                                    color = "danger";
                                                } else if (key == "Java") {
                                                    color = "secondary"
                                                } else if (key == "Python") {
                                                    color = "dark"
                                                } else {
                                                    color = "light"
                                                }
                                                return (
                                                    <Progress bar value={output[key]} color={color}>
                                                    </Progress>
                                                )
                                            })
                                        }
                                    </Progress>
                                )}
                                {Object.keys(output).map((key) => {
                                    let color;
                                    if (key === "CSS") {
                                        color = "primary";
                                    } else if (key === "JavaScript") {
                                        color = "warning";
                                    } else if (key == "HTML") {
                                        color = "danger";
                                    } else if (key == "Java") {
                                        color = "secondary"
                                    } else if (key == "Python") {
                                        color = "dark"
                                    } else {
                                        color = "light"
                                    }
                                    return (<span className="languages"><Badge
                                    color={color}
                                    pill
                                  >
                                    {' '}
                                  </Badge>{key} : {Math.round(output[key])}%</span>)
                                })}
                            </CardFooter>
                        </Card>
                    </Col>
                })}
            </Row>
        </div>
    );
};

