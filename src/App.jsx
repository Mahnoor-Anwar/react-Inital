import { useState } from 'react'
import reactLogo from './assets/react.svg'
import jcp from './assets/jcb.jpg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <img src={jcp} />
     <h1>Cherry Blossom</h1>
     <p>  Cherry blossoms are a symbolic flower of the spring, a time of renewal, and the fleeting nature of life. Their life is very short. After their beauty peaks around two weeks, the blossoms start to fall.
        During this season in Japan, people like to have cherry blossom parties with colleagues, friends, and family. .The sakura of Japan are well known around the world for their radiant, delicate and transient beauty,
        but they are more than simply beautiful cherry blossom trees. Sakura are tied to Japan’s history, culture
         and identity.Originally used to divine the year’s harvest, sakura came to embody wabi-sabi philosophy 
         and shinto ideals of impermanence, hope and renewal.</p>
     <h4>Cherry Blossom Forecast</h4>
     <p>The cherry blossoms start blooming in the southern part of Japan and gradually make their way north. 
       Follow the cherry blossom front here and see historical trends including date of first bloom and full bloom.</p>    
    </>
  )
}

export default App
