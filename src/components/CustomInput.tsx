import React from "react";


function CustomInput(props:React.HTMLProps<HTMLInputElement>) {
    return (
        <div>
            <input {...props}/>
        </div>
    )
}

export default CustomInput;
