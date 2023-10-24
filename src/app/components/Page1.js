import React from "react";

const Page1 = () => {
  return (
    <div className="bg-violet-200 h-[100%] flex ">
      <div className="w-[50%]">jabba</div>
      <div className="w-[50%] flex justify-center items-center  ">
        <div className="border-4 border-white border-dashed rounded-full w-[70%] h-[80%] flex justify-center items-center z-40 relative ">
          <div className="bg-violet-400 rounded-full h-80 w-80 z-40 "></div>
          <img
            className="z-50  absolute "
            src="/phone.jpg"
            height={180}
            width={180}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Page1;
