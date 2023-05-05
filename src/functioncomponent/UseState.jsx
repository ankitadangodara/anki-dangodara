import React from 'react';
import { useState } from 'react';

 const  UseState = ()=> {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(0);
    function mysfun(){
        setCount(count + 1);
    }
  
    return (
     <>
     <h1>  You pressed me {data} times</h1>
      <button onClick={()=>setData(data + 1)}>
       click me
      </button>
      <br/>
      <br/>
      <button onMouseEnter={mysfun}>
        you entered {count} times</button>
     </>
    )

 }
  export default UseState;
  
// const UseState = () => {
//     const [state, setState] = useState(0);
//     function myfun(){
//         setState(state + 1)
//     } 
//     return (
//        <>
//        <button onClick={myfun}>click me</button>
//        </>
//     );
// };

// export default UseState;