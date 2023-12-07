import { useState } from 'react';
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { MdSubject } from "react-icons/md";
import { BiSend } from "react-icons/bi";


function ContactForm() {
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { name,email, phone, subject, message } = formData;
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  return (
    
     
      <div className='flex justify-center flex-wrap items-center md:px-6  max-w-6xl mx-auto '>
        
        <div className='w-full   md:w-[80%] p-[5%] md:rounded-3xl  lg:ml-20 '>
          <form action="" >
          <div className='flex   md:flex-row md:h-10 flex-col  justify-between'>
            
            <div className='md:w-[48%] relative h-10 md:h-full bg-white '>
              <input className='w-full  px-4 py-2 focus:border-main-color focus:border-[1px] outline-none text-base text-p-text font-para  border-gray-300 rounded transition ease-in-out mb-6 h-full' type="text" name="" id="name" value={name} onChange={onChange} placeholder='Name' />
              <div className=' inline-block absolute right-1 top-2/4 -translate-y-2/4 bg-transparent'>
                <IoPersonOutline color="#e47521" size={20} />
              </div>
           </div>

            <div className='md:w-[48%] mt-5 md:mt-0 relative h-10 md:h-full bg-white '>
              <input className='w-full px-4 py-4 focus:border-main-color focus:border-[1px] outline-none text-p-text bg-white  border-gray-300 rounded transition ease-in-out mb-6 h-full font-para text-base' type="email" name="" id="email" value={email} onChange={onChange} placeholder='Email Address' />
              <div className=' inline-block absolute right-1 top-2/4 -translate-y-2/4 bg-transparent'>
                <MdOutlineEmail color="#e47521" size={20} />
              </div>
            </div>
            </div>
            
          <div className=' flex md:flex-row flex-col md:h-10 mt-5 md:justify-between'>
            <div className='md:w-[48%] relative h-10 md:h-full bg-white '>
              <input className='w-full px-4 py-4 focus:border-main-color focus:border-[1px] outline-none text-p-text bg-white  border-gray-300 rounded transition ease-in-out mb-6 h-full font-para text-base' type="text" name="" id="phone" value={phone} onChange={onChange} placeholder='Phone Number' />
              <div className=' inline-block absolute right-1 top-2/4 -translate-y-2/4 bg-transparent'>
                <FiPhoneCall color="#e47521" size={20} />
              </div>              
            </div>

            <div className='md:w-[48%] mt-5 md:mt-0 relative h-10 md:h-full bg-white '>
              <input className='w-full px-4 py-4 focus:border-main-color focus:border-[1px] outline-none text-p-text bg-white  border-gray-300 rounded transition ease-in-out mb-6 h-full font-para text-base' type="text" name="" id="subject" value={subject} onChange={onChange} placeholder='Subject' />
              <div className=' inline-block absolute right-1 top-2/4 -translate-y-2/4 bg-transparent'>
                <MdSubject color="#e47521" size={20} />
              </div>              
            </div>
          </div>
          

             <textarea className='w-full px-4 py-4 mt-5 md:mt-5 text-p-text bg-white  border-main-color focus:border-main-color focus:border-[1px] rounded transition ease-in-out mb-6 outline-none  font-para text-base'  name="" id="message" value={message} onChange={onChange} placeholder='Message' rows={3}  />

           <div className='grid place-items-center'>
            <button className=' bg-btn-color text-white px-5 md:px-7 py-2 md:py-4 text-center md:text-lg tracking-wide font-para uppercase rounded shadow-md relative inline-grid place-items-center' type="submit">
              <div className='flex space-x-4 items-center'>
                 <p>Submit</p>
              <BiSend color="#ffffff" size={24} />
             </div>
            </button>

                
             

            </div>
       
        
          </form>
          </div>
      </div>

  )
}

export default ContactForm;