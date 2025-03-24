import React from 'react';
import Button from './Button';
import InputField from '../components/InputFiled'; 

const Salary = ({ handleClick, handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-4">Salary</h4>
      <div className="flex space-x-2 mb-4">
        <Button onClickHandler={handleClick} value="" title="Hourly" />
        <Button onClickHandler={handleClick} value="monthly" title="Monthly" />
        <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
      </div>

      <div>
        <label className='sidebar-label-container'>
          <input type="radio" name='test' id='test' value="" onChange={handleChange}/>
          <span className='checkmark'></span>All
        </label>
        </div>
      <div className="space-y-3">
        <InputField handleChange={handleChange} value={30} title="< 30000k" name="test2" />
        <InputField handleChange={handleChange} value={50} title="< 50000k" name="test2" />
        <InputField handleChange={handleChange} value={80} title="< 80000k" name="test2" />
        <InputField handleChange={handleChange} value={100} title="< 1000000k" name="test2" />
        
      </div>
    </div>
  );
};

export default Salary;
