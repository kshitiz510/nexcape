import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Input = ({ className, ...props }) => {
  const baseStyles =
    "block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm";

  return <input className={classNames(baseStyles, className)} {...props} />;
};

Input.propTypes = {
  className: PropTypes.string,
};

Input.defaultProps = {
  className: "",
};

export default Input;
