import Image from "next/image";
import Navbar from "./components/Navbar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className=" overflow-y-scroll h-[90%] ">
        <Page1 />
        <Page2 />
      </div>
    </div>
  );
}
