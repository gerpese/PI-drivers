import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./views/home/home"
import Detail from "./views/detail/detail"
import Create from "./views/create/create"

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Routes>
          <Route exact path="/home" element={ <Home /> } />
          <Route path="/detail/:id" element={ <Detail /> } />
          <Route path="/create" element={ <Create /> } />
        </Routes>
      </div>
  );
}

export default App;
