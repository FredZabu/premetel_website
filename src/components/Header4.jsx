/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import nurse from "../assets/nurse4.png";
import { Btn } from "./index";
import { motion } from "framer-motion";
function Header4() {

  return (
      <div className="bgkla  sm:h-[100vh]  ">

      <div className=" header_parent w-[90%] h-full  sm:w-[90%] bg-transparent  relative mx-auto ">
        
        
          <div className="header_text   p-4 flex flex-col items-center  sm:items-start   sm:mt-0 sm:w-[50%] sm:absolute sm:left-0 sm:top-[50%] sm:translate-y-[-50%] overflow-hidden">
           
           <motion.div animate={{x:0}} initial={{x:1000}} transition={{type:"tween", duration:1 ,delay:0.5}}  >
            <h1  className=" sm:text-6xl font-title font-bold text-white  leading-[60px] sm:leading-[70px] tracking-[0.2px] text-center  mt-10 sm:text-start ">
             Access Primetel’s < br /> Services on USSD
            </h1>
           </motion.div>
            
            <motion.div animate={{y:0}} initial={{y:1000}} transition={{type:"tween", duration:2 ,delay:1}} className=" px-0 mt-2 sm:mt-10 mb-5 ">
            <Btn styles="bg-btn-color text-white py-[15px] px-[25px]" texts="Book Appointment" />
            
            </motion.div>

          </div>
           
        

        <div className="header_image hidden sm:block w-[50%] right-0 absolute top-0 bottom-0    ">
          <div className="bg-btn-color cliped h-[240px] w-80 grid place-items-center mt-[-70px]   sm:text-5xl font-title font-bold text-white  tracking-[0.2px] mx-auto"><h1>NOW ON</h1></div>
         
            <img
              src={nurse}
              alt="image of a nurse"
              className=" mt-[-120px]  w-[100%] "
              
            />
         
        
        </div>

      </div>
</div>
  )
}


export default Header4;
