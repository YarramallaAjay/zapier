"use client";
import Image from "next/image";
import AppBar from "./components/AppBar";
import { Hero } from "./components/Hero";
import { HeroVideo } from "./components/HeroVideo";
import axios from "axios";
import { BACKEND_URL } from "./config";

export const api=axios.create({
  baseURL:BACKEND_URL,
  withCredentials:true
})
export default function Home() {


  return (
         <main className="pb-48">
        <AppBar />
        <Hero />
        <div className="pt-8">
          <HeroVideo />
        </div>
    </main>
  );
}
