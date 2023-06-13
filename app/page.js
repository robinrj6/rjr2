'use client'
import HomeComponent from "@/components/HomeComponent";
import ProfileComponent from "@/components/ProfileComponent";
import { useRef } from "react";

export default function Home() {
  const profileRef = useRef(null);
  return (
    <main>
      <HomeComponent profileRef={profileRef}/>
      <ProfileComponent profileRef={profileRef}/>
    </main>
  )
}
