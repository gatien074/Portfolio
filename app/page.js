"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";




export default function Home() {
  return (
    <div>
     <header className="bg-cover bg-center text-center py-8 px-4 bg-cover bg-center bg-fixed" style={{backgroundImage: `url(/images/a4f6f0781e483fbe9669c35f26eff1fa.gif)`}}>
  <div className="flex justify-center gap-4 md:gap-8 py-6">
   <Link href="#compétences"> <button 
      className="w-28 md:w-32 h-10 bg-white rounded-full hover:bg-transparent hover:text-white shadow shadow-blue-600 hover:border shadow-2xl shadow-inner transition-all duration-300"
      type="button" >
      Compétences
    </button></Link>
    <button
      className="w-28 md:w-32 h-10 bg-white rounded-full hover:bg-transparent hover:text-white shadow shadow-purple-600 hover:border shadow-2xl shadow-inner transition-all duration-300"
      type="button"
    >
      Projets
    </button>
  </div>

  <h1 className="text-white text-4xl md:text-5xl lg:text-6xl py-4">Portfolio</h1>

  <div className="mt-8 font-extrabold">
    <span className="text-3xl md:text-4xl lg:text-5xl dark:bg-black drop-shadow-2xl font-bold bg-clip-text bg-gradient-to-r from-red-600 to-blue-800">NGOUESSY Gatien</span>
    <h2 className="text-gray-700 text-lg md:text-xl lg:text-2xl py-2">Développeur web et mobile</h2>
    <p>Passionné du Numérique</p>
  </div>

  <nav className="flex justify-center h-16 mt-16 items-center">
    <div className="flex gap-8 md:gap-12">
      <Link href="">
        <Image className="fill-blue-700" src="/images/facebook-circle-fill.svg" alt="Facebook" width={30} height={30} />
      </Link>
      <Link href="">
        <Image className="fill-blue-700" src="/images/instagram-fill.svg" alt="Instagram" width={30} height={30} />
      </Link>
      <Link href="">
        <Image className="fill-blue-700" src="/images/linkedin-fill.svg" alt="LinkedIn" width={30} height={30} />
      </Link>
    </div>
  </nav>
</header>

      <section id="compétences" className="mt- flex flex-col bg-cover bg-center  relative hover:bg-sky-700" style={{ backgroundImage: `url(/images/79a5e8ebc138b774ed4e8079da85858d.gif)` }}>
  <div className="flex flex-col items-center">
    <h2 className="text-3xl text-white py-10 lg:py-20 lg:text-4xl">Mes compétences</h2>
  </div>

  <div className="grid grid-cols-3 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-items-center py-10 sm:py-12">
    <Image className="w-16 h-10 sm:w-20 sm:h-12 lg:w-[90px] lg:h-[60px]" src="/images/html-removebg-preview.png" alt="HTML" width={1200} height={100} />
    <Image className="w-16 h-10 sm:w-20 sm:h-12 lg:w-[90px] lg:h-[60px]" src="/images/css-removebg-preview.png" alt="CSS" width={1200} height={100} />
    <Image className="w-16 h-10 sm:w-20 sm:h-12 lg:w-[90px] lg:h-[60px]" src="/images/nextjs-removebg-preview.png" alt="Next.js" width={1200} height={100} />
    <Image className="w-16 h-10 sm:w-20 sm:h-12 lg:w-[90px] lg:h-[60px]" src="/images/react-removebg-preview.png" alt="React" width={1200} height={100} />
    <Image className="w-20 h-10 sm:w-24 sm:h-12 lg:w-[110px] lg:h-[60px]" src="/images/images-removebg-preview.png" alt="Images" width={1200} height={100} />
    <Image className="w-16 h-10 sm:w-20 sm:h-12 lg:w-[90px] lg:h-[60px]" src="/images/javascript-1.svg" alt="JavaScript" width={1200} height={100} />
  </div>
</section>



      <section className="mt-48">
      <div >
      <h2 className='flex text-3xl text-red-400 justify-center py-20'>Mes compétances</h2>
      </div>

      <div className='grid md:grid-cols-3 md:gap-24 item justify-item-center '>
      <div className='mb-20 bg-cover hover'style={{backgroundImage: `url()`}} >
       
      </div>

       <div className='mb-20 bg-cover' style={{backgroundImage: `url(/images/20f63af1a58669d6eb486480fe923d12.gif)`}}>
       
      </div> 
      
      <div className=' mb-20 bg-cover hover:bg-white ' style={{backgroundImage: `url(/images/20f63af1a58669d6eb486480fe923d12.gif)`}}>
      
      </div>
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
