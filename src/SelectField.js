import React from 'react'

function SelectField({name, label, data}) {
    const selectStyle = {
        outline: 'none',
        padding: '.5rem 1rem',
        borderRadius: '.3rem',
        border: '2px solid #aaa',
        marginRight: '1rem',
        fontSize: '1.05rem',
        backgroundColor: 'transparent',
        flex: '1'
    }
  return (
    <select name={name} style={selectStyle}>
        <option value="" disabled selected>{label}</option>
        {
            data.map((item, index) => <option value={item} key={index}>{item}</option>)
        }
    </select>
  )
}

export default SelectField