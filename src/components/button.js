import React from "react"

const BASE = "px-3 py-2 text-md rounded-md text-white"
const VARIANTS = {
  default: "bg-blue-500 hover:bg-blue-600",
  muted: "bg-gray-500 hover:bg-gray-600",
}

const Button = ({ children, variant, className = "" }) => {
  const classNames = [className, BASE, VARIANTS[variant]].join(" ")

  return <button className={classNames}>{children}</button>
}

export default Button
