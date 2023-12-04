/* eslint-disable react/no-unescaped-entities */

import nurse from "../assets/nurse4.png";
import { Btn } from "./index";
import { motion } from "framer-motion";
function Header4() {

  return (
      <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{type:"tween", duration:1 }} exit={{x:-10, opacity:0, transition:{duration:1}}} className="  sm:h-[100vh] border h-[90%] ">

      <div  className=" header_parent flex justify-between items-center w-[95%] h-[100%] border sm:block sm:h-[80%] md:h-full md:w-[98%]  lg:w-[90%] bg-transparent  relative mx-auto ">
        
        
          <div className="header_text   p-4 flex flex-col items-center  sm:items-start   sm:mt-0 sm:w-[60%] md:w-[60%] lg:w-[60%] sm:absolute sm:left-0 sm:top-[50%] sm:translate-y-[-50%] overflow-hidden">
           
           <motion.div animate={{x:0,opacity:1}} initial={{x:50, opacity:0}} transition={{type:"tween", duration:1 ,delay:1}}  >
            <h1  className=" text-lg  sm:text-[35px] md:text-[44px] md:leading-[60px] lg:text-6xl   font-title font-medium text-white  leading-[30px] sm:leading-[50px] lg:leading-[90px] tracking-[0.2px] text-center  mt-10 sm:text-start ">
             Access Primetel’s < br /> Services on USSD
            </h1>
           </motion.div>
            
            <motion.div animate={{y:0, opacity:1}} initial={{y:10, opacity:0}} transition={{type:"tween", duration:0.7 ,delay:2}} className=" px-0 mt-2 sm:mt-10 mb-5 ">
            <Btn styles="bg-btn-color text-[16px] py-[10px] px-[13px] text-white md:py-[15px] md:px-[25px]" texts="Book Appointment" />
            
            </motion.div>

          </div>
           
        

        <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{type:"tween", duration:1 }} className="header_image w-[40%]  sm:block sm:w-[40%] lg:w-[40%] sm:right-0 sm:absolute sm:top-[5%] sm:bottom-0 ">
         
         
            <img
              src={nurse}
              alt="image of a nurse"
              className=" md:h-[80%] lg:h-[90%]  mx-auto"
              
            />
         
        
        </motion.div>

      </div>
</motion.div>
  )
}


export default Header4;
