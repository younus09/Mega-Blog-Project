import React from 'react'

function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
  return (
    <button
        className = {`px-4 py-2 rounder-lg ${bgColor} ${textColor}  ${className} `}
        {...props}
        onClick={()=> props.onClick}
    >
        {children}
    </button>
  )
}

export default Button