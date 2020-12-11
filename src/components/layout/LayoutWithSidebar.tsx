import React from "react";
import Drawer from "./drawer";
const LayoutWithSidebar: React.FC = ({ children }) => {
  return (
    <>
      <Drawer open={true} />
      <main className="flex min-h-screen">
        <div className="flex-1 bg-gray-5 pl-drawer">{children}</div>
      </main>
    </>
  );
};

export default LayoutWithSidebar;
