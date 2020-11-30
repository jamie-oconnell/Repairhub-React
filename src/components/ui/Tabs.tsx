import React, { ReactElement, useState } from "react"
import Tab from "./Tab"

type Props = {
  children: ReactElement[]
}

const Tabs: React.FC<Props> = ({ children }) => {

  return (
    <div>
      <ul>
        {children.map((item, index) => (
          <Tab
            key={index}
            title={item.props.title}
            index={index}
          />
        ))}
      </ul>
    </div>
  )
}

export default Tabs