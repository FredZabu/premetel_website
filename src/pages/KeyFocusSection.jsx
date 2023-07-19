import { ServiceCard, KeyFocusHeader } from "../components/index"
import { keyFocusData } from "../data/Data.js";

function KeyFocusSection() {
  return(<div className="w-[90%] mx-auto mt-10 sm:mt-40">
          <div className="sm:w-[100%] my-0 mx-auto  ">
              <KeyFocusHeader />
              <div className=" flex sm:justify-between flex-col xl:space-x-10 lg:space-x-5 sm:flex-row sm:mt-16  items-center">
                  {keyFocusData.map(({ icon, title, description, id ,flag}) => { 
                      return <div key={id} className={`h-full mt-10 sm:mt-0 flex-1`} >
                          <ServiceCard iconImage={icon} textTitle={title} descript={description} flags={flag} id={id} customStyle='text-xl' />
                      </div>
                   })}
              </div>
        </div>
          
    </div>
  )
}

export default KeyFocusSection