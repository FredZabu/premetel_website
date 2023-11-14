/* eslint-disable react/prop-types */
import arrow from "../assets/arrow2.png";
import  {Link} from 'react-router-dom'

function ServiceCard(props) {
    const { iconImage, textTitle, descript, id, flags } = props;
  return (
      <div className={` ${flags=='service'? 'sm:w-[350px] px-6 py-6 lg:px-2 lg:w-[300px] items-center text-center ':'w-auto px-6 py-6 items-start'}  flex  flex-col  h-full  rounded-[50px] ${id==="keyFocus2" ? 'middleCard bg-white' : 'border-[1px] border-[#DDDDE8] bg-white'} `}  >
          <div className="icon w-[72px]    "><img src={iconImage} alt="" /></div>
          <h1 className={`  font-title font-bold text-xl text-text-color2 tracking-[0.2px]  mt-5`}>{textTitle}</h1>
      <p className="  leading-[30px] tracking-[0.2px] text-lg font-para font-normal text-p-text mt-5">{descript}</p>
      

          <button className= {` ${flags=='aspiration'?'hidden':''} mt-10   bg-btn-color text-white  font-para font-bold hover:bg-hover-color hover:text-white  text-[18px] tracking-[0.2px] leading-[22px] py-[14px] px-[18px] rounded-[5px] `}> <Link to="/services" className="flex items-center gap-4"><span>Learn more</span>  <img src={arrow} alt=""  /> </Link> </button>
    </div>
  )
}

export default ServiceCard