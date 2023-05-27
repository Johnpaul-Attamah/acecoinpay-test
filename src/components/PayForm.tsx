import CreditCard from "./CreditCard"
import FormSection from "./FormSection"
import { IModalOverlay } from "./Overlay"
import Summary from "./Summary"

const PayForm = ({ modalOpened, onModalClose }: IModalOverlay) => {
  return (
    <section className={`absolute left-[10rem] right-[10rem] py-[5rem] px-[3rem]
    top-[2.5rem] bottom-[2.5rem] bg-white transition-opacity duration-200 ease-out
    ${modalOpened ? 'opacity-100 visible z-20' : 'opacity-0 invisible z-0'}
    flex items-center md:top-[8rem] md:bottom-[8rem] sm:left-[6rem] sm:right-[6rem]
    sm:flex-col sm:overflow-auto xs:left-[4rem] xs:right-[4rem]
    `}
    >
      <FormSection />
      <Summary />
      <CreditCard />
      {/* Close Icon */}
      <span className='absolute text-[2.5rem] text-[#333]
      w-[2rem] h-[2rem] right-0 top-0 flex justify-center
      items-center text-center font-extralight cursor-pointer
      '
      onClick={onModalClose}
      >
        &times;</span>
      
    </section>
  )
}

export default PayForm
