
import { aspirationData, appreciationData } from "../data/Data.js";
import { ScenarioCard } from "../components";

function AspirationSection() {
  return (
    <div className="w-[95%] sm:w-[98%] md:w-[98%] lg:w-[100%] xl:w-[90%] mx-auto mt-10 sm:mt-40 bg-transparent">
              <div className="sm:w-[80%] mx-auto mb-10">
              <h1 className="text-center text-[35px] sm:text-[40px]  md:text-[45px] lg:text-[50px] text-text-color2 font-title font-medium">
                  Our Aspirations
              </h1>
              <h1  className="sm:leading-[35px] tracking-[0.2px] text-p-text text-base md:text-xl mt-5 sm:mt-0 font-para font-medium text-center ">Primetel believes in challenging the conventional healthcare  systems with the ever-expanding technological advancements in providing efficient, customized, and convenient healthcare services to people in rural areas</h1>
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
            <h1 className="text-xl sm:text-3xl font-title font-bold text-text-color2  tracking-[0.2px] mt-5 text-start ">{number}</h1>
            <p className="sm:text-[18px] font-para font-medium sm:leading-[30px] tracking-[0.2px]  text-p-text ">{ title}</p>
          </div>
        </div>
      })}
      </div>

      <div className=" grid  sm:place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2  mt-10  w-[100%]">
       
                  {aspirationData.map(({ icon, title, description, id }) => { 
                      return <div key={id} className={`h-full mt-10 sm:mt-0 `} >
                          <ScenarioCard iconImage={icon} textTitle={title} descript={description} id={id} customStyle='text-xl' />
                      </div>
                   })}
       
      </div>
          
    </div>
  )
}

export default AspirationSection