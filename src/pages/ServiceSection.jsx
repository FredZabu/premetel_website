import serviceBg from "../assets/serviceBg2.png";

import arrow from "../assets/arrow2.png";
import { ServiceCard } from "../components";
import { serviceData } from "../data/Data";
function ServiceSection() {
  return (
    <div className="sm:h-[150vh]  lg:h-[180vh] 2xl:h-[110vh] sm:grid sm:place-items-center ">
    <div className=" flex flex-col sm:flex-row w-[90%] lg:w-[95%] xl:w-[90%] 2xl:w-[90%] mx-auto sm:mt-40 mt-10 sm:justify-between  sm:relative">
      <div className="sm:relative sm:mt-32">
        <div className="hidden sm:block sm:w-[178px]  sm:h-[178px] serviceBox1 "></div>
        <div className="sm:absolute sm:top-[10%] sm:left-[40%] lg:left-[10%]">
          <h1 className="text-4xl sm:text-4xl 2xl:text-5xl font-title font-[600] text-text-color sm:leading-[45px] tracking-[0.2px] sm:w-[542px] mt-5 text-start ">
                  Our Healthcare<br /><span className="text-btn-color">Services</span>
          </h1>
          <p className="w-[80%] sm:w-[50%] mt-8 2xl:text-2xl 2xl:w-[60%] leading-[25px] tracking-[0.2px] text-p-text">We have tailored our solution to suite your needs</p>
          <button className= {`mt-5  bg-btn-color text-white  font-[700] text-[14px] tracking-[0.2px] leading-[22px] py-[14px] px-[18px] rounded-[5px] flex items-center gap-4`}> <span>Get Started</span> <span className="inline-block p-[1px]">  <img src={arrow} alt=""  />  </span> </button>
        </div>
      </div>

      <div className="sm:w-[979px]  sm:h-[619px] serviceBox2 relative bg-none sm:bg-[url('./src/assets/serviceBg1.png')]  bg-cover  bg-no-repeat ">
        <div className="firstEdit z-10 sm:absolute sm:left-[12%] sm:top-[-25%]">
          {serviceData.map(({ icon, title, description, id ,flag},i) => { 
                    if (i <= 1) {
                        return  <div key={id} className={`mt-10`} >
                          <ServiceCard iconImage={icon} textTitle={title} descript={description} flags={flag} id={id} customStyle='text-xl   ' />
                      </div>
                      }
                   })}
        </div>
        <div className=" sm:absolute sm:bottom-0 sm:right-[12%] lg:right-[15%]">
          {serviceData.map(({ icon, title, description, id ,flag},i) => { 
                    if (i > 1) {
                        return  <div key={id} className={`mt-10`} >
                          <ServiceCard iconImage={icon} textTitle={title} descript={description} flags={flag} id={id} customStyle='text-xl' />
                      </div>
                      }
                   })}
        </div>
      </div>

      <div className=" absolute bottom-[-10px] left-0  h-[154px] hidden sm:block ">
        <img src={serviceBg} alt="" className="h-full" />
      </div>
      </div>
      </div>
  )
}

export default ServiceSection