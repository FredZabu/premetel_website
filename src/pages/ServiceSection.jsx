import { serviceData } from "../data/Data";
import { ServiceSectionCard } from "../components";
function ServiceSection() {
  return (
    <div className="  mt-20">

      <div className=" lg:w-[95%] xl:w-[90%] 2xl:w-[90%] h-full  mx-auto  sm:relative">

        <div className="w-[50%] mx-auto mb-10">
              <h1 className=" text-center text-[50px] text-text-color2 font-title font-medium">
                  Our Healthcare Services
              </h1>
              <h1  className="sm:leading-[35px] tracking-[0.2px] text-p-text text-xl mt-5 sm:mt-0 font-para font-medium text-center ">Primetel takes pride in offering the safest, secure, and competent healthcare services to our ever-increasing customer base.</h1>
        </div>

        <div>
          {serviceData.map(({icon, title, description, id, flag}) => {
            return <ServiceSectionCard key={id} icon = {icon} title = {title} description = {description} flag = {flag} />
          })}
        </div>
        
     
      </div>
      </div>
  )
}

export default ServiceSection