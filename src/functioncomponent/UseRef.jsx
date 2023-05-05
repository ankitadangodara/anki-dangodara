import React,{useRef} from 'react';

const UseRef = () => {
const inputref = useRef(null)
function handle(){
  console.log("input call")
  // inputref.current.value = "100"
  inputref.current.style.color = "blue"
  inputref.current.focus();

}
    return (
      <>
        <h1>this is my useref page</h1>
         <input type="text" ref={inputref}/>
        <button onClick={handle}>Refchange</button>
      </>
    );
};

export default UseRef;