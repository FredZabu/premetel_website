
import keyImage1 from "../assets/keyImage1.png";
import keyImage2 from "../assets/keyImage2.png";
import { aspirationData, appreciationData } from "../data/Data.js";
import { ScenarioCard } from "../components";

function AspirationSection() {
  return (
    <div className="w-[90vw] mt-10 mx-auto sm:mt-40">
         <div className="relative mb-10 ">
          <div className="absolute top-0 left-0 h-[40%] sm:h-[auto] sm:bottom-0 md: ">
              <img src={keyImage1} alt="" className="h-full" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center  w-[90%] mx-auto">
              <h1 className="flex-[1] text-2xl sm:text-4xl font-title font-[600] text-text-color sm:leading-[67px] tracking-[0.2px] sm:w-[542px] sm:mt-5 mt-5 text-start ">
                  Our <span className=" text-btn-color">Aspirations</span>
              </h1>
              <p className="flex-[1] text-p-text mt-5 sm:mt-0 font-normal">Primetel believes in challenging the conventional healthcare  systems with the ever-expanding technological advancements in providing efficient, customized, and convenient healthcare services to people in rural areas</p>
          </div>
          <div className="absolute top-0 right-0 bottom-0 hidden sm:block">
              <img src={keyImage2} alt="" className="h-full"  />
          </div>
      </div>
      
      <div className="flex justify-between sm:mt-16 ">
        {appreciationData.map(({ icon, number, title, customStyle, id }) => {
          return <div key={id} className="flex items-start sm:items-center space-x-1 flex-col sm:flex-row sm:space-x-1">
            <div className=" w-[72px] relative">
              <div className={`${customStyle} bad  w-[72px] h-[72px]`}>

              </div>
              <img src={icon} alt="" className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] " />
          </div>
          
          <div className="ml-0 sm:ml-1">
            <h1 className="text-xl sm:text-3xl font-title font-bold text-text-color  tracking-[0.2px] mt-5 text-start ">{number}</h1>
            <p className="sm:text-[18px] font-title font-medium sm:leading-[30px] tracking-[0.2px] text-second-text-color ">{ title}</p>
          </div>
        </div>
      })}
      </div>

      <div className="flex sm:justify-between flex-col xl:space-x-10 lg:space-x-5 sm:flex-row mt-16  items-center">
        {aspirationData.map(({ icon, title, description, id }) => { 
                      return <div key={id} className={`h-full mt-10 sm:mt-0 flex-1`} >
                          <ScenarioCard iconImage={icon} textTitle={title} descript={description}  />
                      </div>
                   })}
      </div>
          
    </div>
  )
}

export default AspirationSection