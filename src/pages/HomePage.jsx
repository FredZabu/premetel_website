
import { Slider } from "../components/index.jsx";
import { KeyFocusArea, ServiceSection, AspirationSection, HowItWorks, SubscribeSection} from "./index";
function HomePage() {
  return (
      <div>
      <div className="mt-[12vh] h-[100vh] relative overflow-hidden bg-[#376198]">
        <Slider />
      </div>
			<KeyFocusArea />
      <ServiceSection />
      <AspirationSection />
      <HowItWorks />
      <SubscribeSection />
    
    </div>
  )
}

export default HomePage;