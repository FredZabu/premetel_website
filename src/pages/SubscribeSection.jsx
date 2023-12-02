import { ContactForm} from "../components/index"

function SubscribeSection() {
  return (
      <div className=" w-[100%]  grid place-items-center">
        <div className="w-[80%] sm:h-[100vh] mx-auto mb-10">
          <h1 className=" text-[40px]  font-title font-normal sm:leading-[45px] tracking-[0.2px]  mt-5 text-center   text-text-color2">
                  Hear from our Patients
        </h1>

          <h1 className="text-center text-p-text text-[18px]  font-para font-medium">Testimonials & Stories
          </h1>
      </div>
      
      <div className="w-[100%] bg-[#e5f7e9] sm:h-[80vh] grid place-items-center mx-auto mb-10">
        

        <div className="w-[70%]">
          <h1 className=" text-[40px]  font-title font-normal sm:leading-[45px] tracking-[0.2px]  mt-5 text-center   text-text-color2">
                  Message Our Experts
        </h1>
          <ContactForm />
        </div>
        
      </div>
    </div>
  )
}

export default SubscribeSection