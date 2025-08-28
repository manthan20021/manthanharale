
import Link from 'next/link'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaSquareGithub, FaXTwitter } from 'react-icons/fa6'
import { MdOutlineEmail } from 'react-icons/md'


export default function Footer(){

    return(

        <div className='sm:w-[786px] w-full  shadow-2xl shadow-gray-800 py-5 p-10 mt-[100px]'>

<div className='w-full h-[264px] flex items-center '>

   <div className='w-[213px] h-full flex flex-col items-baseline justify-between text-[#888888] text-[15px]  sm:text-[17px] mr-[50px]'>
      <Link href="/">
            Home
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/skills">
              Skills          
          </Link>

          <Link href="/services">
            Services            
          </Link>

          <Link href="/projects">
            Projects            
          </Link>

          <Link href="/contact">
            Contact          
          </Link>
           
      </div>

      <ul className='w-[213px] h-full flex flex-col justify-between text-[#888888] text-[17px]'>
        <a href='https://www.linkedin.com/in/manthan-harale-04a469276/'>Linkedin</a>
        <a href='https://github.com/manthan20021'>GitHub</a>
        <a href='https://www.instagram.com/manthancode/'>Instagram</a>
        <a href='https://x.com/harale54191'>twiter</a>
        <li className='sm:hidden'>manthanharalecode
          <br></br>
          <span>
            @gmail.com
            </span>
            </li>
        <li className='hidden sm:block'>manthanharalecode@gmail.com</li>
        <li>9284899998</li>
      </ul>

</div>

 <div className='w-[250px] flex items-center mt-10 justify-between '>
               <a href='https://www.linkedin.com/in/manthan-harale-04a469276/' className='w-[40px] h-10  bg-[#11100e] flex items-center justify-center'>
                <FaLinkedin className='text-[18px] text-[#DDDDDD] '/>
              </a>

               <a href='https://github.com/manthan20021' className='w-[40px] h-10  bg-[#11100e] flex items-center justify-center'>
                <FaSquareGithub className='text-[18px] text-[#DDDDDD] '/>
              </a>


               <a href='https://x.com/harale54191' className='w-[40px] h-10  bg-[#11100e] flex items-center justify-center'>
                <FaXTwitter className='text-[18px] text-[#DDDDDD] '/>
              </a>

               <a href='https://www.instagram.com/manthancode/' className='w-[40px] h-10  bg-[#11100e] flex items-center justify-center'>
                <FaInstagram className='text-[18px] text-[#DDDDDD] '/>
              </a>

              <a  href='https://manthanharalecode@gmail.com' className='w-[40px] h-10 bg-[#11100e] flex items-center justify-center'>
                <MdOutlineEmail className='text-[18px] text-[#DDDDDD] '/>
              </a>
            </div>      
    
    <div className=' w-full h-20 sm:pt-2 mt-5 sm:mb-5 border-[#303030] border-t-[.1px] flex items-center'>
       <h6 className='text-[#888888] sm:text-[17px]'>Developed by:</h6>
      
     <img className=' ml-2  sm:h-10  h-8 justify-center' src="/photos/sign.png" alt="" />
  
    </div>
      
    </div>
    )
}