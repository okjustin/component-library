import { useContext } from 'react'
import { FlipContext } from './FlipCard'
import styles from './FlipCard.module.scss'

export default function Front({ children }) {
  const { flipped } = useContext(FlipContext)

  return (
    <div className={`${styles.front} ${flipped ? styles.hidden : ''}}`}>
      {children}
    </div>
  )
}