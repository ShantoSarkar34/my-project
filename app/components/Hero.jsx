import React from "react";
import Image from "next/image";
import {BsArrowDown} from "react-icons/bs"
import img1 from "../img/profile.jpg";
import img2 from "../img/bg.jpg";
function Hero() {
  return (
    <section className="h-[64rem]    w-full customBg">
    <div className="mx-[15rem] ">
        <div className="pt-[15rem] flex items-center justify-center">
          <div className="h-[250px] w-[250px] border-[10px] border-[#5a7b92] rounded-full">
            <Image
              src={img1}
              height={300}
              width={300}
              alt="profile"
              className="h-[235px] w-[250px] rounded-full"
            />
          </div>
        </div>
        <h1 className="mt-10 text-[60px] font-bold text-white text-center ">
          ALBERT
          <span className="text-[#B84C60]"> WALKERS</span>
        </h1>
        <h3 className="mt-5 text-[32px] font-semibold text-center text-white">
          I'm a Web Developer
        </h3>
        <div className="mt-[8rem] flex items-center justify-center">
          <BsArrowDown className="text-[60px] text-[#B84C60]  "/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
