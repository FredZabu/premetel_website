import { useState } from 'react';


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
    <section className='mt-20'>
      <h1 className='text-4xl text-center sm:text-5xl font-title font-extrabold text-third-dark sm:leading-[67px] tracking-[0.2px]  '>Send Us A Message</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto '>
        
        <div className='w-full md:w-[80%] p-[5%] rounded-3xl bg-faded-color lg:ml-20 '>
          <form action="" >
            <div className='flex sm:flex-row flex-col sm:space-x-4'>
            <input className='w-full px-4 py-4 focus:border-main-color focus:border-[1px] outline-none text-xl text-p-text bg-white  border-gray-300 rounded transition ease-in-out mb-6' type="text" name="" id="name" value={name} onChange={onChange} placeholder='Your Name'/>

            <input className='w-full px-4 py-4 focus:border-main-color focus:border-[1px] outline-none text-xl text-p-text bg-white  border-gray-300 rounded transition ease-in-out mb-6' type="email" name="" id="email" value={email} onChange={onChange} placeholder='Your Email'/>
            </div>
            
            <div className='flex sm:flex-row flex-col sm:space-x-4'>
            <input className='w-full px-4 py-4 text-xl focus:border-main-color focus:border-[1px] outline-none text-p-text bg-white  border-gray-300 rounded transition ease-in-out mb-6' type="text" name="" id="phone" value={phone} onChange={onChange} placeholder='Your Phone'/>

            <input className='w-full px-4 py-4 text-xl text-p-text bg-white  focus:border-main-color focus:border-[1px] outline-none rounded transition ease-in-out mb-6' type="text" name="" id="subject" value={subject} onChange={onChange} placeholder='Subject'/>
            </div>
             <textarea className='w-full px-4 py-4 text-xl text-p-text bg-white  border-main-color focus:border-main-color focus:border-[1px] rounded transition ease-in-out mb-6 outline-none'  name="" id="message" value={message} onChange={onChange} placeholder='Start writing your message' rows={5}  />

           
            <button className='w-full bg-btn-color text-white  px-7 py-4 text-center text-sm font-bold uppercase rounded shadow-md ' type="submit">Send Message</button>
       
        
          </form>
          </div>
      </div>
    </section>
  )
}

export default ContactForm;