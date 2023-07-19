/* eslint-disable no-mixed-spaces-and-tabs */

import { Navbar } from "./components/index.jsx";
import { HomePage, AboutPage, Footer, ContactPage} from "./pages/index";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
	return (
		<Router>
			<div className="bg-light-gray-1 overflow-x-hidden font-title">
                <Navbar />
			    <Routes>
			 		<Route path='/' element={ <HomePage /> } />
					<Route path='/about' element={<AboutPage />} />
					<Route path = '/contact' element = { <ContactPage />} />
				</Routes>
				 <Footer />
		    </div>

		</Router>
		
	);
}


export default App;
