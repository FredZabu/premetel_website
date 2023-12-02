
import how from "../assets/nurse44.png";
import { howData } from "../data/Data";
function HowItWorks() {
  return (
      <div className=" h-auto sm:h-[100vh] w-[90%] relative mx-auto mt-32">
         
          <div className=" static sm:absolute sm:top-0 sm:left-0 sm:right-0 sm:bottom-0 flex justify-between items-center h-full">
              <div className="flex-[1]">
                  <h1 className=" text-xl sm:text-4xl font-title font-medium text-text-color2  sm:leading-[50px] tracking-[0.2px] sm:w-[542px] sm:mt-5 mt-5 text-start ">
                  Get 24/7 Care Right From<br /><span className="text-btn-color ">Your Phone</span>
              </h1>
                  <p className="sm:w-[450px] mt-5 text-lg font-medium font-para text-p-text">We provide compassionate healthcare services to all our customers. All you have to do is create an account.</p>

                  <div className="flex flex-col">
        {howData.map(({ icon, title, description, id }) => {
          return <div key={id} className="flex items-center mt-5">
            <div className=" w-[72px] relative">
              <div className={` bg-white bad  w-[72px] h-[72px]`}>

              </div>
              <img src={icon} alt="" className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] " />
          </div>
          
          <div className="ml-1">
            <h1 className="text-2xl  font-title font-medium text-text-color2  tracking-[0.2px] mt-5 text-start ">{title}</h1>
            <p className="sm:text-lg font-para font-medium leading-[30px] tracking-[0.2px] text-p-text mt-2">{ description}</p>
          </div>
        </div>
      })}
      </div>
              </div>
              <div className="h-[100%]  flex-[1]  hidden sm:grid place-items-center"><img src={how} alt="" className="h-[80%]" /></div>
          </div>
    </div>
  )
}

export default HowItWorks