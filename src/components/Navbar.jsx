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
      <div className=' h-[12vh] fixed top-0 left-0 right-0 shadow-md sm:shadow-none bg-header-color z-[999] '>
            
      
      <div className='flex sm:w-[90%] justify-between items-center w-[100vw]  pr-4 sm:px-0  h-full  mx-auto'>
                <div className="sm:flex-[1] flex flex-row items-center"><img src={logo} className='w-[180px]  ' alt="" /> </div>
                <div className='flex justify-end flex-[2] '>
          <div className={` ${click? 'flex' : 'hidden'} sm:flex   items-center flex-col sm:flex-row sm:static absolute top-[12vh] left-0 right-0 pb-4 sm:pb-0 bg-text-color sm:bg-transparent  h-[50vh]  space-x-12`} >
              
                    
              <ul className='flex-[1.2] flex flex-col sm:flex-row items-center  space-y-5 sm:space-y-0 justify-center sm:justify-end sm:space-x-12 text-light-gray-1 font-para sm:text-white'>
                            <li className={`sm:mt-0 mt-4 cursor-pointer text-grayishBlue font-normal  text-[16px] tracking-[0.2px] leading-[22px]  transition-all duration-300 ease-in-out ${pathMathRoute('/')? "text-white " : 'border-b-transparent '}`}> <Link to="/">Home</Link> </li>
                  <li className={`sm:mt-0 mt-4 cursor-pointer text-grayishBlue font-[400] text-[16px] tracking-[0.2px]  leading-[22px]  transition-all duration-300 ease-in-out `}> <Link to="/about" >About us</Link> </li> 
                  <li className={`sm:mt-0 mt-4 cursor-pointer text-grayishBlue font-[400] text-[16px] tracking-[0.2px]  leading-[22px]  transition-all duration-300 ease-in-out `}> <Link to="/services">Diseases We Treat</Link> </li>
                 
              </ul>

                    <div className='inline-flex  justify-end space-x-5'>
                        <Btn styles="bg-transparent border-[2px] text-white py-[8px] px-[25px]" texts="Login" />
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