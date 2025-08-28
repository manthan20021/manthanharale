import { TbBrandNodejs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { SiRemix } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";



export default function Skills(){


    return(
        <div id="skills" className="sm:w-[786px] pt-[100px] sm:pt-[200px]">
      <h4 className="text-[18px] font-semibold text-[#987750] sm:mb-10 ">SKILLS</h4>

      <div className="w-full h-auto overflow-hidden flex flex-col items-center justify-between ">
        
        {/* skill cards */}
        <div className=' mt-5 sm:p-[40px] py-4 px-2 sm:border-none w-full border-y-[.1px] border-gray-700  sm:bg-[#181715]'>
                    <h1 className='font-medium text-3xl text-[#DDDDDD] mb-[17px]'>Frontend Development</h1>
                    <p className='text-[#888888] text-xl '>I create fast, responsive, and user-friendly web interfaces using modern frameworks and best practices.</p>
                    </div>

                    <div className=' mt-5 sm:p-[40px] py-4 px-2 sm:border-none  w-full border-y-[.1px] border-gray-700  sm:bg-[#181715]'>
                    <h1 className='font-medium text-3xl text-[#DDDDDD] mb-[17px]'>Backend Development</h1>
                    <p className='text-[#888888] text-xl '>I build secure, scalable, and high-performance server-side solutions with clean, efficient APIs</p>
                    </div>

                    <div className=' mt-5 sm:p-[40px] py-4 px-2 sm:border-none w-full border-y-[.1px] border-gray-700  sm:bg-[#181715]'>
                    <h1 className='font-medium text-3xl text-[#DDDDDD] mb-[17px]'>MERN Stack Developmen</h1>
                    <p className='text-[#888888] text-xl '>I develop complete, end-to-end web applications using MongoDB, Express, React, and Node.js with seamless integration.</p>
                    </div>

                    <div className=' mt-5 sm:p-[40px] py-4 px-2 sm:border-none w-full border-y-[.1px] border-gray-700  sm:bg-[#181715]'>
                    <h1 className='font-medium text-3xl text-[#DDDDDD] mb-[17px]'>Generative AI</h1>
                    <p className='text-[#888888] text-xl '>I leverage AI tools and models to deliver intelligent, automated, and innovative solutions tailored to client needs</p>
                    </div>

                    <div className=' mt-5 sm:p-[40px] py-4 px-2 sm:border-none w-full border-y-[.1px] border-gray-700  sm:bg-[#181715]'>
                    <h1 className='font-medium text-3xl text-[#DDDDDD] mb-[17px]'>Optimization</h1>
                    <p className='text-[#888888] text-xl '>I optimize websites and applications for speed, SEO, and performance, ensuring top-notch user experiences</p>
                    </div>

                    <div className=' mt-5 sm:p-[40px] py-4 px-2 sm:border-none w-full border-y-[.1px] border-gray-700  sm:bg-[#181715]'>
                    <h1 className='font-medium text-3xl text-[#DDDDDD] mb-[17px]'>Styling and Responsive Designs</h1>
                    <p className='text-[#888888] text-xl '>I design visually appealing, mobile-friendly, and fully responsive layouts that work flawlessly on any device</p>
                    </div>
                    

      </div>

      {/* tachStack */}
      <div className="pt-[100px] w-full">

        <h4 className="text-[18px] font-semibold text-[#987750] sm:mb-10 mb-6">
          TECHNOLOGYS
        </h4>

        <div className="w-full flex flex-wrap items-center justify-between ">
          <div
            className="sm:w-[255px] w-[160px] sm:h-[200px] h-[160px] bg-[#181715] mb-[9px] flex items-center justify-center"
          >
            <SiMongodb className="font-bold text-3xl text-green-500" />
            <h5 className="font-bold sm:text-3xl text-xl text-white">MongoDB</h5>
          </div>

          <div
            className="sm:w-[255px] w-[160px] sm:h-[200px] h-[160px] bg-[#181715] mb-[9px] flex items-center justify-center"
          >
            <SiExpress className="font-bold text-3xl text-gray-500" />
            <h5 className="font-bold sm:text-3xl text-xl text-white">Express</h5>
          </div>

          <div
            className="sm:w-[255px] w-[160px] sm:h-[200px] h-[160px] bg-[#181715] mb-[9px] flex items-center justify-center"
          >
            <IoLogoReact className="font-bold text-3xl text-[#6FD2F0]" />
            <h5 className="font-bold sm:text-3xl text-xl text-white">React</h5>
          </div>

          <div
            className="sm:w-[255px] w-[160px] sm:h-[200px] h-[160px] bg-[#181715] mb-[9px] flex items-center justify-center"
          >
            <TbBrandNodejs className="font-bold text-3xl text-green-500" />
            <h5 className="font-bold sm:text-3xl text-xl text-white">Nodejs</h5>
          </div>

          <div
            className="sm:w-[255px] w-[160px] sm:h-[200px] h-[160px] bg-[#181715] mb-[9px] flex items-center justify-center"
          >
            <SiRemix className="font-bold text-3xl text-black" />
            <h5 className="font-bold sm:text-3xl text-xl text-white">Remix</h5>
          </div>

          <div
           
            className="sm:w-[255px] w-[160px] sm:h-[200px] h-[160px] bg-[#181715] mb-[9px] flex items-center justify-center"
          >
            <TbBrandNextjs className="font-bold text-3xl text-[#93438E]" />
            <h5 className="font-bold sm:text-3xl text-xl text-white">Nextjs</h5>
          </div>

          <div
            className="sm:w-[255px] w-[160px] sm:h-[200px] h-[160px] bg-[#181715] mb-[9px] flex items-center justify-center"
          >
            <RiTailwindCssFill className="font-bold text-3xl text-[#0CB4D6]" />
            <h5 className="font-bold text-xl sm:text-3xl text-white">TailwindCss</h5>
          </div>

          <div
            className="sm:w-[255px] w-[160px] sm:h-[200px] h-[160px] bg-[#181715] mb-[9px] flex items-center justify-center"
          >
            <TbBrandRedux className="font-bold text-3xl text-[#8142C3]" />
            <h5 className="font-bold text-xl sm:text-3xl text-white">Redux</h5>
          </div>

          <div
            className="sm:w-[255px] w-[160px] sm:h-[200px] h-[160px] bg-[#181715] mb-[9px]   flex items-center justify-center"
          >
            <FaGitAlt className="font-bold text-3xl text-[#F03C2E]" />
            <h5 className="font-bold sm:text-3xl text-xl text-white">Git</h5>
          </div>

          <div
            className="sm:w-[255px] w-[160px] sm:h-[200px] h-[160px] bg-[#181715] mb-[9px] flex items-center justify-center"
          >
            <IoLogoJavascript className="font-bold text-3xl text-[#FFFF00]" />
            <h5 className="font-bold sm:text-3xl text-xl text-white">javascript</h5>
          </div>

          <div
            className="sm:w-[255px] w-[160px] sm:h-[200px] h-[160px] bg-[#181715] mb-[9px] flex items-center justify-center"
          >
            <SiTypescript className="font-bold text-3xl text-[#2E77C4]" />
            <h5 className="font-bold sm:text-3xl text-xl text-white">TS</h5>
          </div>

          <div
            className="sm:w-[255px] w-[160px] sm:h-[200px] h-[160px] bg-[#181715] mb-[9px] flex items-center justify-center"
          >
            <TbBrandFramerMotion className="font-bold text-3xl text-[#8000DB]" />
            <h5 className="font-bold sm:text-3xl text-xl text-white">Motion</h5>
          </div>
        </div>
      </div>
    </div>
    )
}