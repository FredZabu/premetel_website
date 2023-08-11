/* eslint-disable react/prop-types */
import arrow from "../assets/arrow2.png";

function ServiceCard(props) {
    const { iconImage, textTitle, descript, id, flags, customStyle } = props;
  return (
      <div className={` ${flags=='service'? 'sm:w-[350px] px-6 py-6 lg:px-2 lg:w-[300px] items-center text-center ':'w-auto px-6 py-6 items-start'}  flex  flex-col  h-full  rounded-[50px] ${id==="keyFocus2" ? 'middleCard bg-white' : 'border-[1px] border-[#DDDDE8] bg-white'} `}  >
          <div className="icon w-[72px]    "><img src={iconImage} alt="" /></div>
          <h1 className={`  font-title font-normal text-third-dark tracking-[0.2px]  mt-5`}>{textTitle}</h1>
          <p className="  leading-[30px] tracking-[0.2px] font-para font-normal text-p-text mt-5">{descript}</p>
          <button className= {` ${flags=='aspiration'?'hidden':''} mt-10   bg-btn-color text-white  font-para font-normal hover:bg-hover-color hover:text-white  text-[18px] tracking-[0.2px] leading-[22px] py-[14px] px-[18px] rounded-[5px] flex items-center gap-4`}> <span>Learn more</span>  <img src={arrow} alt=""  />  </button>
    </div>
  )
}

export default ServiceCard