import React, { useState } from 'react';

const Example = ()=>{
    const [state, setstate] = useState("Hello World");
    return(
        <div>
            {state}
        </div>
    )
}

export default Example;