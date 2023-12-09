/* eslint-disable react/no-unescaped-entities */
import urgentCareImage from "../assets/mentalHealth2.png"
import { IoMan } from "react-icons/io5";
import { GiLovers } from "react-icons/gi";
import { FaPersonRunning } from "react-icons/fa6";
import { GiMadScientist } from "react-icons/gi";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { MdOutlineSick } from "react-icons/md";

function MentalCard() {
  return (
    <div className="w-[95%] md:w-[90%] h-[100%] mx-auto ">
        <div className=" md:w-[70%] mx-auto ">
              <div className="w-[90%] mx-auto ">
                  <h1 className="text-[30px] md:text-[35px]  font-title font-normal sm:leading-[45px] tracking-[0.2px]  mt-5 text-center   text-text-color2 ">Mental Health</h1> 
          <p className="mt-3 text-center font-para font-medium text-base tracking-[0.2px] text-p-text">We offer a full spectrum of compassionate mental health services that are highly flexible and accessible.Our services come from clinical experts with years of experience in dealing with the following mental conditions.</p>
                 </div>
                  <div className="flex justify-between items-center mt-5 ">

        <div>
          <div className="grid place-items-center card">
            <FaPersonRunning color="#e47521" size={40} />
            <p className="mt-3 font-para font-medium text-[13px] md:text-base tracking-[0.2px] text-p-text uppercase">Anxiety</p>            
          </div>
          <div className="grid place-items-center mt-5 card">
            <MdOutlineSick color="#e47521" size={40} />
            <p className="mt-3 font-para font-medium text-[13px] md:text-base tracking-[0.2px] text-p-text uppercase">Depression</p>              
          </div>
          <div className="grid place-items-center mt-5 card">
            <IoMan color="#e47521" size={40} />
            <p className="mt-3 font-para font-medium text-[13px] md:text-base tracking-[0.2px] text-p-text uppercase">Postpartum</p>             
          </div>              
        </div>

        <div className="hidden md:block">
          <img src={urgentCareImage} alt="" className="object-contain" />
        </div>
        <div>
          <div className="grid place-items-center card">
            <GiLovers color="#e47521" size={40} />
            <p className="mt-3 font-para font-medium text-[13px] md:text-base tracking-[0.2px] text-p-text uppercase">Relationships</p>            
          </div>
          <div className="grid place-items-center mt-5 card">
            <GiMadScientist color="#e47521" size={40} />
            <p className="mt-3 font-para font-medium text-[13px] md:text-base tracking-[0.2px] text-p-text uppercase">Trauma & Loss</p>              
          </div>
          <div className="grid place-items-center mt-5 card">
            <AiOutlineMedicineBox color="#e47521" size={40} />
            <p className="mt-3 font-para font-medium text-[13px] md:text-base tracking-[0.2px] text-p-text uppercase">Screenings</p>             
              </div>
        </div> 
        </div>
        </div>
        


      </div>
  )
}

export default MentalCard;