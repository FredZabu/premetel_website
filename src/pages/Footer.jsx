import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { BsTwitter, BsTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import logo from "../assets/logo.png";

function Footer() {
    return (
      <div className="border-t-[1px] border-text-color py-10">
      <div className="flex flex-col  sm:flex-row w-[90%] mx-auto">
          <div className="flex-[1.5]">
              <img src={logo} alt="" />
              <p className="mt-4 sm:w-[90%] w-full  font-title font-medium leading-[30px] tracking-[0.2px] text-second-text-color ">Primetel believes in challenging the conventional healthcare systems with the ever-expanding technological advancements in providing efficient,customized, and convenient healthcare services to people in rural areas.</p>
              <div className="flex mt-4 space-x-6">
                  <AiFillFacebook color="#4267B2" size={30} />
                  <BsTwitter color="#1DA1F2" size={30} />
                  <AiFillYoutube color="#FF0000" size={30} />
              </div>
          </div>
          <div className="flex-[1] sm:mt-0 mt-10" >
              <h1 className="text-xl mb-4 font-title font-bold text-text-color sm:leading-[30px] tracking-[0.2px] ">Contact us</h1>
              <div className="flex">
                        <MdLocationPin color="#C92B27" size={30} />
                        <div className="ml-4">
                            <p className="font-title font-medium leading-[30px] tracking-[0.2px] text-second-text-color">594 E. Whitemarsh Street,<br />Mchenry, IL 60050</p>
                        </div>
                  
              </div>
              <div className="flex items-center mt-4">
                  <BsTelephoneFill color="#C92B27" size={30} />
                  <div className="ml-4">
                      <p className="font-title font-medium leading-[30px] tracking-[0.2px] text-second-text-color">+880 123 456 789</p>
                      <p className="font-title font-medium leading-[30px] tracking-[0.2px] text-second-text-color">+880 123 456 789</p>
                  </div>               
              </div>     
          </div>

          <div className="flex-[1] mt-10 sm:mt-0">
              <h1 className="text-xl mb-4 font-title font-bold text-text-color sm:leading-[30px] tracking-[0.2px] ">Useful Links</h1>
              <ul>
                  <li className="mt-4 font-title font-medium leading-[30px] tracking-[0.2px] text-second-text-color">About us</li>
                  <li className="mt-4 font-title font-medium leading-[30px] tracking-[0.2px] text-second-text-color">Services</li>
                  <li className="mt-4 font-title font-medium leading-[30px] tracking-[0.2px] text-second-text-color">Appointment</li>
                  <li className="mt-4 font-title font-medium leading-[30px] tracking-[0.2px] text-second-text-color">Doctors</li>
              </ul>
          </div>
          <div className="flex-[1] mt-10 sm:mt-0">
              <h1 className="text-xl mb-4 font-title font-bold text-text-color sm:leading-[30px] tracking-[0.2px] ">Our services</h1>
              <ul>
                  <li className="mt-4 font-title font-medium leading-[30px] tracking-[0.2px] text-second-text-color">Telemedicine</li>
                  <li className="mt-4 font-title font-medium leading-[30px] tracking-[0.2px] text-second-text-color">Consultation</li>
                  <li className="mt-4 font-title font-medium leading-[30px] tracking-[0.2px] text-second-text-color">Pharmacy</li>
                  <li className="mt-4 font-title font-medium leading-[30px] tracking-[0.2px] text-second-text-color">Medicine delivery</li>
              </ul>
          </div>
    </div>
            <p className="text-center mt-10 font-title font-medium leading-[30px] tracking-[0.2px] text-second-text-color"> <span>&#169;</span> All rights reserved to Primetel 2023</p>
            </div>
  )
}

export default Footer;