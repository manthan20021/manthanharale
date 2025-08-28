// app/page.js

import About from "./about/page";
import Contact from "./contact/page";
import Footer from "./footer/page";
import Header from "./header/page";
import Home from "./home/page";
import Projects from "./projects/page";
import Services from "./services/page";
import Skills from "./skills/page";






export default function Page() {
  return (
    <div className="sm:w-[1034.14px] w-[375px] sm:px-[100px] px-5 ">
            <Home/>
            <About/>
            <Projects/>
            <Skills/>
            <Services/>
            <Contact/>
            <Footer/>
    </div>
  );
}
