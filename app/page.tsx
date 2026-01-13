import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import About from "@/components/About";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main className="w-full">
       < Navbar />
       < Hero />  
       < Courses />  
       < About />  
      
       < Contact />                                                            
    </main>
  );
}
