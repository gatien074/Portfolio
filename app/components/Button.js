"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


export default function Button(){
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return(
    <div className="flex justify-center gap-4 md:gap-8 py-6  ">
    <Link href="#compétences"><motion.button 
       className="fixed  left-4 w-28 md:w-32 h-10 bg-transparent border  border-white  hover:border-pink-500 rounded-full text-white  shadow-blue-600 hover:border transition-all duration-150"
       type="button"
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        initial={{opacity: 0.5, x: 50}}
        animate={{opacity:1, x:0}}
        transition={{duration: 0.2}}>
       Compétences
     </motion.button></Link>
     <motion.button
       className="fixed right-4 w-28 md:w-32 h-10 rounded-full border border-white bg-transparent text-white  shadow-purple-600 hover:border  hover:border-pink-500  transition-all duration-300"
       type="button"
       whileHover={{scale: 1.1}}
       whileTap={{scale: 0.9}}
       initial={{opacity: 0.5, x: 50}}
       animate={{opacity:1, x:0}}
       transition={{duration: 0.2}}>
       Projets
     </motion.button>
   </div>
  )
}