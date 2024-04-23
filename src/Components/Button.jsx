import React from 'react'

const Button = ({label, onClick}) => {
    return (
        <button
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={() => onClick(label)}>{label}</button>
    )
}

export default Button

