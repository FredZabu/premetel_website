/* eslint-disable react/prop-types */


function TestimonialCard(props) {
    const {profile, name, comment } = props;
  return (
      <div className="w-[450px]  flex space-x-2 p-3 ">
          <div className="rounded-full  grid place-items-center overflow-hidden bg-main-color w-[80px] h-[80px]">
              <img src={profile} alt="" className="object-cover h-full w-full " />
          </div>
          <div className="w-[70%]">
              <p className="text-[16px]  font-title font-normal  tracking-[0.2px]    text-text-color2 ">{name}</p>
              <p className="mt-1 font-para font-medium text-[12px] tracking-[0.2px] text-p-text">{comment}</p>
          </div>
    </div>
  )
}

export default TestimonialCard