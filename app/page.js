'use client'
import HomeComponent from "@/components/HomeComponent";
import ProfileComponent from "@/components/ProfileComponent";
import SkillsComponent from "@/components/SkillsComponent";
import WorkExpComponent from "@/components/WorkExpComponent";
import AOS from 'aos';
import { useEffect, useRef } from "react";

export default function Home() {
  const profileRef = useRef(null);
  const skillsRef = useRef(null);
  const workExpRef = useRef(null);
  useEffect (() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);

  return (
    <main>
      <HomeComponent profileRef={profileRef} />
      <ProfileComponent profileRef={profileRef} />
      <SkillsComponent skillsRef={skillsRef} />
      <WorkExpComponent workExpRef={workExpRef} />
    </main>
  )
}
