"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import * as React from "react";
import Button from "./components/Button";
import Section from "./components/Section";
import Footer from "./components/Footer";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <div>
      <header
        className="bg-cover bg-center text-center py-20 px-4 bg-fixed"
        style={{
          backgroundImage: `url(/images/a4f6f0781e483fbe9669c35f26eff1fa.gif)`,
        }}
      >
        <Button />
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl py-4 font-bold">
          Portfolio
        </h1>

        <div className="mt-8 font-extrabold">
          <span
        className="text-3xl md:text-4xl text-red-800 lg:text-5xl drop-shadow-2xl font-bold bg-clip-text bg-gradient-to-r from-white via-pink-500 text-transparent to-blue-800">
            NGOUESSY Gatien
          </span>
          <h2 className="text-blue-700 text-lg md:text-xl lg:text-2xl py-2">
            Développeur web et mobile
          </h2>
          <p className="text-white">Passionné du Numérique</p>
        </div>

        <nav className="flex justify-center h-16 mt-16 items-center">
          <div className="flex gap-8 md:gap-12">
            <div className=" rounded-2xl origin-center bg-white h-10 w-10 flex justify-center items-center">
              <Link href="">
                <Image
                  className="fill-blue-700  rotate-0  drop-shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 "
                  src="/images/facebook-circle-fill.svg"
                  alt="Facebook"
                  width={29}
                  height={29}
                />
              </Link>
            </div>
            <div className=" rounded-2xl bg-white h-10 w-10 origin-center flex justify-center items-center ">
              <Link href="">
                <Image
                  className="fill-blue-700 translate rotate-0 drop-shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 "
                  src="/images/instagram-fill.svg"
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            <div className=" rounded-2xl bg-white h-10 w-10 flex justify-center items-center origin-center ">
              <Link href="">
                <Image
                  className="fill-blue-700  rotate-0 drop-shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700"
                  src="/images/linkedin-fill.svg"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <Section />
      <section className="mt-8 sm:grid grid-cols-3 lg:grid-cols-3 md:grid-rows-2 justify-items-center gap-8">
        <div className="w-56 h-56 bg-slate-50 rounded-2xl"></div>
        <div className="w-56 h-56 bg-slate-50 rounded-2xl"></div>
        <div className="w-56 h-56 bg-slate-50 rounded-2xl"></div>
        <div className="w-56 h-56 bg-slate-50 rounded-2xl"></div>
        <div className="w-56 h-56 bg-slate-50 rounded-2xl"></div>
        <div className="w-56 h-56 bg-slate-50 rounded-2xl"></div>
      </section>
      <Footer />
    </div>
  );
}
