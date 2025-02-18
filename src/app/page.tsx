// pages/index.tsx
"use client"
import { useEffect } from 'react';
import Head from 'next/head';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    // Any initialization code needed
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Jenny Sharp | Professional Hairstylist</title>
        <meta name="description" content="Book your next hairstyle appointment with Jenny Sharp, professional hairstylist." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Booking />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}