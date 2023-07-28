import serviceBg from "../assets/serviceBg.jpg";

import DiseaseTable from "../components/DiseaseTable";
import { UrgentCare, PreventiveHealth, MentalHealth } from "../data/Data.js";
function ServicePage() {
  return (
    <div className="w-full  mt-[12vh] overflow-x-hidden">
      <div className="h-[50vh]  sm:h-[70vh] relative">
        <div className=" h-full sm:w-[50%] relative">
          <img src={serviceBg}  alt="" className="h-full" />
        </div>
        <div className="  absolute top-[50%] z-[5] bg-transparent sm:bg-white  translate-y-[-50%] left-0 right-0 sm:left-[60%] sm:w-[35%] p-2 sm:p-0">
          <h1 className="text-4xl sm:text-4xl 2xl:text-5xl font-title font-[600] sm:text-text-color sm:leading-[45px] tracking-[0.2px] sm:w-[542px] mt-5 text-center sm:text-start text-white">What We Treat</h1>
          <p className="w-[100%] sm:w-[95%] mt-2 2xl:text-2xl 2xl:w-[60%] leading-[25px] text-center sm:text-start tracking-[0.2px] text-white sm:text-p-text">We offer dynamic health services that address the most common health conditions. We believe that being sick is already difficult, and thus, getting treatments shouldn’t be. We group the packages of diseases we address into three categories: urgent care, preventative health, and mental health. </p>
        </div>
        <div className="bgkla2 border-white absolute top-0 left-0 right-0 bottom-0 sm:w-[50%]"></div>
      </div>

      <div className="mt-20">

        <DiseaseTable data = {UrgentCare} titleSec ='URGENT CARE' description = 'Upon being categorised as a critical care case, the patient will directly have customised consultations, tests, and prescriptions on diseases such as follows.' />
      </div>
      <div className="mt-20">

        <DiseaseTable data = {PreventiveHealth} titleSec = 'PREVENTIVE HEALTH' description = 'Our experienced team takes pride in providing progressive preventive healthcare services to our customers. We ensure that your day-to-day health routines align with your fitness/wellness dreams. We offer robust treatment programs that help you handle the following conditions without complications.' />
      </div>
      <div className="mt-20">

        <DiseaseTable data = {MentalHealth} titleSec = 'MENTAL HEALTH' description = 'We offer a full spectrum of compassionate mental health services that are highly flexible and accessible. You will be sure to find someone who meets your needs by being exposed to our highly qualified therapists and psychiatrists who immediately cease your mental health issue. Our services come from clinical experts with years of experience in dealing with the following mental conditions;' />
      </div>      
    </div>
  )
}

export default ServicePage