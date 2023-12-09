/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import diseaseImage from "../assets/diseaseImage.png";
import { DiseaseCard, MentalCard, PreventiveCard } from "../components/index.jsx";

import { FaDisease } from "react-icons/fa6";
import { UrgentCare, PreventiveHealth, MentalHealth } from "../data/Data.js";
function ServicePage() {
  return (
    <div className="w-full  mt-[12vh] overflow-x-hidden">
      
        <div className=" h-[65vh] grid place-items-center w-full bg-[#e5f7e9]">
          <div className=" w-[95%] md:w-[60%]">
            <div className="grid place-items-center">
              <FaDisease color="orange" size={70} />   
            </div>

            <h1 className="text-[40px]  font-title font-normal sm:leading-[45px] tracking-[0.2px]  mt-5 text-center   text-text-color2">What We Treat</h1>
            <p className="mt-3 text-center font-para font-medium text-base tracking-[0.2px] text-p-text">We offer dynamic health services that address the most common health conditions. We believe that being sick is already difficult, and thus, getting treatments shouldn’t be. We group the packages of diseases we address into three categories: urgent care, preventative health, and mental health.</p>
          </div>
      </div>
      <div className="md:h-[80vh] w-[90%] md:w-[70%]  relative flex flex-col md:flex-row justify-between md:items-center mx-auto bg-[#ffffff]">
        <div className="md:w-[40%] md:mt-[-20%]">
          <img src={diseaseImage} className="md:w-[100%] " alt="" />
        </div>
        <div className="hidden md:block w-[2px] h-[50%] bg-text-color2"></div>
        <div className="md:w-[40%]">
          <h1 className="text-[26px]  font-title font-normal sm:leading-[45px] tracking-[0.2px]  mt-5    text-text-color2">Talk to a doctor anytime, anyday</h1>
          <p className="mt-3 font-para font-medium text-base tracking-[0.2px] text-p-text">We give you 24-hour access to highly qualified general practitioners and specialists doctors across the nation. With this, you get access to;</p>
          <ul className="list mt-5 ml-5 font-para font-medium text-base tracking-[0.2px] text-p-text">
            <li>Doctor's Notes</li>
            <li>Prescription</li>
            <li>HD Video and Audio calls</li>
          </ul>
        </div>
      </div>

      <div className="overflow-hidden  w-[100vw] bg-[#f2f2f2] pt-10 pb-10">
      <div className="overflow-hidden md:h-[100vh] w-[100%] ">

        <DiseaseCard />
      </div>
      <div className="overflow-hidden md:h-[90vh] w-[100%] mt-10">

        <PreventiveCard />
      </div>      
      <div className="overflow-hidden md:h-[100vh] w-[100%] mt-10">

        <MentalCard />
        </div>  
        </div>
       
    </div>
  )
}

export default ServicePage