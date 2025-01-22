import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MedalForm from './components/MedalForm'


function App() {
  const [userInputs, setUserInputs] = useState ({
    nation: "",
    goldMedals: "",
    silverMedals: "",
    bronzeMedals: "",
  })

  return (
    <MedalForm />

  )}
    
    


  export default App;