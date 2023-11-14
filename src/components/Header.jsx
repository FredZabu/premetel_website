/* eslint-disable react/no-unescaped-entities */


import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";
import Header4 from "./Header4";
import { useEffect, useState } from 'react';
import { AnimatePresence } from "framer-motion";





const Header = () => {

   
  

   const items = [<Header4 key='Header1' />, <Header3 key='Header2' />, <Header1 key='Header3' />,<Header2 key='Header4' />, ]
   const BtnKeys = ['first', 'second', 'third', 'fourth'];

   const [renderHeader, setRenderHeader] = useState('');
   const [sliderBtn, setSliderBtn] = useState('');
   
   const changeHeader = (count) => {   
      setTimeout(() => {
         if (count < 4) {
            setSliderBtn(BtnKeys[count])
            setRenderHeader(items[count])
            count++;
         } else {
            count = 0;
      }
      changeHeader(count);
   },10000)
}

   useEffect(() => {
      setSliderBtn(BtnKeys[0])
      setRenderHeader(items[0])
      
      changeHeader(1);
 },[])
   return <div className="w-[100vw] h-[50vh] bgkla  sm:h-[100vh] sm:w-[100vw]  overflow-hidden relative">
      <AnimatePresence initial='false' mode="wait">
         {renderHeader}
      </AnimatePresence>    
      <div className={`absolute top-[40%] right-10 translate-y-[-50%] flex justify-between items-center flex-col`}>
         <div className={` ${sliderBtn === 'first'? 'w-[20px] h-[20px] bg-transparent border-2 border-light-gray-1': 'w-[15px] h-[15px]  border-none bg-light-gray-1 '}  mt-2 rounded-full grid place-items-center`}> <div className={` ${sliderBtn === 'first'? 'block w-[8px] h-[8px] bg-light-gray-1 rounded-full': 'hidden'} `}></div> </div>
         <div className={`  ${sliderBtn === 'second'?  'w-[20px] h-[20px] bg-transparent border-2 border-light-gray-1': 'w-[15px] h-[15px] border-none bg-light-gray-1 '}  mt-2 rounded-full grid place-items-center`}> <div className={` ${sliderBtn === 'second'? 'block w-[8px] h-[8px] bg-light-gray-1 rounded-full': 'hidden'} `}></div> </div>
         <div className={`  ${sliderBtn === 'third'? 'w-[20px] h-[20px] bg-transparent border-2 border-light-gray-1': 'w-[15px] h-[15px] border-none bg-light-gray-1 '}  mt-2 rounded-full grid place-items-center`}> <div className={` ${sliderBtn === 'third'? 'block w-[8px] h-[8px] bg-light-gray-1 rounded-full': 'hidden'} `}></div> </div>
         <div className={`  ${sliderBtn === 'fourth'?  'w-[20px] h-[20px] bg-transparent border-2 border-light-gray-1': 'w-[15px] h-[15px] border-none bg-light-gray-1 '}  mt-2 rounded-full grid place-items-center`}> <div className={` ${sliderBtn === 'fourth'? 'block w-[8px] h-[8px] bg-light-gray-1 rounded-full': 'hidden'} `}></div> </div>
      </div>
    </div>
 
};
export default Header;

