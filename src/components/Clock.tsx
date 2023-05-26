const Clock = () => {
  return (
    <section className='mr-[1rem] flex gap-[0.2rem]'>
      {
        [0, 1, 1, 9].map((el, idx) => (
            <div key={idx} className='
            w-[1.5rem] h-[2.5rem] bg-[#202951] rounded-[3px] text-white
            text-[1.1rem] flex justify-center items-center nth-[2]:mr-[1rem]
            nth-[2]:relative nth-[2]:after:absolute nth-[2]:after:content-[":"]
            nth-[2]:after:left-[2rem] nth-[2]:after:text-[1.5rem] 
            nth-[2]:after:text-[#202951]
            '
            >{ el }</div>
        ))
      }
    </section>
  )
}

export default Clock
