import React,{useMemo, useState} from 'react';

const UseMemo = () => {

    const [data,setData]=useState(0);
    const [count,setCount]=useState(2);
   const multicounter = useMemo(
    function multicount(){
        console.log("called");
        return count *2
        },[data]
   )
    
    
    return (
        <>
          <h1>this is my usememo page</h1>
        <h2>{multicounter}</h2>
        <h2>{data}</h2>
        <h2>{count}</h2>
        <button onClick={()=>{setData(data + 1)}}>update data </button>
        <button onClick={()=>{setCount(count * 2)}}>update count</button>
        </>
    );
};

export default UseMemo;