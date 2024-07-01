import React from 'react';

const GenderCheckbox = ({ onCheckBoxChange, gender }) => {
  return (
    <div className='flex gap-4'>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${gender === "male" ? "selected" : ""}`}>
          <span className='label-text'>Male</span>
          <input
            type='radio'
            name='gender'
            className='radio border-slate-900'
            checked={gender === 'male'}
            onChange={() => onCheckBoxChange('male')}
          />
        </label>
      </div>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${gender === "female" ? "selected" : ""}`}>
          <span className='label-text'>Female</span>
          <input
            type='radio'
            name='gender'
            className='radio border-slate-900'
            checked={gender === 'female'}
            onChange={() => onCheckBoxChange('female')}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
