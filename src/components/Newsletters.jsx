import React from 'react';
import { FaEnvelopeOpenText, FaRocket } from 'react-icons/fa';  // Corrected icons import

const Newsletters = () => {
  return (
    <div>
      <div>
        <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Email me for jobs
        </h4>
        <p className="text-primary/75 text-base mb-4">
          Ut esse eiusmod aute labore. Aute ea fugiat commodo ea fugiat.
        </p>

        <div className="w-full space-y-5">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@gmail.com"  
            className="w-full block py-1 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value="Subscribe" 
            className="w-full bg-blue rounded-sm text-white cursor-pointer font-semibold block py-1 pl-3 border focus:outline-none"
          />
        </div>
      </div>

      <div className='mt-20'>
        <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get noticed faster
        </h4>
        <p className="text-primary/75 text-base mb-4">
          Ut esse eiusmod aute labore. Aute ea fugiat commodo ea fugiat.
        </p>

        <div className="w-full space-y-5">
     
          <input
            type="submit"
            value="Upload your resume"  
            className="w-full bg-blue rounded-sm text-white cursor-pointer font-semibold block py-1 pl-3 border focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Newsletters;
