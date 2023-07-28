import { ValuesCard } from "../components/index"
import aboutImage from "../assets/about.png"
import aboutImage2 from "../assets/about2.png"
import Team from "../components/team/team";
import { valuesData } from "../data/Data.js";
function AboutPage() {
  return (
    <div className=" mt-[12vh] w-[100vw] ">
           

      <div className=" mt-20 mx-auto w-[90%] ">
           
        <div className="flex  flex-col sm:flex-row items-center">
          <div className="flex-[1]">
          <div className=" w-[300px] rounded-full bg-btn-color overflow-hidden ">
          <img src={aboutImage} alt="Image of a smiling woman talking on phone"  />
          </div>
          </div>


          <div className="flex-[1] ">
                <h4 className="text-2xl mb-2 font-bold text-text-color  tracking-[0.2px] text-center ">Our Mission</h4>
           
            <div className=" mt-5 flex sm:justify-end ">
              <p className="text-[15px] sm:w-[80%] tracking-[0.2px] text-second-text-color text-center sm:text-start">
              Primetel believes in challenging the conventional healthcare
                systems with the ever-expanding technological advancements in
                providing efficient, customised, and convenient healthcare
                services to people in rural areas.

          How? By tapping the power of technology in radiating access to
                healthcare services across each household regardless of
                location, income level, or health condition.

            We seek to join other innovative medical institutions in
                providing our customers with the safest and most efficient
                medical assistance. You are the reason we operate.

                 </p>
            </div>
        
          </div>   
        </div>

        <div className="flex flex-col sm:flex-row mt-10 items-center">
 
        <div className="sm:mt-0 order-2 sm:order-1 flex-[1]">
            <h4 className="text-2xl font-bold text-text-color  tracking-[0.2px] text-center mb-2 sm:w-[80%]">Who we are</h4>

           <p className="text-[14px]  sm:w-[80%] tracking-[0.2px] text-second-text-color mt-5 text-center sm:text-start ">
              Access to high-quality healthcare services, particularly in rural areas, has highly been jeopardised and turned into a “privilege.” We are keen on harnessing technological advancements into powerful medical tools that challenge how we define high-quality healthcare services.

             We provide our customers with the safest and most affordable medical services while offering personalised consultations during and after prescriptions.

            We combine the latest technology with the
                knowledge and expertise of our medical staff to make healthcare
                more affordable, accessible, and inclusive to everyone in the
              rural areas of Tanzania.
            We strongly believe that being sick is complicated; thus, accessing medical services shouldn’t be.

                 </p>
          </div>
          <div className="flex-[1] order-1 sm:order-2 flex justify-end">
          <div className="   w-[300px] rounded-full bg-main-color overflow-hidden  ">
          <img src={aboutImage2} alt="Image of a smiling woman talking on phone"  />
            </div>
            </div>
        </div>
        
      </div>



      <div className="mt-10">
        <h1 className="text-2xl sm:text-5xl font-bold text-text-color  tracking-[0.2px] text-center  mt-10">Our Values</h1>
        <div className="sm:my-5 mx-auto w-[90%] sm:w-[90%] sm:grid grid-cols-4 gap-20 place-items-center">
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