import React from 'react'

const Memo = () => {
    const [counter,setCounter] = React.useState(0);

    const [number,setNumber] = React.useState(5);
    // const Factorial = fact(Number);
    const Factorial = React.useMemo(()=>{fact(number)},[number]);

  return (
    <div>
      {/* Learn about useMemo() hook */}

      <center>
        <button onClick={() => setCounter(counter + 1)}>
          {" "}
          Counter increment{" "}
        </button>
        <br />
        <button onClick={() => setNumber(number + 1)}>
          {" "}
           Number increment   {" "}
        </button> 
        <br />
        Factorial :{Factorial} <br />
        Counter : {counter}
      </center>
    </div>
  )
}

const fact = (n) =>{
    let answer = 1;
    for(var i=n;i>=1;i--){
        answer = answer* i;

      
    }
    console.log("factorial function calling");
    return answer;
}

export default Memo;
