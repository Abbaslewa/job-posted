import React from 'react';
import Location from './Location'; 
import Button from './Button';
import Salary from './Salary';
import JobPostingData from './JobPostingData';
import WorkExperince from './WorkExperince ';
import EmploymentType from './EmploymentType';

const Sidebar = ({ handleChange, handleClick }) => {
  return (
    <div className="space-y-5">
      <h3 className="text-lg mb-2 font-bold">Filters</h3>
      <Location handleChange={handleChange} />
      <Salary handleChange={handleChange} handleClick={handleClick}/>
      <JobPostingData handleChange={handleChange} />
      <WorkExperince handleChange={handleChange} />
      <EmploymentType handleChange={handleChange} />
      
    </div>
  );
};

export default Sidebar;
