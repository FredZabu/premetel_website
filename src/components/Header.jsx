/* eslint-disable react/no-unescaped-entities */

import { Carousel } from 'antd';
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";
import Header4 from "./Header4";




const Header = () => (
  <Carousel autoplay>
    <div className="  mt-[15vh] w-[100vw] h-[90vh] py-10 overflow-y-hidden  bg-[url('./src/assets/Bg2.png')]  bg-cover  bg-no-repeat">
      <Header1 />
    </div>
    <div className="  mt-[15vh] w-[100vw] h-[90vh] py-10 overflow-y-hidden  bg-[url('./src/assets/Bg2.png')]  bg-cover  bg-no-repeat">
      <Header2 />
    </div>
    <div className="  mt-[15vh] w-[100vw] h-[90vh] py-10 overflow-y-hidden  bg-[url('./src/assets/Bg2.png')]  bg-cover  bg-no-repeat">
      <Header3 />
    </div>
    <div className="  mt-[15vh] w-[100vw] h-[90vh] py-10 overflow-y-hidden  bg-[url('./src/assets/Bg2.png')]  bg-cover  bg-no-repeat">
      <Header4 />
    </div>
  </Carousel>
);
export default Header;

