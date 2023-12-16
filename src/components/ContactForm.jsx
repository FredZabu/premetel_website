/* eslint-disable no-unused-vars */
import { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import { IoPersonOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { MdSubject } from "react-icons/md";
import { BiSend } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

function ContactForm() {
 
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

    emailjs.sendForm('service_x75q4bz', 'template_3uz4v6n', form.current, 'qMokT_IKV3wgMdBcr')
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
   
  };

  return (
    
     
      <div className='flex justify-center flex-wrap items-center md:px-6  max-w-6xl mx-auto '>
        
        <div className='w-full   md:w-[80%] p-[5%] md:rounded-3xl  lg:ml-20 '>
          <form ref={form} onSubmit={sendEmail} >
          <div className='flex   md:flex-row md:h-10 flex-col  justify-between'>
            
            <div className='md:w-[48%] relative h-10 md:h-full bg-white '>
              <input className='w-full  px-4 py-2 focus:border-main-color focus:border-[1px] outline-none text-base text-p-text font-para  border-gray-300 rounded transition ease-in-out mb-6 h-full' type="text" name="user_name" id="name" placeholder='Name' required />
              <div className=' inline-block absolute right-1 top-2/4 -translate-y-2/4 bg-transparent'>
                <IoPersonOutline color="#e47521" size={20} />
              </div>
           </div>

            <div className='md:w-[48%] mt-5 md:mt-0 relative h-10 md:h-full bg-white '>
              <input className='w-full px-4 py-4 focus:border-main-color focus:border-[1px] outline-none text-p-text bg-white  border-gray-300 rounded transition ease-in-out mb-6 h-full font-para text-base' type="email" name="user_email" id="email"  placeholder='Email Address' required />
              <div className=' inline-block absolute right-1 top-2/4 -translate-y-2/4 bg-transparent'>
                <MdOutlineEmail color="#e47521" size={20} />
              </div>
            </div>
            </div>
            
          <div className=' flex md:flex-row flex-col md:h-10 mt-5 md:justify-between'>
            <div className='md:w-[48%] relative h-10 md:h-full bg-white '>
              <input className='w-full px-4 py-4 focus:border-main-color focus:border-[1px] outline-none text-p-text bg-white  border-gray-300 rounded transition ease-in-out mb-6 h-full font-para text-base' type="tel" name="user_phone" id="phone" placeholder='Phone Number' required />
              <div className=' inline-block absolute right-1 top-2/4 -translate-y-2/4 bg-transparent'>
                <FiPhoneCall color="#e47521" size={20} />
              </div>              
            </div>

            <div className='md:w-[48%] mt-5 md:mt-0 relative h-10 md:h-full bg-white '>
              <input className='w-full px-4 py-4 focus:border-main-color focus:border-[1px] outline-none text-p-text bg-white  border-gray-300 rounded transition ease-in-out mb-6 h-full font-para text-base' type="text" name="subject" id="subject" placeholder='Subject' required />
              <div className=' inline-block absolute right-1 top-2/4 -translate-y-2/4 bg-transparent'>
                <MdSubject color="#e47521" size={20} />
              </div>              
            </div>
          </div>
          

             <textarea className='w-full px-4 py-4 mt-5 md:mt-5 text-p-text bg-white  border-main-color focus:border-main-color focus:border-[1px] rounded transition ease-in-out mb-6 outline-none  font-para text-base'  name="message" id="message"  placeholder='Message' rows={3} required />

          <div className='grid place-items-center '>
            <div className='inline-block relative '>
                          <button className=' bg-btn-color text-white px-5 md:px-7 py-2 md:py-2 text-center md:text-lg tracking-wide font-para uppercase rounded shadow-md relative inline-grid place-items-center' type="submit">
              <div className='flex space-x-4 items-center'>
                 <p>Submit</p>
              <BiSend color="#ffffff" size={24} />
              </div>
              
            </button>
                <div className={`p-1 ${hide? 'hidden': 'inline-block'} ${icon? 'bg-[#12af0a]' : 'bg-[red]'} bg-[#12af0a] rounded-full absolute bottom-[100%] translate-y-[50%] left-[100%] translate-x-[-50%]`} >
               
                

                {icon? <TiTick color="#FFFFFF" size={24} /> : <RxCross1 color="#FFFFFF" size={24} />}
                </div>
            </div>
          </div>
       
        
          </form>
          </div>
      </div>

  )
}

export default ContactForm;