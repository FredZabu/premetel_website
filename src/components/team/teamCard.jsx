/* eslint-disable react/prop-types */
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

function TeamCard({name, profession, image}) {
  return (
      <div className='bg-white shadow-md  rounded-2xl teamParent overflow-hidden m-2  flex-[1] sm:w-auto relative'>
        <div className=' w-full'>
          <img src={image} alt="" className='w-full h-full rounded-t-2xl'/>
        </div>
        <div className=' w-full  flex flex-col items-center justify-center p-2 bg-faded-color teamCard'>
          <h1 className=' font-extrabold text-lg text-third-dark mt-5'>{name}</h1>
          <p className='text-main-color font-bold mt-3'>{profession}</p>
          <div className='flex space-x-5 mt-2'>
            
              <AiFillFacebook size={24} color="#c92b27" />
              <BsTwitter size={24} color="#c92b27"/>
 
          </div>
        </div>
      </div>
  )
}

export default TeamCard