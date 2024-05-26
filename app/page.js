import Image from "next/image";
import Herosection from "./components/Herosection";
import Services from "./components/Services";
import About from "./components/About";
import Newabout from "./components/Newabout";
export default function Home() {
  return (
    <>
      <Herosection />
      <Services />
      <About />
      {/* <Newabout /> */}
    </>
  );
}
