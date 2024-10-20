import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <header className=" ">
       
        <div className="flex justify-center gap-8 py-12 ">
        <button className="w-32 h-10 bg-white rounded-full hover:bg-transparent hover:text-white hover:border " type="button">Button</button>
        <button  className="w-32 h-10 bg-white rounded-full hover:bg-transparent hover:text-white hover:border" type="button">Projets</button>
        </div>
        <h1 className="text-white text-5xl py-8 px-4">Portfolio</h1>
        <div className="mt-12">
          <p className=" text-5xl text-blue-700 px-4 font-bold">NGOUESSY Gatien</p>
         <h2 className="text-gray-700 text-xl py-4 px-4">Développeur web et mobile</h2>
        </div>
        <nav className="flex justify-center  h-20 mt-32 items-center ">
      <div className=" flex gap-32  ">
       <Link href=""><Image src="/images/facebook-circle-fill.svg" alt="" width={30} height={30}></Image></Link>
       <Link href=""><Image src="/images/instagram-fill.svg" alt="" width={30} height={30}></Image></Link>
       <Link href=""><Image src="/images/linkedin-fill.svg" alt="" width={30} height={30}></Image></Link>
       </div>
       </nav>
      </header>
     
          
    <section className="mt-20 flex sm:flex-col  bg-cover bg-center bg-red-500 relative hover:bg-sky-700 " style={{backgroundImage: `url(/images/79a5e8ebc138b774ed4e8079da85858d.gif)`}}> 
      <div className="flex sm:flex-col">
      <h2 className='sm:flex text-3xl text-white sm:justify-center py-20'>Mes compétances</h2>
      </div>
      <div className="md:grid grid-cols-6 justify-items-center py-12 ">
        <Image className="w-[90px] h-[60px]" src="/images/html-removebg-preview.png" alt=""width={1200} height={100}/>
        <Image className="w-[90px] h-[60px]" src="/images/css-removebg-preview.png" alt=""width={1200} height={100}/>
        <Image className="w-[90px] h-[60px]" src="/images/nextjs-removebg-preview.png" alt=""width={1200} height={100}/>
        <Image className="w-[90px] h-[60px]" src="/images/react-removebg-preview.png" alt=""width={1200} height={100}/>
        <Image className="w-[110px] h-[60px]" src="/images/images-removebg-preview.png" alt=""width={1200} height={100}/>
        <Image className="w-[90px] h-[60px]" src="/images/javascript-1.svg" alt=""width={1200} height={100}/>
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
