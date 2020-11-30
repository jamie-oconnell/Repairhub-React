import React from 'react'

type Props = {
  title: string
}

const TabPane: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>
}

export default TabPane