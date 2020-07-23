import React from 'react';

function DisplayComponent(props) {
  return (
    <div>

        <div>
            <span>
                {(props.time.m >= 10)? props.time.m : "0" + props.time.m}
            </span>&nbsp;<b>:</b>&nbsp;
            <span>
                {(props.time.s >= 10)? props.time.m : "0" + props.time.s}
            </span>&nbsp;

        </div>
        

    </div>
  );
}

export default DisplayComponent;