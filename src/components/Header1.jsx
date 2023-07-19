/* eslint-disable react/no-unescaped-entities */
import nurse from "../assets/nurse3.png";
import bg2 from "../assets/Bg2.png";

import { Btn } from "./index";
function Header1() {
  return (
    <div className="w-[100vw] relative border-2 mt-[0px]">
      <div>
        <img src={bg2} alt="" />
      </div>
    <div className="header_parent w-[90%] sm:w-[90%] bg-transparent  flex items-center flex-col sm:flex-row border-2 border-btn-color head1">
        <div className="">
        <div className="header_text sm:w-[542px]  p-4 flex flex-col  sm:items-start  mt-5 border-2 sm:mt-0 relative  ">
          <p className="text-white text-[16px] font-bold tracking-[0.1px] leading-[24px]   mt-4 sm:mt-10 ">
            Join Us
          </p>
          <h1 className=" text-4xl sm:text-5xl font-title font-bold text-white sm:leading-[67px] tracking-[0.2px] sm:w-[542px] mt-5 text-start ">
           Get Pharmacy services<br />from the<br />comfort of your home
          </h1>
          <div className="banner-btn px-0 mt-0 sm:mt-5 flex justify-between items-center ">
            <Btn styles="bg-btn-color text-white py-[15px] px-[25px]" texts="Book Appointment" />
            
          </div>

          <div className="angles"></div>
          <div className="angles2"></div>
          </div>
           
</div>

        <div className="header_image hidden sm:block mt-4 sm:mt-0  w-full ">
         
            <img
              src={nurse}
              alt="image of a nurse"
              className="w-full h-full"
            />
         
        
        </div>

      </div>
      </div>
  )
}

export default Header1;