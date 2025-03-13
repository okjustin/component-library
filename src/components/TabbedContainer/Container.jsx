import { TabContext } from './TabbedContainer'
import { useContext } from 'react'

export default function Container({ children, selection, className }) {
  const { tab } = useContext(TabContext);

  return (
    selection === tab ?
    <div className={className}>{children}</div> :
    null
  )
}
