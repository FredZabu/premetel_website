import { useState } from 'react';
import  {Link, useLocation} from 'react-router-dom'
import logo from "../assets/logo.png";
import menu from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";
import { Btn } from "./index";


function Navbar() {
    const [click, setClick] = useState(false)
    const location = useLocation();

      function pathMathRoute(route) {
  
    if (route === location.pathname) {
      console.log("Was called"+route);
      return true;
    } 
  }


    return (
      <div className=' h-[12vh] fixed top-0 left-0 right-0 shadow-md sm:shadow-none bg-light-gray-1 z-[999] border-2 border-btn-color'>
            
      
      <div className='flex sm:w-[95%] justify-between items-center w-[100vw]  pr-4 sm:px-0  h-full '>
                <div className="sm:flex-[1]"><img src={logo} alt="" /></div>
                <div className='flex justify-end flex-[2] '>
          <div className={` ${click? 'flex' : 'hidden'} sm:flex   items-center flex-col sm:flex-row sm:static absolute top-[12vh] left-0 right-0 pb-4 sm:pb-0 bg-text-color sm:bg-transparent  h-[50vh]  space-x-12`} >
              
                    
              <ul className='flex-[1.2] flex flex-col sm:flex-row items-center  space-y-5 sm:space-y-0 justify-center sm:justify-end sm:space-x-12 text-light-gray-1 font-title sm:text-[#06152B]'>
                            <li className={`sm:mt-0 mt-4 cursor-pointer text-grayishBlue font-[400] text-[16px] tracking-[0.2px] leading-[22px]  transition-all duration-300 ease-in-out ${pathMathRoute('/')? "text-btn-color border-b-btn-color border-b-2 " : 'border-b-transparent '}`}> <Link to="/">Home</Link> </li>
                  <li className={`sm:mt-0 mt-4 cursor-pointer text-grayishBlue font-[400] text-[16px] tracking-[0.2px] leading-[22px]  transition-all duration-300 ease-in-out ${pathMathRoute('/about')? "text-btn-color border-b-btn-color border-b-2 " : 'border-b-transparent '}`}> <Link to="/about" >About us</Link> </li> 
                  <li className={`sm:mt-0 mt-4 cursor-pointer text-grayishBlue font-[400] text-[16px] tracking-[0.2px] leading-[22px]  transition-all duration-300 ease-in-out ${pathMathRoute('/services')? "text-btn-color border-b-btn-color border-b-2 " : 'border-b-transparent '}`}> <Link to="/">Our services</Link> </li>
                 
                  <li className={`sm:mt-0 mt-4 cursor-pointer text-grayishBlue font-[400] text-[16px] tracking-[0.2px] leading-[22px]  transition-all duration-300 ease-in-out ${pathMathRoute('/contact')? "text-btn-color border-b-btn-color border-b-2 " : 'border-b-transparent '}`}> <Link to="/contact">Contact</Link> </li>
              </ul>

                    <div className='inline-flex  justify-end space-x-5'>
                        <Btn styles="bg-transparent border-[2px] text-btn-color py-[8px] px-[25px]" texts="Login" />
                        <Btn styles="bg-btn-color text-white py-[8px] px-[25px]" texts="Register" />
                        </div>
                        </div>
          </div>

          <div className=" sm:hidden" onClick={()=>{ setClick(!click)}} >
              <img src={click? close : menu} alt="" />
          </div>
          
            </div>
            </div>
  )
}

export default Navbar;