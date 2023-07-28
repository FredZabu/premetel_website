/* eslint-disable react/no-unescaped-entities */
import nurse from "../assets/nurse4.png";
import { Btn } from "./index";
function Header4() {
  return (
      <div className="bgkla  sm:h-[100vh]  ">

      <div className=" header_parent w-[90%] h-full  sm:w-[80%] bg-transparent  relative mx-auto ">
        
        
          <div className="header_text   p-4 flex flex-col items-center  sm:items-start   sm:mt-0 sm:w-[50%] sm:absolute sm:left-0 sm:top-[50%] sm:translate-y-[-50%] ">
           
           
            <h1 className=" text-5xl sm:text-6xl font-title font-bold text-white  leading-[60px] sm:leading-[70px] tracking-[0.2px] text-center  mt-10 sm:text-start ">
             Access Primetel’s < br /> Services on USSD
            </h1>
            <div className=" px-0 mt-2 sm:mt-10 mb-5 ">
            <Btn styles="bg-btn-color text-white py-[15px] px-[25px]" texts="Book Appointment" />
            
            </div>

          </div>
           
        

        <div className="header_image hidden sm:block w-[50%] right-0 absolute top-0 bottom-0 ">
          <div className="bg-btn-color cliped h-60 w-80 grid place-items-center   sm:text-5xl font-title font-bold text-white border-2 tracking-[0.2px] mx-auto"><h1>Premetel</h1></div>
         
            <img
              src={nurse}
              alt="image of a nurse"
              className=" mt-[-110px] "
            />
         
        
        </div>

      </div>
</div>
  )
}


export default Header4;
