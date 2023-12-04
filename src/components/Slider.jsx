/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */


import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";
import Header4 from "./Header4";
import { useEffect, useState } from 'react';
import { AnimatePresence } from "framer-motion";





const Slider = () => {

   
  

   const slides = [<Header4 key='Header1' />, <Header3 key='Header2' />, <Header1 key='Header3' />,<Header2 key='Header4' />, ]
   const BtnKeys = ['first', 'second', 'third', 'fourth'];


    const [currentSlide, setCurrentSlide] = useState(0)
    const [renderHeader, setRenderHeader] = useState(slides[currentSlide]);
    const [sliderBtn, setSliderBtn] = useState(BtnKeys[currentSlide]);

    const slideLength = slides.length;
    const intervalTime = 8000;
    let slideInterval;
    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
        setRenderHeader(slides[currentSlide])
        setSliderBtn(BtnKeys[currentSlide])
       
   }

   function auto() {
      slideInterval = setInterval(nextSlide, intervalTime);
   }
    

    function handleClick(clickNumber) {
       setRenderHeader(slides[clickNumber])
        setSliderBtn(BtnKeys[clickNumber])
        setCurrentSlide(clickNumber === slideLength - 1 ? 0 : clickNumber + 1)
   }

   useEffect(() => {
      setCurrentSlide(0)
   }, [])
    
   //  useEffect(() => {
   //    auto();
   //    return ()=> clearInterval(slideInterval)
   // },[currentSlide])
    
   return <div className="w-[100vw] h-[100%] bgkla sm:w-[100vw] border grid place-items-center overflow-hidden relative">
      <AnimatePresence initial='false' mode="wait">
         {renderHeader}
      </AnimatePresence>    
      <div className={`absolute top-[40%] right-10 translate-y-[-50%] hidden lg:flex justify-between items-center flex-col`}>
         <div className={` ${sliderBtn === 'first'? 'w-[20px] h-[20px] bg-transparent border-2 border-light-gray-1': 'w-[15px] h-[15px] hover:w-[20px] hover:h-[20px]   border-none bg-light-gray-1 '} cursor-pointer mt-2 rounded-full grid place-items-center`} onClick={()=>handleClick(0)} > <div className={` block w-[8px] h-[8px] bg-light-gray-1 rounded-full `}></div> </div>
           <div className={`  ${sliderBtn === 'second' ? 'w-[20px] h-[20px] bg-transparent border-2 border-light-gray-1' : 'w-[15px] h-[15px] hover:w-[20px] hover:h-[20px] border-none bg-light-gray-1 '} cursor-pointer mt-2 rounded-full grid place-items-center`} onClick={() => {
               handleClick(1)
               console.log("Clicked");
         }} > <div className={` ${sliderBtn === 'second'? 'block w-[8px] h-[8px] bg-light-gray-1 rounded-full': 'hidden'} `}></div> </div>
         <div className={`  ${sliderBtn === 'third'? 'w-[20px] h-[20px] bg-transparent border-2 border-light-gray-1': 'w-[15px] h-[15px] hover:w-[20px] hover:h-[20px] border-none bg-light-gray-1 '} cursor-pointer mt-2 rounded-full grid place-items-center`} onClick={()=>handleClick(2)}> <div className={` ${sliderBtn === 'third'? 'block w-[8px] h-[8px] bg-light-gray-1 rounded-full': 'hidden'} `}></div> </div>
         <div className={`  ${sliderBtn === 'fourth'?  'w-[20px] h-[20px] bg-transparent border-2 border-light-gray-1': 'w-[15px] h-[15px] hover:w-[20px] hover:h-[20px] border-none bg-light-gray-1 '} cursor-pointer mt-2 rounded-full grid place-items-center`} onClick={()=>handleClick(3)}> <div className={` ${sliderBtn === 'fourth'? 'block w-[8px] h-[8px] bg-light-gray-1 rounded-full': 'hidden'} `}></div> </div>
      </div>
    </div>
 
};
export default Slider;

