import React from "react"
import "./App.css"

function App() {
  return (
    <div className="App">
      <h1>VUTTR</h1>
      <h2>Very Useful Tools to Remember</h2>

      <div className="toolListHeader">
        <input type="text" name="search" id="" placeholder="search" />
        <input type="checkbox" name="" id="" />
        <label htmlFor="">search in tags only</label>
        <button>Add</button>
      </div>

      <div className="toolList">
        <div>
          <h3>Title</h3>
          <p>description</p>
          <p>tags</p>
        </div>

        <div>
          <h3>Title</h3>
          <p>description</p>
          <p>tags</p>
        </div>
      </div>
    </div>
  )
}

export default App
