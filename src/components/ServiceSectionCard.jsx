/* eslint-disable react/prop-types */
import arrow from "../assets/arrow2.png";
function ServiceSectionCard(props) {
    const { icon, title, description, flag } = props;
  return (
    <div>
        <div className="w-[85%] mt-5 sm:mt-0 mx-auto sm:w-[95%] md:w-[90%] sm:h-[50vh] md:h-[80vh] order-2 sm:flex items-center">
          
        <div className= {`sm:w-[45%] lg:w-[45%] lg:h-[400px]  ${flag % 2 === 0 ? 'order-3': 'order-1'} `}>
           <img src={icon} alt="image for a service"   />
        </div>
              
        <div className="hidden  w-[10%]  h-[100%]  sm:flex flex-col items-center justify-between order-2">
            <div className={`box w-5 h-5 border-4 border-btn-color rounded-full ${flag === 1? 'block':'hidden'}`}></div>
            <div className="h-[90%] w-[6px] bg-line-color"></div>
            <div className={`box w-5 h-5 border-4 border-btn-color rounded-full ${flag === 4? 'hidden':'block'}`}></div>
        </div>  
              
        <div className={` sm:w-[45%] ${flag % 2 === 0 ? 'order-1': 'order-3'} `}>
                  <h1 className="font-medium text-text-color2 tracking-[0.2px] text-2xl md:text-4xl font-title ">{title}</h1>
          <p className="leading-[30px] font-para font-medium text-base md:text-lg tracking-[0.2px] text-p-text mt-5">{description}</p>
          {/* <button className= {` mt-10   bg-btn-color text-white  font-para font-bold hover:bg-text-color2 hover:text-white  text-[18px] tracking-[0.2px] leading-[22px] py-[14px] px-[18px] rounded-[5px] flex items-center gap-4`}> <span>Learn more</span>  <img src={arrow} alt=""  />  </button>           */}
        </div>          
       </div>          
    </div>
  )
}

export default ServiceSectionCard