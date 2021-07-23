import React from 'react';
import "./Input.css" ;

const Input = ({showError, error, handleChange, handleBlur, value, ...rest}) => (
    <div>
        <input
            className="myInput"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={value}
            {...rest}
        />
        { showError && <span style={{color: 'red'}}>{error}</span>}
    </div>
);

export default Input;