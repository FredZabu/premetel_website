/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { BsTelephoneFill, BsFacebook } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { MdLocationPin } from "react-icons/md";
import logo from "../assets/logo2.png";
import twitter from "../assets/twitter.png";
  

function Footer() {

  const form = useRef();

  const [hide, setHide] = useState(true);
  const [icon, setIcon] = useState(true)

  const intervalTime = 3000;
  let showInterval;
  const changeVisibility = () => {
    setHide(true);
    setIcon(true);
       
   }

   function auto() {
      showInterval = setInterval(changeVisibility, intervalTime);
   }
    
     const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hphy2ke', 'template_zr7o3sl', form.current, 'qMokT_IKV3wgMdBcr')
      .then((result) => {
        
        setHide(false)
        setIcon(true);
        e.target.reset();
        auto()
      }, (error) => {
         
        setHide(false)
        setIcon(false);
        auto()
      });
   e.target.reset();
  };
    return (
        <div className="mt-20 footer-bg-color border-2 border-transparent relative"> 
            <div className="w-[100vw] md:w-[80%]  subscribe grid place-items-center py-4">
                <div className=" ">
                    <p className="text-center font-bold text-white tracking-[0.2px] text-xl font-title ">Join Our Mailing List Today</p>
                    <form ref={form} onSubmit={sendEmail} className="flex flex-row mt-4  items-center space-x-2">
                        <input className='w-full px-4 py-2 focus:border-main-color focus:border-[1px] outline-none text-lg text-p-text bg-white  border-gray-300 rounded transition ease-in-out' type="email" name="user_email" placeholder='Your email' required />
                        <div className='inline-block relative'>
                            <button className={` bg-btn-color text-white  font-para font-medium sss  text-[18px] tracking-[0.2px] leading-[22px] py-[10px] px-[18px] rounded-[5px] flex items-center gap-4`} type="submit"> Subscribe </button>
                  <div className={`p-1 ${hide? 'hidden': 'inline-block'} ${icon? 'bg-[#12af0a]' : 'bg-[red]'} bg-[#12af0a] rounded-full absolute bottom-[100%] translate-y-[50%] left-[100%] translate-x-[-50%]`} >
               
                

                {icon? <TiTick color="#FFFFFF" size={24} /> : <RxCross1 color="#FFFFFF" size={24} />}
                </div>                          
                        </div>
                    </form>
             
                </div>
            </div>
            <div className="mt-[50px] py-10 ">
                
      
                <div className="flex flex-col  lg:flex-row justify-between  w-[90%] mx-auto">
            
                    <div className=" sm:w-[95%] md:w-[90%] lg:mb-0 lg:w-[40%]">
              <img src={logo} alt="" className=" w-[10%] lg:w-[15%]" />
              <p className="mt-4 sm:w-[90%] w-full text-lg  font-title font-medium leading-[30px] tracking-[0.2px] text-light-gray-1 ">Primetel believes in challenging the conventional healthcare systems with the ever-expanding technological advancements.</p>

                    </div>
            
                    <div className="flex flex-col mt-5  lg:w-[60%] sm:flex-row justify-between">
                    <div className=" sm:mt-0 " >

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

                    <div className=" mt-5 sm:mt-0">
              <h1 className="text-xl mb-4 font-title font-bold text-light-gray-1 sm:leading-[30px] tracking-[0.2px] ">Useful Links</h1>
              <ul className="text-light-gray-1">
                  <li className="mt-4 font-title font-medium leading-[30px] tracking-[0.2px] ">About us</li>
                  <li className="mt-4 font-title font-medium leading-[30px] tracking-[0.2px] ">Services</li>
                  <li className="mt-4 font-title font-medium leading-[30px] tracking-[0.2px] ">Appointment</li>
                  <li className="mt-4 font-title font-medium leading-[30px] tracking-[0.2px] ">Doctors</li>
              </ul>
                    </div>
                    
                    <div className=" mt-5 sm:mt-0">
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
           
            </div>
            <div className="w-full flex items-center">
                <div className=" inline-flex mx-auto flex-col items-center">
                    <div className="f fixed left-4 top-[20%] z-[999] mt-4  hidden lg:flex lg:flex-col">
                        <a href="http://wa.me/256781936669" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 p-1 bg-[#0866FF] rounded-md">
                            <BsFacebook color="#FFFFFF" size={24} />
                        </a>
                            
                        <a href="http://wa.me/256781936669" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 w-[34px]  bg-[#000000] rounded-md">
                            <img src={twitter} alt="twitter logo" />
                        </a>

                        <a href="http://wa.me/256781936669" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 w-[34px] p-1 bg-[#12af0a] rounded-md">
                            <FaWhatsapp color="#FFFFFF" size={24} />                                    
                        </a>                        
                    </div>
              

                 <p className=" font-title font-medium leading-[30px] tracking-[0.2px] text-white"> <span>&#169;</span> {new Date().getFullYear()}  Primetel | All rights reserved</p>
                </div>
                          
            </div>
            </div>
  )
}

export default Footer;