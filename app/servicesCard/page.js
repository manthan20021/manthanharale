"use client";
export default function ServicesCard({servicesData}){

    const sData = servicesData

    return(

        <div className='mt-5 sm:p-[40px] py-4 px-2 sm:border-none w-full border-y-[.1px] border-gray-700  sm:bg-[#181715]'>
                    <h1 className='font-medium text-3xl text-[#DDDDDD] mb-[17px]'>{sData.heading}</h1>
                    <p className='text-[#888888] text-xl '>{sData.description}</p>
                    </div>
    )
}