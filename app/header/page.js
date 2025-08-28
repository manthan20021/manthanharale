"use client"

import Link from "next/link"

export default function Header(){
    return(
        <div className='sm:shadow-[0_8px_23px_#141414] shadow-[0_4px_12px_#141414]  sticky sm:top-10  top-5 sm:ml-[470px] sm:rounded-xl flex  items-center justify-between  px-2.5 sm:w-[380px] w-[300px] sm:h-9 h-8 text-[13px] text-[#767676]'>
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
    )
}