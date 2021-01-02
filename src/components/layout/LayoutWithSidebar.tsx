import React, { ReactNode } from "react";
import Drawer from "./drawer";

interface Props {
  drawer: boolean;
  children: ReactNode;
  setDrawer: Function;
}

const LayoutWithSidebar = ({ children, drawer, setDrawer }: Props) => {
  return (
    <>
      <Drawer open={drawer} setOpen={setDrawer}/>
      <main className="flex min-h-screen">
        <div
          className={`flex-1 bg-gray-5 ${
            drawer ? "pl-drawer" : "pl-drawerSmall"
          }`}
        >
          {children}
        </div>
      </main>
    </>
  );
};

export default LayoutWithSidebar;
