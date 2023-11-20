/* eslint-disable react/no-unescaped-entities */
import nurse from "../assets/nurse3.png";
import { Btn } from "./index";
import { motion } from "framer-motion";
function Header2() {
  return (
<motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{type:"tween", duration:1 }} exit={{x:-10, opacity:0, transition:{duration:1}}}  className="  sm:h-[100vh]">

      <div className=" header_parent w-[90%] h-full  sm:w-[90%] bg-transparent  relative mx-auto ">          <div className="header_text   p-4 flex flex-col items-center  sm:items-start  mt-0  sm:mt-0 sm:w-[60%] sm:absolute sm:left-0 sm:top-[50%] sm:translate-y-[-50%] ">

        
        
           
           
            <motion.h1 animate={{x:0,opacity:1}} initial={{x:50, opacity:0}} transition={{type:"tween", duration:1 ,delay:1}} className=" text-5xl sm:text-7xl font-title font-medium text-white leading-[60px] sm:leading-[90px] tracking-[0.2px]  mt-10 text-center sm:text-start ">
            Access To<br />Laboratory Services
            </motion.h1>
            <motion.div animate={{y:0, opacity:1}} initial={{y:10, opacity:0}} transition={{type:"tween", duration:1 ,delay:2}} className="banner-btn px-0 mt-2 sm:mt-10 mb-5 flex justify-between items-center ">
            <Btn styles="bg-btn-color text-white py-[15px] px-[25px]" texts="Book Appointment" />
            
            </motion.div>

          </div>
           
        

        <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{type:"tween", duration:1 }} className="header_image hidden sm:block w-[40%] right-0 absolute top-0 bottom-0 ">
         
         
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

