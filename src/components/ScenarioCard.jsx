/* eslint-disable react/prop-types */


function ScenarioCard(props) {
  
    const { iconImage, textTitle, descript } = props;
  return (
<div className=" py-5 px-2 sm:w-[380px]  lg:w-[350px]  h-[300px] bg-[#FFFFFF] middleCard">
            <div className="grid place-items-center">
              <div className="icon w-[72px]    "><img src={iconImage} alt="" /></div>      
            </div>
            
            <h1 className="text-[20px]  font-title font-normal sm:leading-[45px] tracking-[0.2px]  mt-5 text-center   text-text-color2">{textTitle}</h1>
          <p className="mt-3 text-center font-para font-medium text-base tracking-[0.2px] text-p-text">{descript}</p>
        </div>
  )
  
}

export default ScenarioCard