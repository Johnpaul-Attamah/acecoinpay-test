import { ChangeEvent, useState } from 'react';
import { MdVerified } from 'react-icons/md';

const CardPinInput = () => {
    const [cardNum, setCardNum] = useState("");

    const handleChange = 
    (e:ChangeEvent<HTMLInputElement>) => setCardNum(e.target.value); 

  return (
    <div className="relative">
        <input 
        type="text" 
        name='card_number' 
        id='card_number'
        autoFocus
        value={addCardNum(cardNum)}
        onChange={handleChange}
        placeholder='2412   -   7512    -   3412    -   3456'
        className='
        w-full py-[1.2rem] px-[5.5rem] border border-solid border-[#ddd]
        rounded-[4px] outline-[#015DFE] bg-[#efefef] placeholder:text-[1.5rem]
        text-[1.5rem]
        '
        />
        <div 
        className="
        w-[1.5rem] h-[1.5rem] absolute top-[50%] -translate-y-[50%]
        bg-[#EB001B] rounded-full left-[2rem]
        "
        />
        <div 
        className="
        w-[1.5rem] h-[1.5rem] absolute top-[50%] -translate-y-[50%]
        bg-[#fca11a] rounded-full left-[3rem] opacity-[0.85]
        "
        />
        <span 
        className='absolute right-[2rem] bg-[#EFEFEF] text-[#00A1EF]
        top-[50%] -translate-y-[50%] text-[2rem]
        '
        ><MdVerified/></span>
    </div>
  )
}

export default CardPinInput

function addCardNum(inputNum: string): string  {
    const num = inputNum
        .replace(/\s+/g, "")
        .replace(/[^0-9]/gi, "")
        .substr(0, 16);

    const section = [];

    for(let i = 0; i < num.length; i+=4) {
        section.push(num.substr(i, 4))
    }

    return section.length > 1 ? section.join("   ") : inputNum;
}