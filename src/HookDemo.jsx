import React, { useState } from 'react';

const HookDemo = () =>{
    
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Button is clicked {count} times</p>
            <button className="App-link" onClick={()=>setCount(count + 1)}>Click Me</button>
        </div>
    );
}

export default HookDemo;