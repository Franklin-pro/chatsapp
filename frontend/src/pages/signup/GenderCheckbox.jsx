import React from 'react'


const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex gap-4">
      <div className="form-control">
        <label className={`cursor-pointer label gap-2 ${selectedGender === "male" ? "selected" : ""}`}>
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-xs"
            checked={selectedGender === 'male'}
            onChange={() => onCheckboxChange(selectedGender === 'male' ? '' : 'male')}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`cursor-pointer label gap-2 ${selectedGender === "female" ? "selected" : ""}`}>
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-xs"
            checked={selectedGender === 'female'}
            onChange={() => onCheckboxChange(selectedGender === 'female' ? '' : 'female')}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;



// STARTER CODE FOR CHECKBOX
// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className='flex'>
// <div className='form-control'>
//     <label className='cursor-pointer label gap-2'>
//         <span className='label-text'>Male</span>
//         <input type="checkbox" defaultChecked className="checkbox checkbox-xs" />
//     </label>
// </div>
// <div className='form-control'>
//     <label className='cursor-pointer label gap-2'>
//         <span className='label-text'>Female</span>
//         <input type="checkbox" className="checkbox checkbox-xs" />
//     </label>

// </div>
//     </div>
//   )
// }

// export default GenderCheckbox