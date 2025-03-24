import React from 'react'
import InputField from '../components/InputFiled'; 
const WorkExperince  = ({handleChange}) => {
  return (
    <div>
         <h4 className="text-lg font-medium mb-4">Work Experince</h4>
        <div>
        <label className='sidebar-label-container'>
          <input type="radio" name='test' id='test' value="" onChange={handleChange}/>
          <span className='checkmark'></span>Any experince
        </label>
        </div>
      <div className="space-y-3">
        <InputField handleChange={handleChange} value="internship" title="internship" name="test2" />
        <InputField handleChange={handleChange} value="Work remotely"  title="Work remotely" name="test2" />
       
        
      </div>
     </div>
  )
}

export default WorkExperince 