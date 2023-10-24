import React from "react";

const Navbar = () => {
  return (
    <div className="h-[10%] bg-white flex item px-12 items-center  justify-between  ">
      <img height={40} width={40} src="/navbar-emoji.svg"></img>
      <div className="flex space-x-7 ">
        <ul>Emotions</ul>
        <ul>Manifesto</ul>
        <ul>Self-Awareness Test</ul>
        <ul>Work with Us</ul>
      </div>

      <button className=" bg-black text-white rounded-3xl px-8 py-3 ">
        Download App
      </button>
    </div>
  );
};

export default Navbar;
