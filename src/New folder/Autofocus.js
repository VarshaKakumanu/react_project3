import React,{useRef,useEffect} from 'react'

const Autofocus = () => {
    const data = useRef(null);
    const submitHandler = e => {
        e.preventDefault();
        console.log(data.current.value);
    }
    useEffect(()=>{
        data.current.focus();
    },[])
  return (
    <div>
      Learning useRef hook

      <center>
        <form onSubmit={submitHandler}>
            <input ref={data} type="text" placeholder="Type HEre..." /> <br />
            <input type="submit" />
        </form>
      </center>
    </div>
  )
}

export default Autofocus
