import Image from "next/image";
import Hero from "./component/hero";
import Contact from "./component/contact";
import Projects from "./component/projects";
import About from "./component/about";


export default function Home() {
  return (
    <div>
      <Hero/>
    <About />
    <Projects />
    <Contact />
    

    </div>
  );
}