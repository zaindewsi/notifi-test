import { Route, Routes, useNavigate } from 'react-router-dom'
import { Start } from './components/StartPage'
import { Subscsribe } from './components/SubscsribePage'
import { NotifiLogo } from './components/NotifiLogo'
import './App.css'
import { useEffect, useState } from 'react'
import Browser from 'webextension-polyfill'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    Browser.storage.local
      .get('isSubscribed')
      .then(obj => {
        if (obj.isSubscribed === 'true') {
          navigate('/subscribe')
        }
        setIsLoading(false)
      })
      .catch(err => console.error(err))
  }, [navigate])

  return (
    <>
      <NotifiLogo />
      {!isLoading && (
        <Routes>
          <Route element={<Start />} path='/' />
          <Route element={<Subscsribe />} path='/subscribe' />
        </Routes>
      )}
    </>
  )
}

export default App
