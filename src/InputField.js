import React from 'react'

function InputField({type, name, placeholder}) {
    const inputStyle = {
        outline: 'none',
        padding: '.5rem 1rem',
        borderRadius: '.3rem',
        border: '2px solid #aaa',
        marginRight: '1rem',
        fontSize: '1.05rem',
        flex: '1'
    }
  return (
    <input type={type} name={name} placeholder={placeholder} style={inputStyle}/>
  )
}

export default InputField