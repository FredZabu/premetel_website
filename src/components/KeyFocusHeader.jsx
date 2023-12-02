
import keyImage1 from "../assets/keyImage1.png";
import keyImage2 from "../assets/keyImage2.png";
function KeyFocusHeader() {
  return (
      <div className="relative sm:mb-10 ">
          <div className="absolute top-0 left-0 h-[40%] sm:h-[auto] sm:bottom-0">
              <img src={keyImage1} alt="" className="h-full" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center  w-[90%] mx-auto">
              <h1 className="flex-[1] text-xl sm:text-4xl font-title font-medium text-btn-color sm:leading-[67px] tracking-[0.2px] sm:w-[542px] sm:mt-5 mt-5 text-start ">
                  Revolutionizing healthcare<br /><span className="text-text-color2">in the following key areas</span>
              </h1>
              <p className="flex-[1] text-p-text text-xl mt-5 sm:mt-0 font-para font-medium">Primetel believes in challenging the conventional healthcare  systems with the ever-expanding technological advancements in providing efficient, customized, and convenient healthcare services to people in rural areas</p>
          </div>
          <div className="absolute top-0 right-0 bottom-0 hidden sm:block">
              <img src={keyImage2} alt="" className="h-full"  />
          </div>
    </div>
  )
}

export default KeyFocusHeader