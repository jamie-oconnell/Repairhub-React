import React from 'react'

type Props = {
  active: boolean;
}

const TabPane: React.FC<Props> = ({ children, active }) => {
  return <div className={`${!active && 'hidden'}`}>{children}</div>
}

export default TabPane