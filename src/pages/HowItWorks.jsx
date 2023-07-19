import howBg from "../assets/howBg.png";
import how from "../assets/nurse4.png";
import { howData } from "../data/Data";
function HowItWorks() {
  return (
      <div className=" h-auto sm:h-[100vh] w-[90%] relative mx-auto mt-32">
          <div className="z-0 hidden sm:block absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
              <img src={howBg} alt=""  />
          </div>
          <div className=" static sm:absolute sm:top-0 sm:left-0 sm:right-0 sm:bottom-0 flex justify-between  h-full">
              <div className="flex-[1]">
                  <h1 className=" text-xl sm:text-4xl font-title font-[600] text-text-color  sm:leading-[45px] tracking-[0.2px] sm:w-[542px] sm:mt-5 mt-5 text-start ">
                  Get 24/7 Care Right From<br /><span className="text-btn-color ">Your Phone</span>
              </h1>
                  <p className="sm:w-[450px] mt-5 text-text-color">We provide compassionate healthcare services to all our customers. All you have to do is create an account.</p>

                  <div className="flex flex-col">
        {howData.map(({ icon, title, description, id }) => {
          return <div key={id} className="flex items-center mt-5">
            <div className=" w-[72px] relative">
              <div className={` bg-white bad  w-[72px] h-[72px]`}>

              </div>
              <img src={icon} alt="" className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] " />
          </div>
          
          <div className="ml-1">
            <h1 className="text-xl  font-title font-[600] text-text-color  tracking-[0.2px] mt-5 text-start ">{title}</h1>
            <p className="sm:text-[18px] font-title font-medium leading-[30px] tracking-[0.2px] text-second-text-color ">{ description}</p>
          </div>
        </div>
      })}
      </div>
              </div>
              <div className="h-[100%]  flex-[1] hidden sm:block"><img src={how} alt="" className="h-full" /></div>
          </div>
    </div>
  )
}

export default HowItWorks