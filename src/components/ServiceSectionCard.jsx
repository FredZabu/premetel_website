/* eslint-disable react/prop-types */
import arrow from "../assets/arrow2.png";
function ServiceSectionCard(props) {
    const { icon, title, description, flag } = props;
  return (
    <div>
        <div className="w-[90%] mx-auto sm:w-[90%] h-[90vh] flex items-center">
          
        <div className= {` w-[45%] h-[400px] bg-btn-color ${flag % 2 === 0 ? 'order-3': 'order-1'} `}>
           <img src={icon} alt="image for a service"  />
        </div>
              
        <div className=" w-[10%]  h-[100%]  flex flex-col items-center justify-between order-2">
            <div className={`box w-5 h-5 border-4 border-btn-color rounded-full ${flag === 1? 'block':'hidden'}`}></div>
            <div className="h-[90%] w-[6px] bg-line-color"></div>
            <div className={`box w-5 h-5 border-4 border-btn-color rounded-full ${flag === 4? 'hidden':'block'}`}></div>
        </div>  
              
        <div className={` w-[45%] ${flag % 2 === 0 ? 'order-1': 'order-3'} `}>
                  <h1 className="font-bold text-text-color2 tracking-[0.2px] text-4xl font-title ">{title}</h1>
          <p className="leading-[30px] font-para font-medium text-lg tracking-[0.2px] text-p-text mt-5">{description}</p>
          <button className= {` mt-10   bg-btn-color text-white  font-para font-bold hover:bg-text-color2 hover:text-white  text-[18px] tracking-[0.2px] leading-[22px] py-[14px] px-[18px] rounded-[5px] flex items-center gap-4`}> <span>Learn more</span>  <img src={arrow} alt=""  />  </button>          
        </div>          
       </div>          
    </div>
  )
}

export default ServiceSectionCard