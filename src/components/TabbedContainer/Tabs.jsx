import { TabContext } from './TabbedContainer'
import { useContext, useEffect } from 'react'

export default function Tabs({ children, className }) {

  const { setTab } = useContext(TabContext);

  const firstChild = children[0];
  const { selection } = firstChild.props;

  useEffect(() => {
    setTab(selection);
  }, [])

  return <div className={className}>{ children }</div>
}
