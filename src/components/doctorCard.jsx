
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";

function doctorCard({name, profession, image}) {
  return (
      <div className="w-[500px]  h-[180px] rounded-md overflow-hidden  bg-light-gray-1 flex justify-between ">
          <div className=" h-[100%]   bg-second-text-color ">
            <img src={image} className="h-full" alt="" /> 
          </div>
          
          
      <div className="flex-1  ml-4 mt-3">
        <p className="  font-title font-normal tracking-[0.2px]   text-p-text">{profession}</p>
        <h3 className="  font-title font-normal tracking-[0.2px]   text-text-color2">{name}</h3>
        <p className="  font-para font-medium text-base tracking-[0.2px] text-p-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, possimus debitis? Doloremque! </p>
        
        <div className=" flex mx-auto mt-3 items-center">

                     
                        <div className=" p-2 bg-[#0866FF] rounded-full">
                            <BsFacebook color="#FFFFFF" size={10} />
                  </div>
                        <div className=" ml-2 p-2 bg-[#1d9bf0] rounded-full" >
                            <BsTwitter color="#FFFFFF" size={10} />
                        </div>
                        <div className="ml-2 p-2 bg-[#12af0a] rounded-full" >
                            <FaWhatsapp color="#FFFFFF" size={10} />
                        </div>
                       
                  
              
          </div>
      </div>
      </div>
  )
}

export default doctorCard