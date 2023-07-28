/* eslint-disable react/prop-types */

function Btn(props) {
    const { styles, texts } = props;
  return (
      <button className={`mt-4 sm:mt-0  font-[700] text-[14px] tracking-[0.2px] leading-[22px] hover:bg-hover-color hover:text-white transition-all delay-200 ease-in-out  rounded-[5px] ${styles}`}>{texts }</button>
  )
}

export default Btn