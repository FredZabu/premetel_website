/* eslint-disable react/prop-types */


function ScenarioCard(props) {
  
    const { iconImage, textTitle, descript } = props;
  return (
      <div className=  "w-auto px-6 lg:px-2 xl:px-6 py-10  flex  flex-col  h-[320px]    bg-white middleCard"  >
          <div className="icon w-[72px]    "><img src={iconImage} alt="" /></div>
          <h1 className={` font-title font-medium  text-text-color2 text-2xl tracking-[0.2px]  mt-2 `}>{textTitle}</h1>
          <p className="  leading-[30px] tracking-[0.2px] text-lg font-para font-normal text-p-text mt-2">{descript}</p>
        
    </div>
  )
  
}

export default ScenarioCard