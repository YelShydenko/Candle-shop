import React from 'react'

const ButtonComponent = ({ text, size, color }) => {
   
  return (
    <>
        <button className={`${size} ${color}`}>{text}</button>
    </>
  )
}

export default ButtonComponent
