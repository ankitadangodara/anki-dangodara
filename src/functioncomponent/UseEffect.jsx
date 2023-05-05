import React,{useEffect,useState} from 'react';

const UseEffect = () => {
    
    const[data,setData]=useState(0);
    useEffect(()=>{
        alert("this is a useeffect 1")
    },[])
    const[count,setCount]=useState(0);
    useEffect(()=>{
        alert("this is a useeffect 2")
    },[count])
    return (
       <>
      <h1>  You pressed me {data} times</h1>
      <button onClick={()=>setData(data + 1)}>
       click me
      </button>
      <h1>  You pressed me {count} times</h1>
      <button onClick={()=>setCount(count + 1)}>
       click me
      </button>
       </>
    );
};

export default UseEffect;