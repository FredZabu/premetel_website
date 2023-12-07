import { KeyFocusCard, KeyFocusHeader } from "../components/index"
import { keyFocusData } from "../data/Data.js";

function KeyFocusSection() {
  return(<div className="w-[95%] sm:w-[95%] md:w-[98%] lg:w-[100%] xl:w-[90%] mx-auto mt-10 sm:mt-40 bg-transparent">
          <div className="sm:w-[100%] my-0 mx-auto  ">
      <div className="md:w-[95%] lg:w-[90%] mx-auto">
        <KeyFocusHeader />
              </div>
      <div className=" grid  sm:place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2    w-[100%]">
       
           {keyFocusData.map(({ icon, title, description, id, flag },index) => { 
        
                      return <div key={id} className={`h-full mt-10 sm:mt-0 flex-1`} >
                          <KeyFocusCard iconImage={icon} textTitle={title} descript={description} flags={flag} id={id} customStyle='text-xl' />
                      </div>
                
                      
                   })}
       
      </div>
        </div>
          
    </div>
  )
}

export default KeyFocusSection