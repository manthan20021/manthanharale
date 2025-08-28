"use client"
import { useEffect, useState } from "react";
import ServicesCard from "../servicesCard/page";

export default function Services(){

  const [Servives, setServives] = useState([])

  useEffect(()=>{

    const servivesDataCalling = async() => {
      const servivesData = await fetch('/services.json')
      const jsonData = await servivesData.json()
      setServives(jsonData)
    }

    servivesDataCalling()
  },[])

    return(
        <div id="services" className='sm:w-[786px] pt-[100px] sm:pt-[200px]'> 
    <h4 className="text-[18px] font-semibold text-[#987750] sm:mb-10 ">SERVICES</h4>
    <h1 className='text-[59px] pb-4 font-sans text-[#DDDDDD] mb-[29px]'><span className='border-b-[.1px] border-[#444444] pb-4'>Services</span>es</h1>

    
      <div className='w-full mt-16 overflow-hidden flex flex-col items-center justify-between '>

        {
          Servives.map((data, index) => {
            return <ServicesCard key={index} servicesData={data}/>
          })
        }
        
      </div>
      
    </div>
    )
}