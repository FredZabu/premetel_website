
import { Slider } from "../components/index.jsx";
import { KeyFocusSection, ServiceSection, AspirationSection, HowItWorks, SubscribeSection} from "./index";
function HomePage() {
  return (
      <div className="bg-[#fffcf1]">
      <div className="mt-[12vh] h-[100vh] relative overflow-hidden bg-[#376198]">
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