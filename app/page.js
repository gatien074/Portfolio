"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"
import * as React from "react";
import Button from "./components/Button";


export default function Home() {
  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (

    <div >

     <header className="bg-cover bg-center text-center py-20 px-4bg-fixed" style={{backgroundImage: `url(/images/a4f6f0781e483fbe9669c35f26eff1fa.gif)`, }} >
     <Button/>
  <h1 className="text-white text-4xl md:text-5xl lg:text-6xl py-4 font-bold">Portfolio</h1>

  <div className="mt-8 font-extrabold">
    <span className="text-3xl md:text-4xl text-red-800 lg:text-5xl drop-shadow-2xl font-bold bg-clip-text bg-gradient-to-r from-white via-pink-500 text-transparent to-blue-800">NGOUESSY Gatien</span>
    <h2 className="text-blue-700 text-lg md:text-xl lg:text-2xl py-2">Développeur web et mobile</h2>
    <p className="text-white" >Passionné du Numérique</p>
  </div>

  <nav className="flex justify-center h-16 mt-16 items-center">
    <div className="flex gap-8 md:gap-12">
      <div className=" rounded-2xl origin-center bg-white h-10 w-10 flex justify-center items-center">
      <Link href=""> 
        <Image className="fill-blue-700  rotate-0  drop-shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 " src="/images/facebook-circle-fill.svg" alt="Facebook" width={29} height={29} />
      </Link>
      </div>
      <div  className=" rounded-2xl bg-white h-10 w-10 origin-center flex justify-center items-center ">
      <Link href="">
        <Image className="fill-blue-700 translate rotate-0 drop-shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 " src="/images/instagram-fill.svg" alt="Instagram" width={30} height={30} />
      </Link>
      </div>
      <div  className=" rounded-2xl bg-white h-10 w-10 flex justify-center items-center origin-center ">
      <Link href="">
        <Image className="fill-blue-700  rotate-0 drop-shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700" src="/images/linkedin-fill.svg" alt="LinkedIn" width={30} height={30} />
      </Link>
      </div>
    </div>
  </nav>
</header>

      <section id="compétences" className="mt- flex flex-col bg-cover bg-center  relative hover:bg-sky-700" style={{ backgroundImage: `url(/images/79a5e8ebc138b774ed4e8079da85858d.gif)` }}>
  <div className="flex flex-col items-center">
    <h2 className="text-3xl text-white py-10 lg:py-20 lg:text-4xl font-extrabold">Mes compétences</h2>
  </div>

  <div className="grid grid-cols-3 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-items-center py-10 sm:py-12">
    <Image  className="w-16 h-10 sm:w-[50px] sm:h-12 lg:w-[50px] lg:h-[50px]  shadow-md shadow-white rounded-full" src="/images/html-removebg-preview.png" alt="HTML" width={1200} height={100} />
    <Image className="w-16 h-10 sm:w-[50px] sm:h-12 lg:w-[50px] lg:h-[50px] shadow-md shadow-white rounded-full" src="/images/css-removebg-preview.png" alt="CSS" width={1200} height={100} />
    <Image className="w-16 h-10 sm:w-[50px] sm:h-12 lg:w-[50px] lg:h-[50px] shadow-md shadow-white rounded-full" src="/images/nextjs-removebg-preview.png" alt="Next.js" width={1200} height={100} />
    <Image className="w-16 h-10 sm:w-[50px] sm:h-12 lg:w-[50px] lg:h-[50px] shadow-md shadow-white rounded-full" src="/images/react-removebg-preview.png" alt="React" width={1200} height={100} />
    <Image className="w-20 h-10 sm:w-[58px] sm:h-12 lg:w-[80px] lg:h-[50px] shadow-md  shadow-white  rounded-full" src="/images/images-removebg-preview.png" alt="Images" width={1200} height={100} />
    <Image className="w-16 h-10 sm:w-[50px] sm:h-12 lg:w-[50px] lg:h-[50px] shadow-md shadow-white rounded-full" src="/images/javascript-1.svg" alt="JavaScript" width={1200} height={100} />
  </div>
</section>
      <footer className='mt-48'>
        <div className='flex justify-center '>
          <h4 className='text-white '> contacter</h4>
        </div>

      </footer>
    </div>
  );
}
