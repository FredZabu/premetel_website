import { ValuesCard } from "../components/index"
import aboutImage from "../assets/about.png"
import Team from "../components/team/team";
import { valuesData } from "../data/Data.js";
function AboutPage() {
  return (
    <div className=" mt-[12vh] w-[100vw] ">
            <div className="h-[70vh] bg-[url('./src/assets/bg-1.jpg')]  bg-cover bg-center  bg-no-repeat">
        <div className="h-full bgkla1 grid place-items-center">
           <h1 className=" text-4xl sm:text-7xl font-title font-bold text-white sm:leading-[67px] tracking-[0.2px]  text-start ">
           About Us
          </h1>
        </div>
      </div>
          <div className=" mt-20 mx-auto w-[90%] grid sm:grid-cols-3 sm:grid-rows-2  place-items-center ">
              <div className=" sm:row-start-2 sm:row-end-3 sm:col-start-1 sm:col-end-2 ">
                <h4 className="text-2xl mb-2 font-bold text-text-color  tracking-[0.2px] text-center sm:text-start">Our Mission</h4>
           
            <ul className="text-[15px] tracking-[0.2px] text-second-text-color ">
              <li className="flex justify-between items-start"> <span className="mr-2"><span className=" inline-block w-[12px] h-[12px] bg-text-color rounded-full border-main-color border-2"></span></span> <span className=" inline-block ">Primetel believes in challenging the conventional healthcare
                systems with the ever-expanding technological advancements in
                providing efficient, customised, and convenient healthcare
                services to people in rural areas.</span></li>

            <li className="flex justify-between mt-1"> <span className="mr-2"><span className=" inline-block w-[12px] h-[12px] bg-text-color rounded-full border-main-color border-2"></span></span> <span className=" inline-block ">How? By tapping the power of technology in radiating access to
                healthcare services across each household regardless of
                location, income level, or health condition.</span></li>

             <li className="flex justify-between mt-1"> <span className="mr-2"><span className=" inline-block w-[12px] h-[12px] bg-text-color rounded-full border-main-color border-2"></span></span> <span className=" inline-block ">We seek to join other innovative medical institutions in
                providing our customers with the safest and most efficient
                medical assistance. You are the reason we operate.</span></li>

                 </ul>
        
        </div>
        <div className=" sm:row-span-full ">
          <img src={aboutImage} alt="Image of a smiling woman talking on phone"  />
        </div>
        <div className="sm:row-start-1 sm:row-end-2 sm:col-start-3 sm:col-end-4 mt-10 sm:mt-0">
            <h4 className="text-2xl font-bold text-text-color  tracking-[0.2px] text-center sm:text-start mb-2">Who we are</h4>

           <ul className="text-[14px] tracking-[0.2px] text-second-text-color ">
              <li className="flex justify-between items-start"> <span className="mr-2"><span className=" inline-block w-[12px] h-[12px] bg-text-color rounded-full border-main-color border-2"></span></span> <span className=" inline-block ">Access to high-quality healthcare services, particularly in rural areas, has highly been jeopardised and turned into a “privilege.” We are keen on harnessing technological advancements into powerful medical tools that challenge how we define high-quality healthcare services.</span></li>

            <li className="flex justify-between mt-1"> <span className="mr-2"><span className=" inline-block w-[12px] h-[12px] bg-text-color rounded-full border-main-color border-2"></span></span> <span className=" inline-block "> We provide our customers with the safest and most affordable medical services while offering personalised consultations during and after prescriptions.</span></li>

             <li className="flex justify-between mt-1"> <span className="mr-2"><span className=" inline-block w-[12px] h-[12px] bg-text-color rounded-full border-main-color border-2"></span></span> <span className=" inline-block ">We combine the latest technology with the
                knowledge and expertise of our medical staff to make healthcare
                more affordable, accessible, and inclusive to everyone in the
              rural areas of Tanzania.</span></li>
            <li className="flex justify-between mt-1"> <span className="mr-2"><span className=" inline-block w-[12px] h-[12px] bg-text-color rounded-full border-main-color border-2"></span></span> <span className=" inline-block ">We strongly believe that being sick is complicated; thus, accessing medical services shouldn’t be.</span></li>

                 </ul>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-text-color  tracking-[0.2px] text-center  sm:mb-10 mt-10">Our Values</h1>
        <div className="sm:my-20 mx-auto w-[95%] sm:grid grid-cols-2 gap-20 place-items-center">
        {valuesData.map(({ icon, title, description, id }) => { 
                      return <div key={id} className={` h-full`} >
                          <ValuesCard iconImage={icon} textTitle={title} descript={description}  />
                      </div>
                   })}
      </div>
      </div>
      <Team />
    </div>
  )
}

export default AboutPage