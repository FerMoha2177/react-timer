import React from 'react';

function InputComponent(props) {
  return (
    <div>
        <input type="number"
                placeholder="Enter a time (Min)"
                value={props.value} 
                onChange={props.handleChange} required />
    </div>
  );
}

export default InputComponent;