import React from 'react';


function Counter() {
  const [count, setCount] = React.useState(0)

  const handleIncrement = ()=>{
  setCount(count+1)
  }
  const handleDecrement = ()=>{
  setCount(count-1)
  }

  return (

      <div className="card mb-3 mt-3" 
      style={{boxShadow: "0 0 20px rgba(0,0,0,.1)", width:"300px", margin:"auto", textAlign: "center"}}>
        <div className="card-header">
          <h4 >React Counter:</h4>
        </div>
        <div className="card-body">
          <p style={{fontSize:"60px"}}>{count}</p>
          <button type="button" className="btn btn-info" onClick={handleIncrement}
          style={{margin: "10px"}}> Increment</button>
          
          <button type="button" className="btn btn-warning" onClick={handleDecrement}> Decrement</button>
        </div>

      </div>
  );
}

export default Counter;
