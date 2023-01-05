import React from 'react'
import MainRoutes from './Routes/MainRoutes'
import { Header } from './components/Header/header'

const App = () => {
  return (
    <div>
      <Header />
      <MainRoutes/>
    </div>
  )
}

export default App