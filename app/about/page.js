import { IoDocumentTextOutline } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function About(){

    return(
         <div id='about' className='sm:w-[786px] w-full sm:border-none border-t-[.1] border-gray-800 mt-[90px] pt-[90]'>
       {/* biografy */}
      <div className='w-full sm:h-[358px] h-auto mb-9 sm:mb-[100px]'>
      <h4 className='text-[18px]  font-semibold text-[#987750] sm:mb-10'>ABOUT ME</h4>
      <h1 className='sm:text-[59px] text-[40px] pb-4 font-sans text-[#DDDDDD] sm:mb-[29px]'><span className='border-b-[.1px] border-[#444444] pb-4'>Biograp</span>hy</h1>
      <p className='text-[#888888] sm:font-[30px] font-jost mb-[20px] font-[10px] sm:text-2xl sm:leading-11'>
        I am a self-taught software developer, learning and building projects for the past two years. My journey started with curiosity, and over time, I’ve developed skills in creating web applications, exploring new technologies, and continuously improving as a developer.
      </p>
      </div>

<div className='w-full sm:flex sm:items-center sm:justify-between'>
{/* info */}
      <ul className='h-[250px] flex flex-col justify-between mb-8 sm:mb-0 '>
        <li className='flex items-center '>
          <span className='text-[#888888]  w-[187.98px] font-medium text-[18px] mr-2.5'>NAME</span>
          <span className='text-[#DDDDDD] text-[15px]'>Manthan Harale</span>
          </li>

          <li className='flex items-center '> 
          <span className='text-[#888888]  w-[187.98px] font-medium text-[18px] mr-2.5'>AGE</span>
          <span className='text-[#DDDDDD] text-[15px]'>21 Years</span>
          </li>

          <li className='flex items-center '>
          <span className='text-[#888888]  w-[187.98px] font-medium text-[18px] mr-2.5'>ADDRESS</span>
          <span className='text-[#DDDDDD] text-[15px]'>Akola Maharashtra</span>
          </li>

          <li className='flex items-center '>
          <span className='text-[#888888]  w-[187.98px] font-medium text-[18px] mr-2.5'>PHONE</span>
          <span className='text-[#DDDDDD] text-[15px]'>9284899998</span>
          </li>

          <li className=' flex items-center '>
          <span className='text-[#888888]  w-[187.98px] font-medium text-[18px] mr-2.5'>EMAIL</span>
          <span className='text-[#DDDDDD] text-[15px]'>manthanharalecode@gmail.com</span>
          </li>

      </ul>


{/* resume link */}
      <div className='w-[340px] h-[220px] border-[1px] border-[#444444] flex flex-col items-center justify-center cursor-pointer '>
        <IoDocumentTextOutline className='text-[#DDDDDD] text-[58px] mb-2.5' />
        <div className='flex items-center'> 
          <h6 className='text-[#888888] text-[18px] font-semibold mr-1'>MY RESUME</h6>
          <FaExternalLinkAlt className='text-[#888888] text-[18px] font-semibold' />
        </div>
      </div>
</div> 
    </div>
    )
}