/* eslint-disable react/no-unescaped-entities */

import { Carousel } from 'antd';
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";
import Header4 from "./Header4";




const Header = () => (
  <Carousel autoplay dots={false} effect='fade'>

    <div className="   w-[100vw] h-[50vh] sm:h-[100vh]  overflow-y-hidden  ">
      <Header4 />
    </div>
   {/* <div className="   w-[100vw] h-[50vh] sm:h-[100vh]  overflow-y-hidden  ">
      <Header3 />
    </div>
    <div className="w-[100vw]  h-[50vh] sm:h-[100vh]  overflow-y-hidden  ">
      <Header1 />
    </div>
    <div className="   w-[100vw] h-[50vh] sm:h-[100vh]  overflow-y-hidden ">
      <Header2 />
</div> */}

  </Carousel>
);
export default Header;

