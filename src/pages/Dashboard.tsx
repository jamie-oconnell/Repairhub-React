import React, { useState } from "react";
import PageHeader from "../components/layout/PageHeader";
import Button from "../components/ui/Button";
import Widget from "../components/ui/dashboard/Widget";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = () => {
  const [layouts, setLayouts] = useState({
    lg: [
      { i: "1", x: 0, y: 0, w: 4, h: 2 },
      { i: "2", x: 4, y: 0, w: 4, h: 2 },
      { i: "3", x: 8, y: 0, w: 4, h: 2 },
      { i: "4", x: 0, y: 2, w: 4, h: 2 },
      { i: "5", x: 4, y: 2, w: 4, h: 2 },
      { i: "6", x: 8, y: 2, w: 4, h: 2 },
    ],
  });

  const updateWidget = (i: string, size: "small" | "medium" | "large") => {
    const target = layouts.lg.findIndex((x) => x.i === i);
    const newLayout = { ...layouts };
    const newSize = { w: 0, h: 0 };

    if (size === "small") {
      newSize.w = 2;
      newSize.h = 2;
    }
    if (size === "medium") {
      newSize.w = 4;
      newSize.h = 2;
    }
    if (size === "large") {
      newSize.w = 4;
      newSize.h = 3;
    }

    newLayout.lg[target] = { ...layouts.lg[target], ...newSize };
    setLayouts(newLayout);
  };

  let newLayouts = JSON.parse(JSON.stringify(layouts));

  return (
    <>
      <PageHeader>
        <span className="textstyle-header flex-1">Dashboard</span>
        <Button variant="secondary">Edit Dashboard</Button>
      </PageHeader>
      <div className="px-8 py-8 flex justify-center fill-screen-height mx-auto">
        <div className="w-full container">
          <ResponsiveGridLayout
            isResizable={false}
            // isDraggable={false}
            isBounded={true}
            // compactType="horizontal"
            style={{ minWidth: "100%", maxWidth: "100%" }}
            className="layout"
            layouts={newLayouts}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          >
            <Widget key="1" updateWidget={updateWidget}></Widget>
            <Widget key="2"></Widget>
            <Widget key="3"></Widget>
            <Widget key="4"></Widget>
            <Widget key="5"></Widget>
            <Widget key="6"></Widget>
          </ResponsiveGridLayout>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
