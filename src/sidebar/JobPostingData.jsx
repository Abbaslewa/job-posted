import React from 'react';
import InputField from '../components/InputFiled'; 

const JobPostingData = ({ handleChange }) => {
  const now = new Date();  
  const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);  
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);  
  const ThirtyDaysAgo = new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000);  
  // console.log(twentyFourHoursAgo);

  const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0,10)
  const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0,10)
  const ThirtyDaysAgoDate = ThirtyDaysAgo.toISOString().slice(0,10)


  console.log(twentyFourHoursAgoDate)
  return (
    <div>
      <h1 className="text-lg mb-2 font-medium">Date of posting</h1>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id="test" value="" onChange={handleChange} />
          <span className="checkmark"></span>All time
        </label>

      
        <InputField handleChange={handleChange} value={twentyFourHoursAgoDate} title="Last 24 hours" name="test" />
        <InputField handleChange={handleChange} value={sevenDaysAgoDate} title="Last 7 Days" name="test" />
        <InputField handleChange={handleChange} value={ThirtyDaysAgoDate} title="Last Month" name="test" />
        
      </div>
    </div>
  );
};

export default JobPostingData;
