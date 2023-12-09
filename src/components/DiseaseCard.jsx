/* eslint-disable react/no-unescaped-entities */
import urgentCareImage from "../assets/urgentCare.png"
import { IoMan } from "react-icons/io5";
import { LiaAllergiesSolid } from "react-icons/lia";
import { FaLeaf } from "react-icons/fa";
import { FaPersonPregnant } from "react-icons/fa6";

import { FaDisease } from "react-icons/fa6";
import { FaHeadSideVirus } from "react-icons/fa";

function DiseaseCard() {
  return (
    <div className="w-[95%] md:w-[90%]  mx-auto ">
        <div className="  md:w-[70%] mx-auto ">
        <div className="w-[90%] mx-auto ">
           <h1 className="text-[30px] md:text-[35px]  font-title font-normal sm:leading-[45px] tracking-[0.2px]  mt-5 text-center   text-text-color2 ">Urgent Care</h1> 
          <p className="mt-3 text-center font-para font-medium text-base tracking-[0.2px] text-p-text">Upon being categorised as a critical care case, the patient will directly have customised consultations, tests, and prescriptions on diseases such as follows.</p>
                </div>
                  <div className="flex justify-between items-center mt-5">

        <div>
          <div className="grid place-items-center card">
            <FaLeaf color="#e47521" size={40} />
            <p className="mt-3 font-para font-medium text-[13px] md:text-base tracking-[0.2px] text-p-text">ALLERGIES</p>            
          </div>
          <div className="grid place-items-center mt-5 card">
            <FaHeadSideVirus color="#e47521" size={40} />
            <p className="mt-3 font-para font-medium text-[13px] md:text-base tracking-[0.2px] text-p-text">HEADACHE</p>              
          </div>
          <div className="grid place-items-center mt-5 card">
            <IoMan color="#e47521" size={40} />
            <p className="mt-3 font-para font-medium text-[13px] md:text-base tracking-[0.2px] text-p-text">MEN'S HEALTH</p>             
          </div>              
        </div>

        <div className="hidden md:block">
          <img src={urgentCareImage} alt="" />
        </div>
        <div>
          <div className="grid place-items-center card">
            <LiaAllergiesSolid color="#e47521" size={40} />
            <p className="mt-3 font-para font-medium text-[13px] md:text-base tracking-[0.2px] text-p-text">SKIN CONDITIONS</p>            
          </div>
          <div className="grid place-items-center mt-5 card">
            <FaPersonPregnant color="#e47521" size={40} />
            <p className="mt-3 font-para font-medium text-[13px] md:text-base tracking-[0.2px] text-p-text">WOMEN'S HEALTH</p>              
          </div>
          <div className="grid place-items-center mt-5 card">
            <FaDisease color="#e47521" size={40} />
            <p className="mt-3 font-para font-medium text-[13px] md:text-base tracking-[0.2px] text-p-text">COLD & FLU</p>             
              </div>
        </div> 
        </div>
        </div>
        


      </div>
  )
}

export default DiseaseCard