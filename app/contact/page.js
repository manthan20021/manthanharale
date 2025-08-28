"use client"
export default function Contact(){

    return(

        <div id='contact' className='sm:w-[786px] w-full pt-[100px] sm:pt-[200px]'> 
    <h4 className="text-[18px] font-semibold text-[#987750] sm:mb-10">CONTACT</h4>
    <h1 className='text-[59px] pb-4 font-sans text-[#DDDDDD] mb-[29px]'><span className='border-b-[.1px] border-[#444444] pb-4'>Get In</span>Touch</h1>
     

      <form className='w-full sm:h-[475.91px] h-[550px] flex flex-col items-center justify-between' action="">
        <div className='w-full sm:flex items-center justify-between'>
          <input className='sm:w-[382.98px] w-full h-[70px] px-5 sm:mb-0 mb-[17px]  border-[.1px] border-[#444444] text-[#dddddd] font-[30px] text-2xl' type="text" placeholder='Name *' />
          <input className='sm:w-[382.98px] w-full h-[70px] px-5  border-[.1px] border-[#444444] text-[#dddddd] font-[30px] text-2xl' type="text" placeholder='Email *' />
        </div>

        <input className='w-full h-[70px] px-5 border-[.1px] border-[#444444] text-[#dddddd] font-[30px] text-2xl' type="text" placeholder='Phone' />
        <input className='w-full h-[200px] px-4 py-5 border-[.1px] border-[#444444] text-[#dddddd] font-[30px] text-2xl' type="text" placeholder='Message' />

        <button className='w-full h-[70px] px-5 py-4  border-[.1px] border-[#444444] text-[#dddddd] font-[30px] text-2xl'>Submit</button>

      </form>
    </div>
    )
}