/* eslint-disable react/no-unescaped-entities */
import nurse from "../assets/nurse3.png";
import { Btn } from "./index";
import { motion } from "framer-motion";
function Header2() {
  return (
<motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{type:"tween", duration:1 }} exit={{x:-10, opacity:0, transition:{duration:1}}}  className=" h-[100%] w-[98%]  mx-auto sm:h-[100%]">

      <div className=" header_parent w-[100%] h-full  sm:w-[100%]  lg:w-[90%] bg-transparent  relative mx-auto  flex justify-between items-center">
        <div className="header_text   lg:p-0 flex flex-col  items-start  mt-0  sm:mt-0 sm:w-[60%] sm:absolute sm:left-0 sm:top-[50%] sm:translate-y-[-50%] ">

            <motion.h1 animate={{x:0,opacity:1}} initial={{x:50, opacity:0}} transition={{type:"tween", duration:1 ,delay:1}} className=" text-3xl  sm:text-[35px] md:text-[45px] md:leading-[70px] lg:text-5xl xl:text-6xl    font-title font-medium text-white  leading-[35px] sm:leading-[55px] lg:leading-[80px] xl:leading-[90px] tracking-[0.2px] text-start  mt-10 sm:text-start  ">
            Access To<br />Laboratory Services
            </motion.h1>
            <motion.div animate={{y:0, opacity:1}} initial={{y:10, opacity:0}} transition={{type:"tween", duration:1 ,delay:2}} className="banner-btn px-0 mt-2 sm:mt-10 mb-5 flex justify-between items-center ">
            <Btn styles="bg-btn-color text-[16px] py-[10px] px-[13px] text-white md:py-[15px] md:px-[25px]" texts="Appointment" />
            
            </motion.div>

        </div>
           
        

        <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{type:"tween", duration:1 }} className="header_image h-[100%] sm:block w-[60%] sm:w-[45%] sm:right-0 sm:absolute sm:top-0 sm:bottom-0 ">
         
         
            <img
              src={nurse}
              alt="image of a nurse"
              className=" h-full  "
            />
         
        
        </motion.div>

      </div>
</motion.div>
  )
}

export default Header2;

