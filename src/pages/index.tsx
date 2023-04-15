import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { NextPage } from "next";
import Head from 'next/head';


export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen">
      <Head>
        <title>Simon's Portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
        <Hero />
      <section id="hero">
      </section>
      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact me */}

    </div>
  );
};
