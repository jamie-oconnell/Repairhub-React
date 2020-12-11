import React, { ReactNode, useState } from "react"

type Props = {
  children: ReactNode
}

const Tabs: React.FC<Props> = ({ children}) => {

  return (
    <div>
      <ul className="flex">
        {children}
      </ul>
    </div>
  )
}

export default Tabs