/* eslint-disable react/no-unescaped-entities */

import nurse from "../assets/nurse4.png";
import { Btn } from "./index";
import { motion } from "framer-motion";
function Header4() {

  return (
      <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{type:"tween", duration:1 }} exit={{x:-10, opacity:0, transition:{duration:1}}} className="  sm:h-[100vh]  ">

      <div  className=" header_parent w-[90%] h-full  sm:w-[90%] bg-transparent  relative mx-auto ">
        
        
          <div className="header_text   p-4 flex flex-col items-center  sm:items-start   sm:mt-0 sm:w-[50%] sm:absolute sm:left-0 sm:top-[50%] sm:translate-y-[-50%] overflow-hidden">
           
           <motion.div animate={{x:0,opacity:1}} initial={{x:50, opacity:0}} transition={{type:"tween", duration:1 ,delay:1}}  >
            <h1  className=" sm:text-6xl font-title font-medium text-white  leading-[60px] sm:leading-[90px] tracking-[0.2px] text-center  mt-10 sm:text-start ">
             Access Primetel’s < br /> Services on USSD
            </h1>
           </motion.div>
            
            <motion.div animate={{y:0, opacity:1}} initial={{y:50, opacity:0}} transition={{type:"tween", duration:1 ,delay:2.8}} className=" px-0 mt-2 sm:mt-10 mb-5 ">
            <Btn styles="bg-btn-color text-white py-[15px] px-[25px]" texts="Book Appointment" />
            
            </motion.div>

          </div>
           
        

        <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{type:"tween", duration:1 }} className="header_image hidden sm:block w-[50%] right-0 absolute top-0 bottom-0    ">
          <div className="bg-btn-color cliped h-[240px] w-80 grid place-items-center mt-[-70px]   sm:text-5xl font-title font-bold text-white  tracking-[0.2px] mx-auto"><h1>NOW ON</h1></div>
         
            <img
              src={nurse}
              alt="image of a nurse"
              className=" mt-[-120px]  w-[100%] "
              
            />
         
        
        </motion.div>

      </div>
</motion.div>
  )
}


export default Header4;
