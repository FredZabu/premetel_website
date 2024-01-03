

import keyImage2 from "../assets/keyImage2.png";
function KeyFocusHeader() {
  return (
      <div className="relative sm:mb-10 ">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between lg w-[100%] mx-auto">
              <h1 className="flex-[1]  text-2xl md:text-3xl lg:text-4xl font-title font-medium text-btn-color md:leading-[45px] lg:leading-[50px] xl:leading-[60px] tracking-[0.2px] md:w-[542px] text-center md:text-start ">
                  Revolutionizing healthcare<br /><span className="text-text-color2">in the following key areas</span>
              </h1>
              <p className="flex-[1] text-base text-center md:text-start text-p-text lg:text-xl mt-2 md:mt-0 font-para font-medium">Primetel believes in challenging the conventional healthcare  systems with the ever-expanding technological advancements in providing efficient, customized, and convenient healthcare services to people in rural areas</p>
          </div>
          <div className="absolute top-0 right-0 bottom-0 hidden md:block">
              <img src={keyImage2} alt="" className="h-full"  />
          </div>
    </div>
  )
}

export default KeyFocusHeader