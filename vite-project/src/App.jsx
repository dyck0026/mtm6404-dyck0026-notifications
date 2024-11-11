import { useState } from 'react'
import notifications from '../../src/notifications'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Children } from 'react'

function App() {
  const [count, setCount] = useState(5)
  const [display, setDisplay] = useState(true)
  const [item1, setItem1] = useState(true)
  const [item2, setItem2] = useState(true)
  const [item3, setItem3] = useState(true)
  const [item4, setItem4] = useState(true)
  const [item5, setItem5] = useState(true)
  
  function itemHandler(num) {
    if (num == 1) {
      setItem1(false)
      setCount(count-1)
    } else if (num == 2) {
      setItem2(false)
      setCount(count-1)
    } else if (num == 3) {
      setItem3(false)
      setCount(count-1)
    } else if (num == 4) {
      setItem4(false)
      setCount(count-1)
    } else if (num == 5) {
      setItem5(false)
      setCount(count-1)
    }
  }
  function displayHandler() {
    setDisplay(false)
    setCount(0)
  }

  return (
    <>
    <div className="alert alert-info">
      <p>Number of Notifications: {count}</p>
    </div>
      <div id="nList">
        {((item1==true) && (display==true)) && 
        <div className="alert alert-warning alert-dismissible" role="alert">
          <p>{notifications[0].id}</p>
          <p>{notifications[0].name}</p>
          <p>{notifications[0].message}</p>
          <button type="button" className="btn-close" onClick={() => itemHandler(1)}></button>
        </div>}
        {((item2==true) && (display==true)) && 
        <div className="alert alert-warning alert-dismissible" role="alert">
          <p>{notifications[1].id}</p>
          <p>{notifications[1].name}</p>
          <p>{notifications[1].message}</p>
          <button type="button" className="btn-close" onClick={() => itemHandler(2)}></button>
        </div>}
        {((item3==true) && (display==true)) && 
        <div className="alert alert-warning alert-dismissible" role="alert">
          <p>{notifications[2].id}</p>
          <p>{notifications[2].name}</p>
          <p>{notifications[2].message}</p>
          <button type="button" className="btn-close" onClick={() => itemHandler(3)}></button>
        </div>}
        {((item4==true) && (display==true)) && 
        <div className="alert alert-warning alert-dismissible" role="alert">
          <p>{notifications[3].id}</p>
          <p>{notifications[3].name}</p>
          <p>{notifications[3].message}</p>
          <button type="button" className="btn-close" onClick={() => itemHandler(4)}></button>
        </div>}
        {((item5==true) && (display==true)) && 
        <div className="alert alert-warning alert-dismissible" role="alert">
          <p>{notifications[4].id}</p>
          <p>{notifications[4].name}</p>
          <p>{notifications[4].message}</p>
          <button type="button" className="btn-close" onClick={() => itemHandler(5)}></button>
        </div>}
      </div>
      <button type="button" className="btn" onClick={displayHandler}>Clear Notifications</button>
    </>
  )
}

export default App
