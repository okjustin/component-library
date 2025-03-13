import { useState, createContext } from 'react';

const TabContext = createContext();

export default function TabbedContainer({ children, className }) {
  const [tab, setTab] = useState();

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      <div className={className}>{children}</div>
    </TabContext.Provider>
  );
}

export { TabContext };
