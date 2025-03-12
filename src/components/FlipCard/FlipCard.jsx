import { useState, createContext } from 'react'
import styles from './FlipCard.module.scss'

const FlipContext = createContext();

export default function FlipCard({ children }) {
  const [flipped, setFlipped] = useState(false);

  function toggleFlipped() {
    setFlipped((prevFlipped) => !prevFlipped);
  }

  return (
    <FlipContext.Provider value={{ flipped, toggleFlipped }}>
      <div 
        className={`${styles.flipCard} ${flipped ? styles.flipped : ''}`}
        onMouseEnter={toggleFlipped}
        onMouseLeave={toggleFlipped}
      >
        {children}
      </div>
    </FlipContext.Provider>
  )
}

export { FlipContext };