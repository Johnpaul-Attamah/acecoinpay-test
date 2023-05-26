import FormSection from "./FormSection"
import { IModalOverlay } from "./Overlay"
import Summary from "./Summary"

const PayForm = ({ modalOpened, onModalClose }: IModalOverlay) => {
  return (
    <section className={`absolute left-[10rem] right-[10rem] py-[5rem] px-[3rem]
    top-[5rem] bottom-[5rem] bg-white transition-opacity duration-200 ease-out
    ${modalOpened ? 'opacity-100 visible z-20' : 'opacity-0 invisible z-0'}
    `}
    >
      <FormSection />
      <Summary />

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
