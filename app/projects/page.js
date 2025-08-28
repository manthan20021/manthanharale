export default function Projects(){

    return(
         <div id='projects' className='sm:w-[786px] w-full sm:pt-[200px] pt-16'> 
    <h4 className="text-[18px] font-semibold text-[#987750] sm:mb-10">PORTFOLIO</h4>
    <h1 className='sm:text-[59px] text-[40px] pb-4 font-sans text-[#DDDDDD] mb-[29px]'><span className='border-b-[.1px] border-[#444444] sm:pb-4 pb-2'>Projec</span>ts</h1>

    <div className='w-full flex items-center justify-between flex-wrap'>

      {/* Project Cared */}
       <div className='w-[383px] p-4 sm:h-[383px] h-auto bg-[#181715] mb-[30px]'>
        <img className='w-9 h-9 mb-3'  alt="logo" />
        <h1 className='font-medium text-2xl text-[#DDDDDD] mb-3 '>restaurant-billing-app</h1>
        <p className='text-[#888888] mb-1'>
          I’m currently working on a SaaS app for restaurants. Owners can enter their menu once, then use a dashboard to generate bills with a click. The app tracks orders, sales, billing history, and restaurant growth. I used the following technologies to build it
        </p>
        
        <p className='w-full h-16 flex items-center justify-between flex-wrap text-[12px] text-[#dddddd]'>
                mongoDB, expressjs, reactjs, nodejs
            </p>
    </div>

     <div className='w-[383px] p-4 sm:h-[383px] h-auto bg-[#181715] mb-[30px]'>
        <img className='w-9 h-9 mb-3'  alt="logo" />
        <h1 className='font-medium text-2xl text-[#DDDDDD] mb-3 '>netflex-Gpt</h1>
        <p className='text-[#888888] mb-1'>
          I have created netfilx gpt witch is help pepol to search ther fevret content
        </p>
        
        <p className='w-full h-16 flex items-center justify-between flex-wrap text-[12px] text-[#dddddd]'>
                reactjs, tailwindCss, firebase
            </p>
    </div>




    </div>

    </div>
    )
}