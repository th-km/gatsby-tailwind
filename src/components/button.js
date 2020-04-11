import React from "react"

const BASE =
  "px-3 py-2 text-base text-white bg-gray-500 rounded-md hover:bg-gray-600"

const VARIANTS = {
  primary: "bg-blue-500 hover:bg-blue-600",
  secondary: "bg-green-500 hover:bg-green-600",
}

const Button = ({ children, variant, className = "" }) => {
  const classNames = [className, BASE, VARIANTS[variant]].join(" ")

  return <button className={classNames}>{children}</button>
}

export default Button
