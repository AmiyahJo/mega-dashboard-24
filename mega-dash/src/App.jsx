import RandomQuote from './components/RandomQuote'
import PomodoroTimer from './components/PomodoroTimer'
import Diceroller from './components/DiceRoller'
import List from './components/to-do'
import Calculator from './components/calculator'
import TextEditor from './components/text-editor'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <p>Mega dashboard app</p>
     <div className='dashboard'>

        <div className='widget widget-1'>
        <PomodoroTimer/>
        </div>
        <div className='widget widget-2'>
        <Calculator/>
        </div>
        <div className='widget widget-3'>
        <List/>
          </div>
        <div className='widget widget-4'>
        <RandomQuote/>
        </div>
        <div className='widget widget-5'>
        <Diceroller/>
        </div>
        
        <div className='widget widget-6'>
        <TextEditor/>
        </div>
     </div>
    </>
  );
};

export default App
