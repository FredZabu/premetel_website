/* eslint-disable react/no-unescaped-entities */
import urgentCareImage from "../assets/mentalHealth.png"
import { IoMan } from "react-icons/io5";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaHospitalUser } from "react-icons/fa6";
import { FaPersonPregnant } from "react-icons/fa6";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { MdFamilyRestroom } from "react-icons/md";

function PreventiveCard() {
  return (
    <div className=" w-[90%] h-[100%] mx-auto ">
        <div className="w-[70%] mx-auto ">
              <div className="w-[90%] mx-auto ">
                  <h1 className="text-[35px]  font-title font-normal sm:leading-[45px] tracking-[0.2px]  mt-5 text-center   text-text-color2 ">Preventive Health</h1> 
          <p className="mt-3 text-center font-para font-medium text-base tracking-[0.2px] text-p-text">Our experienced team takes pride in providing progressive preventive healthcare services to our customers. We ensure that your day-to-day health routines align with your fitness/wellness dreams.</p>
                 </div>
                  <div className="flex justify-between items-center mt-5 ">

        <div>
          <div className="grid place-items-center card">
            <FaHospitalUser color="#e47521" size={40} />
            <p className="mt-3 font-para font-medium text-base tracking-[0.2px] text-p-text uppercase">Wellness Visits</p>            
          </div>
          <div className="grid place-items-center mt-5 card">
            <MdFamilyRestroom color="#e47521" size={40} />
            <p className="mt-3 font-para font-medium text-base tracking-[0.2px] text-p-text uppercase">Family Medicine</p>              
          </div>
          <div className="grid place-items-center mt-5 card">
            <IoMan color="#e47521" size={40} />
            <p className="mt-3 font-para font-medium text-base tracking-[0.2px] text-p-text uppercase">Men’s Wellness</p>             
          </div>              
        </div>

        <div className="">
          <img src={urgentCareImage} alt="" />
        </div>
        <div>
          <div className="grid place-items-center card">
            <IoFastFoodOutline color="#e47521" size={40} />
            <p className="mt-3 font-para font-medium text-base tracking-[0.2px] text-p-text uppercase">Diet and Nutrition</p>            
          </div>
          <div className="grid place-items-center mt-5 card">
            <FaPersonPregnant color="#e47521" size={40} />
            <p className="mt-3 font-para font-medium text-base tracking-[0.2px] text-p-text uppercase">Women’s Wellness</p>              
          </div>
          <div className="grid place-items-center mt-5 card">
            <AiOutlineMedicineBox color="#e47521" size={40} />
            <p className="mt-3 font-para font-medium text-base tracking-[0.2px] text-p-text uppercase">Medication Management</p>             
              </div>
        </div> 
        </div>
        </div>
        


      </div>
  )
}

export default PreventiveCard;