/* eslint-disable react/prop-types */

function ValuesCard(props) {
    const { iconImage, textTitle, descript } = props;
  return (
  <div className="relative w-full bg-faded-color rounded-md px-2 py-2 flex flex-col items-center h-full border-main-color border-[1px] mt-14" style={{ boxShadow:'0px 0px 4px 1px rgba(0,0,0,0.31)'}} >
          <div className="absolute bottom-[88%] left-[50%]   translate-x-[-50%] icon w-[60px] border-[1px] border-main-color rounded-full p-4 bg-faded-color "><img src={iconImage} alt="" /></div>
          <h1 className={` font-bold text-text-color tracking-[0.2px]  mt-5 sm:mt-10 text-center`}>{textTitle}</h1>
          <p className="text-center text-[15px] tracking-[0.2px] text-second-text-color mt-2">{descript}</p>
    </div>
  )
}

export default ValuesCard