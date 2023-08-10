import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Hero} from "@/components/Hero";
import {Contact} from "@/components/Contact";
import {Demonstration} from "@/components/Demonstration";
import {Skills} from "@/components/Skills";
import {NavBar} from "@/components/NavBar";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className='h-[100vh] scroll-smooth scroll-snap-y overflow-y-auto scrollbar-width-none ' style={{ backgroundImage: 'url(/bg.jpeg)' }}>
        <Hero/>
        <Skills/>
        <Demonstration/>
        <Contact/>

      </div>


  )
}
