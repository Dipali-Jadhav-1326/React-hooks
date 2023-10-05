import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Component/Todo'
import FuctionA from './Component/FunctionA'
import PractUseEffect from './Component/PractUseEffect'
import PractUseRef from './Component/PractUseRef'
import Callback from './Component/Callback'
import Nav from "./Component/Nav"
import { Route } from 'react-router-dom'
import AppRouter from './Component/AppRouter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRouter/>
    </>
  )
}

export default App
