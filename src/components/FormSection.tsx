import { MdOutlineModeEditOutline } from 'react-icons/md'
import Clock from './Clock'
import Logo from './Logo'
import OtpInput from './OtpInput'

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
      <form>
        <div className='py-[2rem]'>
          <label 
          htmlFor='card_number' 
          className='
          flex justify-between items-center pb-[3rem]
          relative
          '
          >
            <span 
            className='
            text-[1.4rem] font-[500] capitalize
            '
            >
                card number
            </span>
            <span className='absolute block w-full top-[2.4rem] text-[#444]'>
                Enter the 16-digit card number on the card
            </span>
            <span className='flex items-center text-[#015DFE] mr-[0] cursor-pointer'>
              <span className='font-bold text-[1.2rem]'>
                <MdOutlineModeEditOutline />
              </span>
              <span className='text-[1.2rem]'>edit</span>
            </span>
          </label>
          <input 
          type="text" 
          name='card_number' 
          id='card_number'
          className='
          w-full py-[1.2rem] px-[2rem] border border-solid border-[#ddd]
          rounded-[4px] outline-[#015DFE] bg-[#efefef]
          '
          />
        </div>
        <div 
        className='
        py-[1.25rem] -mt-[1.5rem] flex justify-between items-center relative
        '
        >
            <label 
            htmlFor="cvv" 
            className='block flex-1 text-[1.4rem] font-[500] capitalize'>
                CVV Number
            </label>
            <input 
            type="text" 
            name='cvv' 
            id='cvv'
            className='
            flex-1 px-[2rem] py-[1.2rem] border border-solid border-[#ddd]
            rounded-[4px] outline-[#015DFE]
            '
            />
            <span className='absolute block w-full top-[4.4rem] text-[#444]'>
                Enter 3 or 4 digit number on the card
            </span>
        </div>
        <div 
        className='py-[1.25rem] -mt-[.5rem] flex justify-between items-center relative'
        >
            <label 
            htmlFor="expires"
            className='block flex-1 text-[1.4rem] font-[500] capitalize'
            >expiry Date</label>
            <OtpInput />
            <span className='absolute block w-full top-[4.4rem] text-[#444]'>
                Enter the expiry date of the card
            </span>
        </div>
        <div 
        className='py-[1.25rem] -mt-[.5rem] flex justify-between items-center relative'
        >
            <label 
            htmlFor="password" className='block flex-1 text-[1.4rem] font-[500] capitalize'
            >Password</label>
            <input 
            type="password" 
            name="password" 
            id="password" 
            className='
            flex-1 px-[2rem] py-[1.2rem] border border-solid border-[#ddd]
            rounded-[4px] outline-[#015DFE]
            '
            />
            <span className='absolute block w-full top-[4.4rem] text-[#444]'>
                Enter your dynamic password
            </span>
        </div>
        <button 
        type="submit"
        className='
            block py-[1.2rem] text-center text-[1.4rem] capitalize border-none
            outline-none bg-[#015DFE] w-full mt-[1.5rem] rounded-[4px]
            text-white cursor-pointer transition-colors duration-200 ease-linear
            hover:bg-[#1E2A53]
        '
        >pay now</button>
      </form>
    </section>
  )
}

export default FormSection
