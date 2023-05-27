import { cardData } from "../data/cardSummary"
import scroll from '../assets/sccroll.png';

const Summary = () => {
  return (
    <section className='
    bg-gradient-to-br from-[#E8ECEE] to-[#EFF5F9]
    p-[2rem] ml-[4rem] mt-[6rem] rounded-[5px] flex-1 sm:ml-0
    flex justify-center relative flex-wrap sm:self-start sm:w-[50%] xs:w-full
    xs:justify-center
    '
    >
      <ul className="flex flex-col w-full mt-[14rem] sm:mt-[2rem]">
        {
            cardData.map((product, idx) => (
                <li key={idx} className="flex items-center mb-5 xs:flex-wrap
                xs:border-b-[1px] border-solid border-[#888]
                ">
                   <span className="mr-auto">{product.name}</span>
                   {product.icon && 
                   <span 
                   className="mr-[0.5rem] font-[500] text-[1.1rem]
                   p-1 bg-black rounded-full text-white
                   ">
                    <product.icon/>
                    </span>} 
                   <span className="font-[500] text-[1.1rem]">{product.value}</span>
                </li>
            ))
        }
      </ul>
      <div className="absolute top-[75%] sm:top-[65%] left-0 right-0 h-[2.5rem]">
      <div 
      className="
      w-[2.5rem] h-[2.5rem] bg-white absolute bottom-0 top-0 rounded-full
      -left-2
      "/>
      <div className="
       h-0 border-[1px] border-dashed border-[#ccc] absolute
      top-[50%] left-[2rem] right-[2rem] -translate-y-[50%]
      "/>
      <div className="
      w-[2.5rem] h-[2.5rem] bg-white absolute bottom-0 top-0 rounded-full
      -right-2
      "/>
      </div>
      <footer className="w-full flex items-center justify-between 
      mt-[4rem] sm:mt-[8rem]">
        <section className="flex flex-col">
            <h5 
            className="text-[0.9rem] font-[500]
            text-[#555]
            "
            >You have to Pay</h5>
            <div className="flex items-baseline">
            <span className="text-[2rem] font-bold text-[#333]"
            >549.<span className="text-[1.2rem]">99</span></span>
            <span 
            className="font-[500] text-[1.1rem] uppercase text-[#777] ml-[0.5rem]"
            >usd</span>
            </div>
        </section>
        <section className="w-[4rem] h-[4rem]">
            <img 
            src={scroll} 
            alt="scroll sheet" 
            width={"31px"} 
            height={"31px"} 
            className="w-full h-auto object-cover object-center"
            />
        </section>
      </footer>
    </section>
  )
}

export default Summary
