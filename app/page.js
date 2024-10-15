import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="bg-cover h-[600px]"style={{backgroundImage: `url(/images/1da1b95b1120244e0109c7117769ebe0.gif)`}}>
        <nav className="flex text-white mt- justify-around py-12 " >
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={60}
            className="logo"
          />
          <ul className="nav-links flex gap-12 ">
            <li >
              <a className='decoration-8' href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className='leading-20'> 
        <h1 className='text-red-400 md:text-3xl sm:text-3xl flex py-28 px-36 flex  md:text-center w-32'>Bonjour,je suis</h1>
        <p className='text-white px-20 flex md:text-5xl'>NGOUESSY Gatien</p>
        </div>
      </header>
      <section> 
     
       
      <div >
      <h2 className='flex text-3xl text-red-400 justify-center py-20'>Mes compétances</h2>
      </div>

      <div className='grid md:grid-cols-3 md:gap-24 item justify-item-center px-16 bg-cover' style={{backgroundImage: `url(/images/b9e39f0a62072527e85c6a19f751091d.gif)`}}>
      <div className='border border-red-400 h-[200px] w-[300px] mb-20 bg-cover'style={{backgroundImage: `url(/images/14c7739631645cf2fd918d8d9f4ad646.gif)`}} >
        <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={60}
            className="logo"
          />
      </div>

       <div className='border border-red-400 h-[200px] w-[300px] mb-20 bg-cover' style={{backgroundImage: `url(/images/14c7739631645cf2fd918d8d9f4ad646.gif)`}}>
     <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={60}
            className="logo"
          />
      </div> 
      
      <div className='border border-red-400 h-[200px] w-[300px] mb-20 bg-cover hover:bg-white ' style={{backgroundImage: `url(/images/14c7739631645cf2fd918d8d9f4ad646.gif)`}}>
      <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={60}
            className="logo"
          />c
      </div>
      </div>

      </section>
      <section>
      <div >
      <h2 className='flex text-3xl text-red-400 justify-center py-20'>Mes compétances</h2>
      </div>

      <div className='grid md:grid-cols-3 md:gap-24 item justify-item-center px-16'>
      <div className='border border-red-400 h-[200px] w-[300px] mb-20 bg-cover hover'style={{backgroundImage: `url(/images/14c7739631645cf2fd918d8d9f4ad646.gif)`}} >
        <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={60}
            className="logo"
          />
      </div>

       <div className='border border-red-400 h-[200px] w-[300px] mb-20 bg-cover' style={{backgroundImage: `url(/images/14c7739631645cf2fd918d8d9f4ad646.gif)`}}>
        <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={60}
            className="logo"
          />
      </div> 
      
      <div className='border border-red-400 h-[200px] w-[300px] mb-20 bg-cover hover:bg-white ' style={{backgroundImage: `url(/images/14c7739631645cf2fd918d8d9f4ad646.gif)`}}>
      <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={60}
            className="logo"
          />
      </div>
      </div>

      </section>
      <footer className='py-20'>
        <div className='flex justify-center '>
          <h4 className='text-white '>Me contacter</h4>
        </div>

         <div className='flex justify-center '>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={60}
            className="logo"
          />
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={60}
            className="logo"
          />
          
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={60}
            className="logo"
          />
        </div>
      </footer>
    </div>
  );
}
