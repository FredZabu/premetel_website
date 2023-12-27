/* eslint-disable react/prop-types */

import { Slider } from "../components/index.jsx";
import { KeyFocusSection, ServiceSection, AspirationSection, HowItWorks, SubscribeSection} from "./index";
function HomePage(props) {
  const { bookAppointment, scrollToSection } = props;
  return (
      <div className="bg-[#fffcf1]">
      <div className="mt-[12vh] h-[38vh] sm:h-[55vh] md:h-[70vh] lg:h-[75vh] xl:h-[85vh] relative overflow-hidden bg-[#376198]">
        <Slider bookAppointment ={bookAppointment} scrollToSection={scrollToSection} />
      </div>
			<KeyFocusSection />
      <ServiceSection />
      <AspirationSection />
      <HowItWorks />
      <SubscribeSection bookAppointment ={bookAppointment} />
    
    </div>
  )
}

export default HomePage;