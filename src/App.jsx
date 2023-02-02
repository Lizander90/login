import { useContext, useState } from 'react'
import Login from './components/login/loginForm'
import './App.css';
import { GLobalContext } from './context';
import ListUser from './components/login/listAcciones';


function App() {

  const { logued } = useContext(GLobalContext)

  return <>
    {<Login />
    }
    {logued &&
      <ListUser />
    }

  </>
}

export default App
