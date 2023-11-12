import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { BsTwitter, BsTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import logo from "../assets/logo.png";

function Footer() {
    return (
        <div className="mt-20 footer-bg-color"> 
      <div className="border-t-[1px] border-text-color py-10 ">
      <div className="flex flex-col  sm:flex-row justify-between  w-[90%] mx-auto">
          <div className="  w-[34%]">
              <img src={logo} alt="" />
              <p className="mt-4 sm:w-[90%] w-full  font-title font-medium leading-[30px] tracking-[0.2px] text-light-gray-1 ">Primetel believes in challenging the conventional healthcare systems with the ever-expanding technological advancements.</p>

                    </div>
                    
          <div className=" sm:mt-0 mt-10" >
              <h1 className="text-xl mb-4 font-title font-bold text-light-gray-1 sm:leading-[30px] tracking-[0.2px] ">Contact us</h1>
              <div className="flex items-center">
                        <MdLocationPin color="#C92B27" size={40} />
                        <div className="ml-4">
                            <p className="font-title font-medium leading-[30px] tracking-[0.2px] text-light-gray-1">594 E. Whitemarsh Street,<br />Mchenry, IL 60050</p>
                        </div>
                  
              </div>
              <div className="flex items-center mt-4">
                  <BsTelephoneFill color="#C92B27" size={30} />
                  <div className="ml-4 text-light-gray-1">
                      <p className="font-title font-medium leading-[30px] tracking-[0.2px] ">+880 123 456 789</p>
                      <p className="font-title font-medium leading-[30px] tracking-[0.2px] ">+880 123 456 789</p>
                  </div>               
              </div>     
          </div>

          <div className=" mt-10 sm:mt-0">
              <h1 className="text-xl mb-4 font-title font-bold text-light-gray-1 sm:leading-[30px] tracking-[0.2px] ">Useful Links</h1>
              <ul className="text-light-gray-1">
                  <li className="mt-4 font-title font-medium leading-[30px] tracking-[0.2px] ">About us</li>
                  <li className="mt-4 font-title font-medium leading-[30px] tracking-[0.2px] ">Services</li>
                  <li className="mt-4 font-title font-medium leading-[30px] tracking-[0.2px] ">Appointment</li>
                  <li className="mt-4 font-title font-medium leading-[30px] tracking-[0.2px] ">Doctors</li>
              </ul>
                    </div>
                    
          <div className=" mt-10 sm:mt-0">
              <h1 className="text-xl mb-4 font-title font-bold  sm:leading-[30px] tracking-[0.2px] text-light-gray-1">Our services</h1>
              <ul className="text-light-gray-1">
                  <li className="mt-4 font-title font-medium leading-[30px] tracking-[0.2px] ">Telemedicine</li>
                  <li className="mt-4 font-title font-medium leading-[30px] tracking-[0.2px] ">Consultation</li>
                  <li className="mt-4 font-title font-medium leading-[30px] tracking-[0.2px] ">Pharmacy</li>
                  <li className="mt-4 font-title font-medium leading-[30px] tracking-[0.2px] ">Medicine delivery</li>
              </ul>
          </div>
    </div>
           
            </div>
            <div className="w-full flex items-center">
                <div className=" inline-flex mx-auto flex-col items-center">
                        <div className="flex mt-4 space-x-6">
                  <AiFillFacebook color="#4267B2" size={24} />
                  <BsTwitter color="#1DA1F2" size={24} />
                  <AiFillYoutube color="#FF0000" size={24} />
                </div>
                <p className="text-white text-center mt-2">Terms of Use | Privacy Policy | Terms for Health Providers</p>

                 <p className=" font-title font-medium leading-[30px] tracking-[0.2px] text-white"> <span>&#169;</span> All rights reserved to Primetel 2023</p>
                </div>
                          
            </div>s
            </div>
  )
}

export default Footer;