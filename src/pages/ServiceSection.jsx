import { serviceData } from "../data/Data";
import { ServiceSectionCard } from "../components";
function ServiceSection() {
  return (
    <div className="  mt-20">

      <div className=" lg:w-[95%] xl:w-[90%] 2xl:w-[90%] h-full  mx-auto  sm:relative">

        <div className="w-[80%] mx-auto mb-10">
              <h1 className=" text-center text-btn-color font-para font-light">
                  Our Healthcare Services
              </h1>
              <h1  className="text-[40px]  font-title font-normal sm:leading-[45px] tracking-[0.2px]  mt-5 text-center   text-text-color2 ">Primetel takes pride in offering the safest, secure, and competent healthcare services to our ever-increasing customer base.</h1>
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