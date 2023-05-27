import { useState } from 'react';
import OtpInput from 'react-otp-input';

const MyOtpInput = () => {
  const [otp, setOtp] = useState('');

  return (
    <div className='flex flex-1 items-center w-[50%] xs:w-full'>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={2}
        inputStyle="otp-input"
        placeholder='93'
        renderSeparator={<span className='px-[1rem]'>/</span>}
        renderInput={(props) => <input {...props} />}
      />
    </div>
  );
}

export default MyOtpInput
