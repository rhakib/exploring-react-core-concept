import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Players from './Players'
import Users from './Users'

function App() {

  // using normal function
  function handleClick () {
    alert('button clicked')
  }

// using arrow function
  const handleClick2 = () => {
    alert('btn clicked 2')
  }
  // by passing parameter// wrapping by arrow function in html part
 const addFive = (num) => {
  alert(num + 5)

 }

  return (
    <>
      <h1>React core concept 2</h1>

      <Users></Users>

      <Players></Players>

      <Counter></Counter>      

      <button onClick={handleClick}>Clicked</button> 
      <button onClick={handleClick2}>Clicked</button> 
      <button onClick={() => {alert('btn 3 clicked')}}>Clicked</button>
      <button onClick={()=> addFive(3)}>Clicked</button> 
     
    </>
  )
}

export default App
