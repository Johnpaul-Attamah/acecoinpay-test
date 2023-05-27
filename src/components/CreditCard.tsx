import card from '../assets/card.png';

const CreditCard = () => {
  return (
    <section className="
    absolute right-[8%] top-[26%] w-[13.5rem] h-[19.5rem] television:w-[16rem] 
    -mt-[10rem] mb-[3rem] television:h-[22rem] television:top-[24%] sm:top-[80%]
    border-solid border-[1px] bg-white rounded-[8px] xs:hidden
    shadow-credit-card sm:w-[16rem] sm:h-[22rem] 
    ">
      <img 
      src={card} 
      alt="debit card" 
      width={"160px"} 
      height={"232px"}
      className="w-full h-auto object-cover object-center"
      />
    </section>
  )
}

export default CreditCard