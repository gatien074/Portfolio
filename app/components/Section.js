import Image from "next/image";
import Link from "next/link";


export default function Section() {
    return(
        <>
          <section id="compétences" className=" flex flex-col  bg-cover bg-center" style={{ backgroundImage: `url(/images/79a5e8ebc138b774ed4e8079da85858d.gif)` }}>
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
        </>
    )
}