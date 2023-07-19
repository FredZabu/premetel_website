import subscribe from "../assets/Subscribe.png";

function SubscribeSection() {
  return (
      <div className="h-[40vh] sm:h-[100vh] w-[100%]  grid place-items-center">
          <div className="w-[90%] h-[60%] relative">
              <img src={subscribe} alt="" className="w-full h-full sm:block hidden" />
              <div className="absolute left-0 right-0  sm:top-[50%] sm:translate-y-[-50%] sm:left-[50%] sm:translate-x-[-50%] flex flex-col items-center ">
                  
                  <h1 className=" text-xl sm:text-4xl  font-title font-bold text-text-color sm:leading-[45px] tracking-[0.2px] sm:w-[542px] mt-5 text-center ">
            Get Started with Primetel by Signing Up
          </h1>
                  <button className={`mt-4 sm:mt-5 text-white  font-[700] text-[14px] tracking-[0.2px] leading-[22px] py-[12px] px-[25px] rounded-[5px] bg-btn-color `}>Sign Up</button>
              </div>
          </div>
    </div>
  )
}

export default SubscribeSection