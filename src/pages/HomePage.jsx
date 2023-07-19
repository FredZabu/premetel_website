
import { Header } from "../components/index.jsx";
import { KeyFocusArea, ServiceSection, AspirationSection, HowItWorks, SubscribeSection} from "./index";
function HomePage() {
  return (
      <div>
      <div className="border-4 border-btn-color">
        <Header />
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