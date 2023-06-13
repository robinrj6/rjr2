'use client'
import HomeComponent from "@/components/HomeComponent";
import ProfileComponent from "@/components/ProfileComponent";
import SkillsComponent from "@/components/SkillsComponent";
import { useRef } from "react";

export default function Home() {
  const profileRef = useRef(null);
  const skillsRef = useRef(null);
  return (
    <main>
      <HomeComponent profileRef={profileRef}/>
      <ProfileComponent profileRef={profileRef}/>
      <SkillsComponent skillsRef={skillsRef}/>
    </main>
  )
}
