import PropTypes from "prop-types"
import React from "react"
import "./button.css"

const Button = ({
  className = "",
  variant = "primary",
  children,
  ...props
}) => {
  const variantName = variant ? `btn--${variant}` : ""

  return (
    <button {...props} className={`btn ${variantName} ${className}`}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  variant: PropTypes.string,
}

export default Button
