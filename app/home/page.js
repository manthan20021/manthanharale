import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
import { HiArrowCircleRight } from "react-icons/hi";




export default function Home(){

    return(
       <div id="home" className=" sm:h-[600px] h-auto w-full overflow-hidden flex sm:pt-[150px] pt-[60px] justify-between flex-col">
        <div className="w-[200px] h-[100px] border-b-[.2px] border-[#3F3F3F] ml-[650px] hidden sm:block"></div>
      {/* for biger screen */}
            <div className='mb-[80px] sm:block hidden'>
                            <div className='flex justify-between items-center relative '>
              {/* heading div */}
            <div>
            <h4 className='text-[18px]  font-semibold text-[#987750]'>INTRODUCTION</h4>
            <h1 className='text-[50px] pb-2 font-sans text-[#DDDDDD] mb-[20px]'><span className='border-b-[.1px] border-[#444444] pb-4'>MANTHAN</span><span className='ml-5'>HARALE</span></h1>

            {/* links and soshalmidia */}
                        <div className='w-[200px] flex items-center justify-between'>
                             <a href='' className='w-[40px] h-10  bg-[#11100e] flex items-center justify-center'>
                             <FaLinkedin className='text-[18px] text-[#DDDDDD] '/>
                             </a>

                              <a href='' className='w-[40px] h-10  bg-[#11100e] flex items-center justify-center'>
                <FaSquareGithub className='text-[18px] text-[#DDDDDD] '/>
              </a>

              <a href='' className='w-[40px] h-10  bg-[#11100e] flex items-center justify-center'>
                <FaXTwitter className='text-[18px] text-[#DDDDDD] '/>
              </a>

              <a href='' className='w-[40px] h-10  bg-[#11100e] flex items-center justify-center'>
                <FaInstagram className='text-[18px] text-[#DDDDDD] '/>
              </a>

              <a href='' className='w-[40px] h-10  bg-[#11100e] flex items-center justify-center'>
                <MdOutlineEmail className='text-[18px] text-[#DDDDDD] '/>
              </a>
              </div>
              </div>

               {/* img div */}
            <div className='border-r-[0.2px] border-[#3F3F3F]  w-[200px] h-[164px] mr-[15px] pt-[32px] absolute right-0 top-[-20px] '>
            <img src="/myphoto.jpg" className='h-28  w-28 ml-[73px] rounded-xl shadow-[0_8px_23px_black]'  />
            </div>

            </div>

            <h1 className='text-[#888888] font-[20px] font-jost mb-[20px] mt-5 text-2xl leading-9 '>
              I’m a <span className="text-3xl text-[#DDDDDD]" >Full-Stack Developer</span> who crafts modern, dynamic web apps powered by the <span className="text-3xl text-[#DDDDDD]">MERN stack</span> and optimized with <span className="text-3xl text-[#DDDDDD]">Next.js</span>.
            </h1>
             <img className='w-[200px]'
             src="/sign.png"
              alt="photo" 
            />

            <Link href="/contact" className="flex items-center mt-5"> 
<HiArrowCircleRight className=" mr-2 text-[#00ff11]" />
<h2 className="border-b-1 text-[#888888]">I’m available for a freelance job. Hire me</h2>
 </Link>

        </div>

        
       {/* For Mobil */}
        <div className="h-full w-full sm:hidden flex flex-col items-center">

          <img src="/myphoto.jpg" className='h-20  w-20  shadow-[0_8px_23px_black]' />
          <h4 className='text-[10px] mt-5  font-semibold text-[#987750]'>INTRODUCTION</h4>
          {/* <h1 className='text-[20px] font-sans font-semibold text-[#DDDDDD] '>Manthan<span className='ml-2'>Harale</span></h1> */}
                              <h1 className='font-medium text-3xl text-[#DDDDDD]'>Manthan Harale</h1>

          {/* <img className='w-[200px] mt-2'
             src="/sign.png"
              alt="photo" 
            />        */}
<h1 className='text-[#888888] flex  items-center justify-center  font-[10px] font-jost'>I’m a Full-Stack Developer who crafts</h1>
<h1 className='text-[#888888] flex  items-center justify-center  font-[10px] font-jost'> modern, dynamic web apps powered by</h1>
<h1 className='text-[#888888] flex  items-center justify-center  font-[10px] font-jost'> the MERN stack and optimized</h1>
<h1 className='text-[#888888] flex  items-center justify-center  font-[10px] font-jost'>with Next.js.</h1>

     <div className='w-full mt-3 flex items-center justify-between'>
                             <a href='' className='w-[40px] h-10  bg-[#11100e] flex items-center justify-center'>
                             <FaLinkedin className='text-[18px] text-[#DDDDDD] '/>
                             </a>

                              <a href='' className='w-[40px] h-10  bg-[#11100e] flex items-center justify-center'>
                <FaSquareGithub className='text-[18px] text-[#DDDDDD] '/>
              </a>

              <a href='' className='w-[40px] h-10  bg-[#11100e] flex items-center justify-center'>
                <FaXTwitter className='text-[18px] text-[#DDDDDD] '/>
              </a>

              <a href='' className='w-[40px] h-10  bg-[#11100e] flex items-center justify-center'>
                <FaInstagram className='text-[18px] text-[#DDDDDD] '/>
              </a>

              <a href='' className='w-[40px] h-10  bg-[#11100e] flex items-center justify-center'>
                <MdOutlineEmail className='text-[18px] text-[#DDDDDD] '/>
              </a>
              </div>

<Link href="/contact" className="flex items-center mt-5"> 
<HiArrowCircleRight className=" mr-2 text-[#00ff11]" />
<h2 className="border-b-1 text-[#888888]">I’m available for a freelance job. Hire me</h2>
 </Link>
 </div>
 </div>
    )
}