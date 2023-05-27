const DiceGrid = () => {
  return (
    <div className='w-[1.5rem] h-[1.5rem] flex items-center flex-wrap
    absolute top-[50%] -translate-y-[50%] right-[2rem] gap-[0.125rem]
    '>
      {
        new Array(9).fill('x').map((_, idx) => (
            <div 
            key={idx}
            className='w-[0.4rem] h-[0.4rem] bg-[#A4A9BA] rounded-full'
            />
        ))
      }
    </div>
  )
}

export default DiceGrid
