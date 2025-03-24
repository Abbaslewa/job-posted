import React from 'react'
import InputField from '../components/InputFiled';
const EmploymentType = ({handleChange}) => {
  return (
    <div>
         <h4 className="text-lg font-medium mb-4">type of emploment</h4>
        <div>
        <label className='sidebar-label-container'>
          <input type="radio" name='test' id='test' value="" onChange={handleChange}/>
          <span className='checkmark'></span>Any experince
        </label>
        </div>
      <div className="space-y-3">
      <InputField handleChange={handleChange} value="full-time"  title="Full-time" name="test2" />
        <InputField handleChange={handleChange} value="temporary" title="Temporary" name="test2" />
        <InputField handleChange={handleChange} value="part-time"  title="Part-time" name="test2" />

        
      </div>
     </div>
  )
}

export default EmploymentType
