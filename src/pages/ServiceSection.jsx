import serviceBg from "../assets/serviceBg2.png";

import arrow from "../assets/arrow2.png";
import { ServiceCard } from "../components";
import { serviceData } from "../data/Data";
function ServiceSection() {
  return (
    <div className=" sm:h-[200vh] mt-20">

      <div className=" lg:w-[95%] xl:w-[90%] 2xl:w-[90%] h-full  mx-auto  sm:relative">

        <div className=" grid place-items-center sm:block">
          <div className="sm:relative">
            <div className="hidden sm:block sm:w-[178px]  sm:h-[178px] serviceBox1 "></div>
            <div className=" sm:absolute top-0 left-10">
              <h1 className="text-4xl sm:text-4xl 2xl:text-5xl font-title font-[600] text-text-color sm:leading-[45px] tracking-[0.2px] sm:w-[542px] mt-5 text-start ">
                  Our Healthcare<br /><span className="text-btn-color">Services</span>
              </h1>
              <p className="w-[80%] sm:w-[50%] mt-2 2xl:text-2xl 2xl:w-[60%] leading-[25px] tracking-[0.2px] text-p-text">We have tailored our solution to suite your needs</p>
              <button className= {`mt-5  bg-btn-color text-white  font-[700] text-[14px] tracking-[0.2px] leading-[22px] py-[14px] px-[18px] rounded-[5px] flex items-center gap-4`}> <span>Get Started</span> <span className="inline-block p-[1px]">  <img src={arrow} alt=""  />  </span> </button>
            </div>
          </div>
        </div>
        
        <div className="w-[90%] mx-auto sm:w-[80%]  sm:absolute top-0 right-0 bottom-0  serviceBox2 bg-none sm:bg-[url('./src/assets/serviceBg1.png')]  bg-cover  bg-no-repeat  grid place-items-center">
          
        <div className=" grid sm:grid-cols-2 sm:grid-rows-2 place-items-center gap-20 ">
          {serviceData.map(({ icon, title, description, id ,flag}) => { 
                   
                        return  <div key={id} className={`mt-10`} >
                          <ServiceCard iconImage={icon} textTitle={title} descript={description} flags={flag} id={id} customStyle='text-xl   ' />
                      </div>
                  
                   })}
        </div>
       </div>

     
      </div>
      </div>
  )
}

export default ServiceSection