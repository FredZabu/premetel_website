import DoctorImage from "../assets/storyImage1.png";
import image1 from "../assets/teamImage/image1.png";
import image2 from "../assets/teamImage/image2.png";
import image3 from "../assets/teamImage/image3.png";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { FaHeartPulse } from "react-icons/fa6";
import { GiRomanToga } from "react-icons/gi";
function AboutPage() {
  return (
    <div className=" mt-[12vh] w-[100vw] bg-[#fffcf1]">
           
      <div className="md:h-[100vh] xl:h-[80vh] w-[100vw] bg-[#376198]  ">

        <div className=" md:w-[95%] lg:w-[90%]  mx-auto  flex flex-col md:flex-row justify-between pt-10">
          <div className=" order-2 md:order1 w-[100% ] px-4 pb-10 md:w-[50%]">

            <div>
            <h1 className="text-[30px] md:text-[40px]  font-title font-semibold sm:leading-[45px] tracking-[0.2px] mb-5   text-[orange]">Our Story<span className="text-light-gray-1">...</span></h1>
            <p className="mt-3 font-para font-medium text-base tracking-[0.2px] text-light-gray-1">Access to high-quality healthcare services, particularly in rural areas, has highly been jeopardised and turned into a “privilege.” We are keen on harnessing technological advancements into powerful medical tools that challenge how we define high-quality healthcare services.
</p>
            
            <p className=" mt-5 font-para font-medium text-base tracking-[0.2px] text-light-gray-1"> We provide our customers with the safest and most affordable medical services while offering personalised consultations during and after prescriptions.
            </p>
            <p className=" mt-5 font-para font-medium text-base tracking-[0.2px] text-light-gray-1">We combine the latest technology with the
                knowledge and expertise of our medical staff to make healthcare
                more affordable, accessible, and inclusive to everyone in the
                rural areas of Tanzania.</p>
              <p className="md:mt-5 font-para font-medium text-base tracking-[0.2px] text-light-gray-1">We strongly believe that being sick is complicated; thus, accessing medical services shouldn’t be.</p>
              </div>

            
          </div>
  
          <div className="order-1   md:order-2 inline-grid place-items-center md:mt-5  overflow-hidden ">
            <img src={DoctorImage} alt="" className=" w-[60%] md:w-[70%] lg:w-[90%] xl:w-auto rounded-3xl " />
          </div>          
        </div>

      </div>

      <div className="w-[100vw] pt-10 pb-10 bg-faded-color grid place-items-center  md:rounded-b-[100%]">
        <div className="px-4 md:w-[40%]">
            <div className="grid place-items-center">
              <FaHeartPulse color="orange" size={70} />
              
          </div>
          <h1 className="text-[30px] md:text-[40px]  font-title font-normal sm:leading-[45px] tracking-[0.2px]  mt-5 text-center   text-text-color2">Our mission</h1>
          <p className="mt-3 text-center font-para font-medium text-base tracking-[0.2px] text-p-text">To challenge the conventional healthcare systems with the ever-expanding technological advancements in providing efficient, customised, and convenient healthcare services to people in rural areas.</p>

          <h1 className="text-[30px]  font-title font-normal sm:leading-[45px] tracking-[0.2px]  mt-5 text-center   text-text-color2">How?</h1>
          
            <p className="mt-3 text-center font-para font-medium text-base tracking-[0.2px] text-p-text">By tapping the power of technology in radiating access to healthcare services across each household regardless of location income level, or health condition.
          </p> 
            <p className="mt-3 text-center font-para font-medium text-base tracking-[0.2px] text-p-text">We seek to join other innovative medical institutions in
                providing our customers with the safest and most efficient
                medical assistance. You are the reason we operate.</p>          

          
        </div>

      </div>



      <div className=" w-[90vw] mx-auto mt-10 ">

        <h1 className="text-[30px] md:text-[40px]  font-title font-normal sm:leading-[45px] tracking-[0.2px]  mt-5 text-center   text-text-color2">We Value...</h1>


        <div className="mt-10 grid md:grid-cols-3 gap-4"> 
          <div className=" p-10 bg-[#FFFFFF] middleCard">
            <div className="grid place-items-center">
              <IoDiamondOutline color="orange" size={60} />
              
            </div>
            
            <h1 className="text-[20px]  font-title font-normal sm:leading-[45px] tracking-[0.2px]  mt-5 text-center   text-text-color2">Ownership</h1>
            <p className="mt-3 text-center font-para font-medium text-base tracking-[0.2px] text-p-text">We personalise your medical journey and walk with you across all milestones until recovery. We are problem solvers who ensure that your medical journey is nothing short of healing and restoration.</p>
          </div>
          <div className=" p-10 bg-[#FFFFFF] middleCard">
            <div className="grid place-items-center">
              <GiRomanToga color="orange" size={60}/>
            </div>
            
            <h1 className="text-[20px]  font-title font-normal sm:leading-[45px] tracking-[0.2px]  mt-5 text-center   text-text-color2">Inclusivity</h1>
            <p className="mt-3 text-center font-para font-medium text-base tracking-[0.2px] text-p-text">We don't leave anyone behind. Irrespective of your financial, environmental, religious, and political backgrounds, be assured of customised help from our experienced team.</p>
          </div>
          <div className=" p-10 bg-[#FFFFFF] middleCard">
            <div className="grid place-items-center">
             <MdOutlinePublishedWithChanges color="orange" size={60} />
              
            </div>
            
            <h1 className="text-[20px]  font-title font-normal sm:leading-[45px] tracking-[0.2px]  mt-5 text-center   text-text-color2">Flexibility</h1>
            <p className="mt-3 text-center font-para font-medium text-base tracking-[0.2px] text-p-text">We are relentless in maximising our capacities to meet the needs of our customers. We aim to challenge the standards every time with our unmatched flexibility in providing our services.</p>
          </div>          
        </div>

      </div>
     

      <div className="mt-14">
       
        <div className=" w-[100%] mx-auto relative overflow-hidden">
        <h1 className="text-[30px] md:text-[40px]  font-title font-normal sm:leading-[45px] tracking-[0.2px]  mt-5 text-center   text-text-color2">Meet The Team</h1>
        <p className="mt-3 text-center font-para font-medium text-base tracking-[0.2px] text-p-text w-[90%] md:w-[60%] mx-auto">Our medical staffs are well equipped to meet your medical needs 24/7. With three categories covering over 200 conditions, help is always assured.</p>          
          <div className="flex  w-[80%] mx-auto mt-5">
            <div><img src={image1} alt="" /></div>
            <div><img src={image2} alt="" /></div>
            <div><img src={image3} alt="" /></div>
          </div>
          <div className="w-[100%] h-[10px]  bg-btn-color absolute bottom-0 left-0 right-0 grid place-items-end">
            <div className="w-[40%] h-full  flex">
              <div className="w-[50%] h-full bg-main-color"></div>
              <div className="w-[40%] h-full bg-p-text"></div>
              <div className="w-[10%] h-full bg-p-text-alt"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutPage