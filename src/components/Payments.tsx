type OpenModal = () => void;

const Payments = ({ onModalOpen }: { onModalOpen: OpenModal }) => {
  return (
    <section className='
    h-full w-full bg-[#8AC2D2] flex 
    justify-center items-start
    '
    >
      <div className="flex justify-center flex-col text-[#FFFAEA] mt-[5rem]">
        <h1 className="text-[3rem] mb-[5rem] text-[#FE6600]">Payments</h1>
        <button className='
        block border-none cursor-pointer
        py-6 px-[3rem] bg-[#FE6600] mt-[5rem] text-2xl rounded-lg
        capitalize hover:bg-[#280B0B] transition-colors duration-300 ease-linear
        '
        onClick={onModalOpen}
        >
          proceed to payments
        </button>
      </div>
    </section>
  )
}

export default Payments
