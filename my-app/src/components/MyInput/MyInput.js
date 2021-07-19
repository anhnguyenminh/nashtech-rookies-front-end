import React from 'react';
import "./MyInput.css" ;

const MyInput = ({showError, error, handleChange, handleBlur, value, ...rest}) => (
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

export default MyInput;