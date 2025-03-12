import { useContext } from 'react'
import { FlipContext } from './FlipCard'
import styles from './FlipCard.module.scss'

export default function Back({ children }) {
  const { flipped } = useContext(FlipContext)

  return (
    <div className={`${styles.back} ${flipped ? '' : styles.hidden }}`}>
      {children}
    </div>
  )
}