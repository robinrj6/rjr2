"use client"
import CertificationComponent from "../components/CertificationComponents";
import ContactComponent from "../components/ContactComponent";
import HomeComponent from "../components/HomeComponent";
import MobileNavComponent from "../components/MobileNavComponent";
import ProfileComponent from "../components/ProfileComponent";
import ProjectComponent from "../components/ProjectsComponent";
import SkillsComponent from "../components/SkillsComponent";
import WorkExpComponent from "../components/WorkExpComponent";

import AOS from 'aos';
import { useEffect, useRef } from "react";

export default function Home() {
  const profileRef = useRef(null);
  const skillsRef = useRef(null);
  const workExpRef = useRef(null);
  const projectsRef = useRef(null);
  const certifRef = useRef(null);
  const OpenRef = useRef(null);
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);

  return (
    <main>
      <HomeComponent profileRef={profileRef} homeref={homeRef}/>
      <MobileNavComponent homeRef={homeRef}/>
      <ProfileComponent profileRef={profileRef} />
      <SkillsComponent skillsRef={skillsRef} />
      <WorkExpComponent workExpRef={workExpRef} />
      <ProjectComponent projectsRef={projectsRef} />
      <CertificationComponent certifRef={certifRef} OpenRef={OpenRef} />
      <ContactComponent contactRef={contactRef} />
    </main>
  )
}
