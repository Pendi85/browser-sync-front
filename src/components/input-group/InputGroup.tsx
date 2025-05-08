import React from 'react';

function InputGroup(props : any) {
    return (
        <>
            <div className="input-group">
                <input 
                    type={props.type || "text"} 
                    placeholder={props.placeholder} 
                />
                {props.error && <span className="error">{props.error}</span>}
            </div>
        </>
    )
}

export default InputGroup;