import React from 'react'

const Input = ({
    type='text',
    label='',
    className='',
    name='',
    isRequired=true,
    value="",
    onChange=()=>{

    }

}) => {

  return (
    <div className={`${className}  `}>
        <input type={type} placeholder={label} name={name} className={`input    ${className}`} required={isRequired} value={value} onChange={onChange} />

    </div>
  )
}

export default Input