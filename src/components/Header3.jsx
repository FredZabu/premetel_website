/* eslint-disable react/no-unescaped-entities */
import nurse from "../assets/nurse5.png";
import { Btn } from "./index";
function Header3() {
  return (
  <div className="bgkla  sm:h-[100vh]  ">

      <div className=" header_parent w-[90%] h-full  sm:w-[80%] bg-transparent  relative mx-auto ">
        
        
          <div className="header_text   p-4 flex flex-col items-center  sm:items-start  mt-0  sm:mt-0 sm:w-[50%] sm:absolute sm:left-0 sm:top-[50%] sm:translate-y-[-50%] ">
           
           
            <h1 className=" text-5xl sm:text-6xl font-title font-bold text-white leading-[60px] sm:leading-[70px] tracking-[0.2px]  mt-10 text-center sm:text-start ">
            Customized Telehealth consultations<br />for you
            </h1>
            <div className="banner-btn px-0 mt-2 sm:mt-10 mb-5 flex justify-between items-center ">
            <Btn styles="bg-btn-color text-white py-[15px] px-[25px]" texts="Book Appointment" />
            
            </div>

          </div>
           
        

        <div className="header_image hidden sm:block w-[60%] right-0 absolute top-0 bottom-0 ">
         
         
            <img
              src={nurse}
              alt="image of a nurse"
              className=" h-full "
            />
         
        
        </div>

      </div>
</div>
  )
}

export default Header3;
