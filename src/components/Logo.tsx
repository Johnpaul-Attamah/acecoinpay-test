import pageLogo from '../assets/page-logo.png';

const Logo = () => {
  return (
    <section className='w-fit flex items-center'>
      <div
        className='
        w-[3rem] h-[3rem] rounded-full
        '
      >
        <img
          src={pageLogo}
          alt='ace coin pay'
          width={'31px'}
          height={'31px'}
          className="w-full h-auto object-cover object-center"
        />
      </div>
      <h2 className='font-merry text-[1.5rem] text-[#333] font-light ml-[.5rem]'>
        <span className='font-bold'>AceCoin</span>Pay
      </h2>
    </section>
  )
}

export default Logo
