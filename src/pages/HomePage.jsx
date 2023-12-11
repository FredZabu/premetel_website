
import { Slider } from "../components/index.jsx";
import { KeyFocusSection, ServiceSection, AspirationSection, HowItWorks, SubscribeSection} from "./index";
function HomePage() {
  return (
      <div className="bg-[#fffcf1]">
      <div className="mt-[12vh] h-[38vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] xl:h-[85vh] relative overflow-hidden bg-[#376198]">
        <Slider />
      </div>
			<KeyFocusSection />
      <ServiceSection />
      <AspirationSection />
      <HowItWorks />
      <SubscribeSection />
    
    </div>
  )
}

export default HomePage;