'use client';

import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Especialidades from "@/app/components/Especialidades";
import Depoimentos from "@/app/components/Depoimentos";
import Footer from "@/app/components/Footer";
import QuemSomos from "@/app/components/QuemSomos";
import Contato from "@/app/components/Contato";
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function Home() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white text-black scroll-smooth">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-between py-8 text-black">
        <Hero />
        <Especialidades />
        <QuemSomos />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
