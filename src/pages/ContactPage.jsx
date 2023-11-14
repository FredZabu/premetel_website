import { MdEmail, MdLocationPin } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { ContactForm } from "../components";


function ContactPage() {
  return (
    <div className=" mt-[12vh]">
      <div className="h-[50vh] sm:h-[70vh] bg-contact bg-cover bg-center  bg-no-repeat">
        <div className="h-full bgkla grid place-items-center">
           <h1 className=" text-4xl sm:text-7xl font-title font-bold text-white sm:leading-[67px] tracking-[0.2px]  text-start ">
           Contact Us
          </h1>
        </div>
      </div>
      <div>
        <div className=" w-[80%] mt-20 mx-auto flex sm:flex-row flex-col justify-between">
          <div className="bg-faded-color rounded-md w-[300px] flex flex-col items-center py-5 px-10">
            <div className="w-[60px] grid place-items-center h-[60px] rounded-full mb-3 bg-light-gray-1 ">
              <MdEmail size={30} color={'#207ef7'} />
            </div>
            <h1 className=" text-2xl  font-title font-bold text-third-dark tracking-[0.2px]  text-start mb-2">Email</h1>
            <p className="text-p-text mt-1 ">info@primetel.tech</p>
            <p className="text-p-text mt-1 ">support@primetel.tech</p>
          </div>

                    <div className="bg-faded-color rounded-md w-[300px] flex flex-col items-center py-5 px-10 sm:mt-0 mt-5">
            <div className="w-[60px] grid place-items-center h-[60px] rounded-full mb-3 bg-light-gray-1 ">
              <MdLocationPin size={30} color={'#207ef7'} />
            </div>
            <h1 className=" text-2xl  font-title font-bold text-third-dark tracking-[0.2px]  text-start mb-2">Address</h1>
            <p className="text-p-text mt-1 ">Monduli, Arusha</p>
            <p className="text-p-text mt-1 ">Tanzania, East Africa</p>
          </div>

                    <div className=" bg-faded-color sm:mt-0 mt-5 w-[300px] rounded-md flex flex-col items-center py-5 px-10">
            <div className="w-[60px] grid place-items-center h-[60px] rounded-full mb-3 bg-light-gray-1 ">
              <BsTelephoneFill size={30} color={'#207ef7'} />
            </div>
            <h1 className=" text-2xl  font-title font-bold text-third-dark tracking-[0.2px]  text-start mb-2">Phone</h1>
            <p className="text-p-text mt-1 ">+255 744 549 721</p>
            <p className="text-p-text mt-1 ">+250 783 784 394</p>
          </div>
        </div>
        <ContactForm />
      </div>

    </div>
  )
}

export default ContactPage