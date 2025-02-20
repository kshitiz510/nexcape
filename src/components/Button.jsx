import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ children, className, size, variant, ...props }) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };
  const variantStyles = {
    solid: "bg-[#ffd015] text-black hover:bg-[#ffd015]/90",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  };

  return (
    <button
      className={classNames(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["solid", "outline"]),
};

Button.defaultProps = {
  className: "",
  size: "md",
  variant: "solid",
};

export default Button;
