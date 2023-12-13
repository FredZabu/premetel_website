import { ContactForm, TestimonialCard } from "../components/index";
import { TestimonialData} from "../data/Data.js"

function SubscribeSection() {
  return (
    <div className=" w-[100%] mt-10 ">
      <h1 className="text-[26px] md:text-[30px]  md:text-[40px]  font-title font-normal sm:leading-[45px] tracking-[0.2px]  mt-5 text-center   text-text-color2">
                  Hear from our Patients
        </h1>
        <h1 className="text-center text-p-text text-[18px]  font-para font-medium">Testimonials & Stories
          </h1>
        <div className="w-[100%] mt-5 mx-auto mb-10">     
        <div className="flex overflow-x-scroll  no-scrollbar  ">
          {
            TestimonialData.map(({profile, name, comment}, index) => {
              return <div key={index} className="w-[450px]">
                 <TestimonialCard  profile={profile} name={name} comment={comment} />
              </div>
            })
          }
          
          </div>
      </div>
      
      <div className="w-[100%] bg-[#e5f7e9] sm:h-[80vh] grid place-items-center mx-auto mb-10">
        

        <div className="w-[100%] md:[90%] lg:w-[80%]">
          <h1 className="text-[30px] md:text-[40px]  font-title font-normal sm:leading-[45px] tracking-[0.2px]  mt-5 text-center   text-text-color2">
                  Message Our Experts
        </h1>
          <ContactForm />
        </div>
        
      </div>
    </div>
  )
}

export default SubscribeSection