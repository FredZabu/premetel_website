/* eslint-disable react/no-unescaped-entities */

import nurse from "../assets/nurse4.png";
import { Btn } from "./index";
import { motion } from "framer-motion";
function Header4() {

  return (
//       <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{type:"tween", duration:1 }} exit={{x:-10, opacity:0, transition:{duration:1}}} className="  sm:h-[100%]  h-[90%] grid place-items-center">

//       <div  className=" header_parent flex justify-between items-center  w-[95%] h-[100%]  md:block sm:h-[80%] md:h-full md:w-[98%]  lg:w-[90%] bg-transparent  relative mx-auto ">
        
        
//           <div className="header_text   sm:p-4 flex flex-col  sm:items-start   sm:mt-0 sm:w-[60%] md:w-[60%] lg:w-[60%] md:absolute md:left-0 md:top-[50%] md:translate-y-[-50%] overflow-hidden">
           
//            <motion.div animate={{x:0,opacity:1}} initial={{x:50, opacity:0}} transition={{type:"tween", duration:1 ,delay:1}}  >
//             <h1  className=" text-2xl  sm:text-[38px] md:text-[48px] md:leading-[70px] lg:text-6xl   font-title font-medium text-white  leading-[35px] sm:leading-[55px] lg:leading-[90px] tracking-[0.2px] text-start  mt-10 sm:text-start ">
//              Access Primetel’s < br /> Services on USSD
//             </h1>
//            </motion.div>
            
//             <motion.div animate={{y:0, opacity:1}} initial={{y:10, opacity:0}} transition={{type:"tween", duration:0.7 ,delay:2}} className="px-0 mt-2 sm:mt-5 md:mt-10 mb-5 ">
//             <Btn styles="bg-btn-color text-[16px] py-[10px] px-[13px] text-white md:py-[15px] md:px-[25px]" texts="Appointment" />
            
//             </motion.div>

//           </div>
           
        

//         <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{type:"tween", duration:1 }} className="header_image w-[30%]  sm:block md:w-[50%] lg:w-[50%] md:right-0 md:absolute md:top-[5%] md:bottom-0 ">
         
         
//             <img
//               src={nurse}
//               alt="image of a nurse"
//               className=" h-[50%] md:h-[80%] lg:h-[90%]  mx-auto"
              
//             />
         
        
//         </motion.div>

//       </div>
// </motion.div>



    
    // New edit

    <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{type:"tween", duration:0.5 }} exit={{x:-10, opacity:0, transition:{duration:1}}}  className=" h-[100%] w-[98%]  mx-auto sm:h-[100%] grid place-items-end">

      <div className="  header_parent w-[100%] h-full sm:h-[100%]  sm:w-[100%]  lg:w-[90%] bg-transparent  relative mx-auto  ">
        
      
          <div className="header_text   lg:p-0 flex flex-col  items-start  mt-0  sm:mt-0 w-[60%] absolute left-0 bottom-0 sm:bottom-auto sm:top-[50%] sm:translate-y-[-50%] ">
            <motion.h1 animate={{x:0,opacity:1}} initial={{x:50, opacity:0}} transition={{type:"tween", duration:1 ,delay:1}} className="  text-2xl  sm:text-[35px] md:text-[45px] md:leading-[70px] lg:text-5xl xl:text-6xl    font-title font-medium text-white  leading-[35px] sm:leading-[55px] lg:leading-[80px] xl:leading-[90px] tracking-[0.2px] text-start  mt-10 sm:text-start  ">
            Pharmacy Services <br />From Home
            </motion.h1>
            <motion.div animate={{y:0, opacity:1}} initial={{y:10, opacity:0}} transition={{type:"tween", duration:1 ,delay:2}} className="banner-btn px-0 mt-2 sm:mt-10 mb-5 flex justify-between items-center ">
            <Btn styles="bg-btn-color text-[16px] py-[10px] px-[13px] text-white md:py-[15px] md:px-[25px]" texts="Appointment" />
            
            </motion.div>

          </div>
            
        

        <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{type:"tween", duration:1 }} className="header_image  sm:block w-[45%] h-[95%] border-2 sm:w-[40%] right-0 absolute sm:top-0 bottom-0 ">
         
         
            <img
              src={nurse}
              alt="image of a nurse"
              className=" absolute bottom-0 right-0 w-auto border h-[100%]"
            />
         
        
        </motion.div>

      </div>
</motion.div>
  )
}


export default Header4;
