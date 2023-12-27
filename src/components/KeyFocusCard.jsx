/* eslint-disable react/prop-types */
import arrow from "../assets/arrow2.png";
import { Link } from 'react-router-dom'
import { HashLink } from "react-router-hash-link";

function KeyFocusCard(props) {
    const { iconImage, textTitle, descript, flags } = props;    
  return (
        <div className=" py-5 px-2 sm:w-[380px]  lg:w-[350px]  h-[380px] bg-[#FFFFFF] middleCard">
            <div className="grid place-items-center">
              <div className="icon w-[72px]    "><img src={iconImage} alt="" /></div>      
            </div>
            
            <h1 className="text-[20px]  font-title font-normal sm:leading-[45px] tracking-[0.2px]  mt-5 text-center   text-text-color2">{textTitle}</h1>
          <p className="mt-3 text-center font-para font-medium text-base tracking-[0.2px] text-p-text">{descript}</p>
          <div className="grid place-items-center">
        <button className={` mt-10   bg-btn-color text-white  font-para font-bold hover:bg-hover-color hover:text-white  text-[18px] tracking-[0.2px] leading-[22px] py-[14px] px-[18px] rounded-[5px] `}> <HashLink to={`/diseasesWeTreat#${flags}`} smooth className="flex items-center gap-4"><span>Learn more</span>  <img src={arrow} alt="" /> </HashLink> </button>
        
          </div>
        </div>
  )
}

export default KeyFocusCard