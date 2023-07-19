/* eslint-disable react/prop-types */

function Btn(props) {
    const { styles, texts } = props;
  return (
      <button className={`mt-4 sm:mt-0  font-[700] text-[14px] tracking-[0.2px] leading-[22px]  rounded-[5px] ${styles}`}>{texts }</button>
  )
}

export default Btn