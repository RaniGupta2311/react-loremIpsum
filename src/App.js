import React,{useState} from "react";
import data from './data';
function App() {
  const [count,setCount]=useState(0);
  const [text,setText]=useState([])
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log("Hello world");
    // console.log(count);
    // console.log(typeof count);   print string
    let amount=parseInt(count);
    // console.log(typeof amount);  print number
    if(count<=0)
    amount=1;
    if(count>data.length-1)
      amount=data.length-1;
    setText(data.slice(0,amount));
  }
  return <main>
      <section className="section">
        <h3>tired of boring lorem ipsum?</h3>
        <form onSubmit={handleSubmit} className="lorem-form">
          <label htmlFor="amount">paragraphs:</label>
          <input
           type="number"
           name="amount"
           id="amount"
           value={count}
           onChange={(e)=>setCount(e.target.value)}
           />
          <button className="btn">generate</button>
        </form>
       {
         text.map((item,index)=>{
           return <p key={index}>{item}</p>
         })
       }

      </section>
      {/* <h2>lorem ipsum</h2> */}
  </main>
}

export default App;
