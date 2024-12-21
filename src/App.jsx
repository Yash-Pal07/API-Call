import React from 'react'
import axios from 'axios'
const App = () => {

  const clickhandler =async (e)=>{
    e.preventDefault();
    const data =await axios.get("https://picsum.photos/200/300?grayscale")
    console.log(data)
  }
  return (
    <div>
      <button onClick={(e)=>clickhandler(e)}>Get data</button>
    </div>
  )
}

export default App
