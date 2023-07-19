/* eslint-disable react/prop-types */
import arrow from "../assets/arrow2.png";
import { AiOutlineArrowRight } from "react-icons/ai";
function ServiceCard(props) {
    const { iconImage, textTitle, descript, id, flags, customStyle } = props;
  return (
      <div className={` ${flags=='service'? 'sm:w-[350px] px-6 py-6 lg:px-2 lg:w-[300px] items-center text-center ':'w-auto px-6 py-6 items-start'}  flex  flex-col  h-full  rounded-[50px] ${id==="keyFocus2" ? 'middleCard bg-white' : 'border-[1px] border-[#DDDDE8] bg-white'} `}  >
          <div className="icon w-[72px]    "><img src={iconImage} alt="" /></div>
          <h1 className={`${customStyle}  font-bold text-third-dark tracking-[0.2px]  mt-5 `}>{textTitle}</h1>
          <p className="  leading-[30px] tracking-[0.2px] text-p-text mt-5">{descript}</p>
          <button className= {` ${flags=='aspiration'?'hidden':''} mt-10  ${id==="keyFocus2" || flags==='service' ? 'bg-btn-color text-white' : 'border-[1px] border-[#DDDDE8] text-p-text'}  font-[700] text-[14px] tracking-[0.2px] leading-[22px] py-[14px] px-[18px] rounded-[5px] flex items-center gap-4`}> <span>Learn more</span> <span className="inline-block p-[1px]"> {id==="keyFocus2" || flags==='service' ? <img src={arrow} alt=""  /> : <AiOutlineArrowRight color="#788B9A" /> } </span> </button>
    </div>
  )
}

export default ServiceCard