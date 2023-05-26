import card from '../assets/card.png';

const CreditCard = () => {
  return (
    <section className="
    absolute w-[13.5rem] h-[19.5rem] top-[2rem] left-[76%]
    border-solid border-[1px] bg-white rounded-[8px]
    shadow-credit-card
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