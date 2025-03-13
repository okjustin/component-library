import { TabContext } from './TabbedContainer';
import { useContext } from 'react';
import classNames from 'classnames';

export default function Tab({ children, selection, className }) {
  const { setTab, tab } = useContext(TabContext);

  return <div className={classNames(className, { selected: tab === selection })} onClick={() => setTab(selection)}>{children}</div>;
}
