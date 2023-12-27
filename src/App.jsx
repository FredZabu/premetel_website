/* eslint-disable no-mixed-spaces-and-tabs */
import { Suspense, lazy, useEffect, useState, useRef } from 'react';
import ScrollToTop from './NavigationControl/ScrollToTop.js';
import { Loader, Navbar } from "./components/index.jsx";
import { Footer} from "./pages/index";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const DiseasesWeTreat = lazy(() => import('./pages/DiseasesWeTreat.jsx'));
function App() {
	const [loading, setLoading] = useState(true);
  const bookAppointment = useRef(null);
  // const service = useRef(null);

  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
      <Router>
        <ScrollToTop />
			  <Navbar bookAppointment={bookAppointment} scrollToSection={scrollToSection} />
      <Routes>
    
        
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <HomePage bookAppointment={bookAppointment} scrollToSection={scrollToSection} />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loader />}>
                <AboutPage />
              </Suspense>
            }
          />
                    <Route
            path="/diseasesWeTreat"
            element={
              <Suspense fallback={<Loader />}>
                <DiseasesWeTreat />
              </Suspense>
            }
          />
         
          
			  </Routes>
			  <Footer />
    </Router>)
}


export default App;
