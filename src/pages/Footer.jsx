import { AiFillYoutube } from "react-icons/ai";
import { BsTwitter, BsTelephoneFill, BsFacebook } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";

import { MdLocationPin } from "react-icons/md";
import logo from "../assets/logo2.png";
import { useState } from "react";

function Footer() {


    const [email, setEmail] = useState()
     function onChange(e) {
    setEmail(e.target.value)
  }
    return (
        <div className="mt-20 footer-bg-color border-2 border-transparent relative"> 
            <div className="w-[80%] subscribe grid place-items-center py-4">
                <div className="w-60% ">
                    <p className="text-center font-bold text-white tracking-[0.2px] text-xl font-title ">Join Our Mailing List Today</p>
                    <div className="flex flex-row mt-4  items-center space-x-2">
                        <input className='w-full px-4 py-2 focus:border-main-color focus:border-[1px] outline-none text-lg text-p-text bg-white  border-gray-300 rounded transition ease-in-out' type="email"  value={email} onChange={onChange} placeholder='Your email' />
                        <button className= {` bg-btn-color text-white  font-para font-bold hover:bg-text-color2 hover:text-white  text-[18px] tracking-[0.2px] leading-[22px] py-[10px] px-[18px] rounded-[5px] flex items-center gap-4`}> Subscribe </button> 
                    </div>
                </div>
            </div>
      <div className="mt-[50px] py-10 ">
      <div className="flex flex-col  sm:flex-row justify-between  w-[90%] mx-auto">
          <div className="  w-[40%]">
              <img src={logo} alt="" className="w-[15%]" />
              <p className="mt-4 sm:w-[90%] w-full text-lg  font-title font-medium leading-[30px] tracking-[0.2px] text-light-gray-1 ">Primetel believes in challenging the conventional healthcare systems with the ever-expanding technological advancements.</p>

                    </div>
                    
          <div className=" sm:mt-0 mt-10" >
              <h1 className="text-xl mb-4 font-title font-bold text-light-gray-1 sm:leading-[30px] tracking-[0.2px] ">Contact us</h1>
              <div className="flex items-center">
                        <MdLocationPin color="#1d9bf0" size={40} />
                        <div className="ml-4">
                            <p className="font-title font-medium leading-[30px] tracking-[0.2px] text-light-gray-1">Monduli, Arusha<br />Tanzania, East Africa</p>
                        </div>
                  
              </div>
              <div className="flex items-center mt-4">
                  <BsTelephoneFill color="#1d9bf0" size={30} />
                  <div className="ml-4 text-light-gray-1">
                      <p className="font-title font-medium leading-[30px] tracking-[0.2px] ">+255 744 549 721</p>
                      <p className="font-title font-medium leading-[30px] tracking-[0.2px] ">+250 783 784 394</p>
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
                        <div className="fixed left-4 top-[20%] z-[999] mt-4">
                        <div className="mt-2 p-1 bg-[#0866FF] rounded-md">
                            <BsFacebook color="#FFFFFF" size={24} />
                  </div>
                        <div className="mt-2 p-1 bg-[#1d9bf0] rounded-md" >
                            <BsTwitter color="#FFFFFF" size={24} />
                        </div>
                        <div className="mt-2 p-1 bg-[#12af0a] rounded-md" >
                            <FaWhatsapp color="#FFFFFF" size={24} />
                        </div>
                         <div className="mt-2 p-1 bg-[#FF0000] rounded-md" >
                            <AiFillYoutube color="#FFFFFF" size={24} />
                  </div>
                  
                </div>
              

                 <p className=" font-title font-medium leading-[30px] tracking-[0.2px] text-white"> <span>&#169;</span>2023 Primetel | All rights reserved</p>
                </div>
                          
            </div>
            </div>
  )
}

export default Footer;