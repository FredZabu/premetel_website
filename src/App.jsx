/* eslint-disable no-mixed-spaces-and-tabs */
import { Suspense, lazy, useEffect, useState } from 'react';
import { Loader, Navbar } from "./components/index.jsx";
import { Footer} from "./pages/index";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const HomePage = lazy(() => import('./pages/HomePage.jsx'));
function App() {
	const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
		  <Router>
			  <Navbar />
      <Routes>
    
        
          <Route path="/" element={<HomePage />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loader />}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<Loader />}>
                <ContactPage />
              </Suspense>
            }
          />
          
			  </Routes>
			  <Footer />
    </Router>)
}


export default App;
