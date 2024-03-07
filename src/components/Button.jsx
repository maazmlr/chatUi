import React from 'react'

const Button = ({
    text='',
    className='',
    type='button',
    onClick=()=>{

    }
}) => {
  return (
<button className={`btn cube cube-hover ${className}`} type={type} onclick={onClick}>
  <div className="bg-top">
    <div className="bg-inner" />
  </div>
  <div className="bg-right">
    <div className="bg-inner" />
  </div>
  <div className="bg">
    <div className="bg-inner" />
  </div>
  <div className="text">{text}</div>
</button>
  )
}

export default Button