import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Hero} from "@/components/Hero";
import {Who} from "@/components/Who";
import {Contact} from "@/components/Contact";
import {Works} from "@/components/Works";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className='h-[100vh] scroll-smooth scroll-snap-y overflow-y-auto scrollbar-width-none ' style={{ backgroundImage: 'url(/bg.jpeg)' }}>
        <Hero/>
        <Who/>
        <Works/>
        <Contact/>

      </div>


  )
}
