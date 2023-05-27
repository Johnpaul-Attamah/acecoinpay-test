import { MdOutlineModeEditOutline } from 'react-icons/md'
import Clock from './Clock'
import Logo from './Logo'
import CardPinInput from './CardPinInput'
import DiceGrid from './DiceGrid'
import MyOtpInput from './MyOtpInput'

const FormSection = () => {
  return (
    <section
      className='
     flex-[3]
    '
    >
      <header className='flex items-center justify-between'>
        <Logo />
        <Clock />
      </header>
      <form className=''>
        <div className='py-[2rem]'>
          <label 
          htmlFor='card_number' 
          className='
          flex justify-between items-center pb-[3rem]
          relative xs:mb-[2rem]
          '
          >
            <span 
            className='
            text-[1.4rem] font-[500] capitalize
            '
            >
                card number
            </span>
            <span className='absolute block w-full top-[2.4rem] text-[#444]
            xs:w-[20rem]
            '>
                Enter the 16-digit card number on the card
            </span>
            <span className='flex items-center text-[#015DFE] mr-[0] cursor-pointer'>
              <span className='font-bold text-[1.2rem]'>
                <MdOutlineModeEditOutline />
              </span>
              <span className='text-[1.2rem]'>edit</span>
            </span>
          </label>
          <CardPinInput />
        </div>
        <div 
        className='
        py-[1.25rem] -mt-[1.5rem] flex justify-between items-center relative
        xs:flex-col xs:items-start
        '
        >
            <label 
            htmlFor="cvv" 
            className='block flex-1 text-[1.4rem] font-[500] capitalize
            xs:mb-[3rem]
            '>
                CVV Number
            </label>
            <div className='relative w-[50%] xs:w-full'>
                <input
                type="text"
                name='cvv'
                id='cvv'
                placeholder='327'
                className='
                flex-1 px-[2rem] py-[1.2rem] border border-solid border-[#ddd]
                rounded-[8px] outline-[#015DFE] text-[1.5rem] 
                placeholder:text-[1.5rem] w-full
                '
                />
                <DiceGrid />
            </div>
            <span className='absolute block w-full xl:w-[15rem]
                top-[4.4rem] text-[#444] xs:w-full xs:top-[3.8rem]'>
                Enter 3 or 4 digit number on the card
            </span>
        </div>
        <div 
        className='py-[1.25rem] -mt-[.5rem] flex
        justify-between items-center relative xs:flex-col xs:items-start'
        >
            <label 
            htmlFor="expires"
            className='block flex-1 text-[1.4rem] font-[500] capitalize
            xs:mb-[3rem]
            '
            >expiry Date</label>
            <MyOtpInput />
            <span className='absolute block w-full 
            xl:w-[15rem] top-[4.4rem] text-[#444] xs:w-full xs:top-[3.5rem]
            '>
                Enter the expiry date of the card
            </span>
        </div>
        <div 
        className='py-[1.25rem] -mt-[.5rem] 
        flex justify-between items-center relative xs:flex-col xs:items-start'
        >
            <label 
            htmlFor="password" className='block w-[40%] text-[1.4rem] 
            font-[500] capitalize xs:mb-[3rem]'
            >Password</label>
            <div className='w-[50%] relative xs:w-full'>
                <input
                type="password"
                name="password"
                id="password"
                className='
                px-[2rem] py-[1.2rem] border border-solid border-[#ddd]
                rounded-[8px] outline-[#015DFE] text-[1.5rem] block
                w-full
                '
                />
                <DiceGrid />
            </div>
            <span className='absolute block w-full top-[4.4rem] 
            text-[#444] xl:w-[15rem] xs:w-full xs:top-[3.5rem]'>
                Enter your dynamic password
            </span>
        </div>
        <button 
        type="submit"
        className='
            block py-[1.2rem] text-center text-[1.4rem] capitalize border-none
            outline-none bg-[#015DFE] w-full mt-[1.5rem] rounded-[8px]
            text-white cursor-pointer transition-colors duration-200 ease-linear
            hover:bg-[#1E2A53]
        '
        >pay now</button>
      </form>
    </section>
  )
}

export default FormSection
