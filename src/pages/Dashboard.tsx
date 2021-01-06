import React from "react";
import PageHeader from "../components/layout/PageHeader";
import Button from "../components/ui/Button";
import Widget from "../components/ui/dashboard/Widget";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

// const layouts = React.useMemo(
//   () => [
//     {
//       lg: [
//         { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
//         { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
//         { i: "c", x: 4, y: 0, w: 1, h: 2 },
//       ],
//       md: [
//         { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
//         { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
//         { i: "c", x: 4, y: 0, w: 1, h: 2 },
//       ],
//     },
//   ],
//   []
// );

// interface Props {}

const Dashboard = () => {
  const layouts = {
    lg: [
      { i: "a", x: 0, y: 0, w: 1, h: 2 },
      { i: "b", x: 1, y: 0, w: 3, h: 2 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
    ],
    md: [
      { i: "a", x: 0, y: 0, w: 1, h: 2 },
      { i: "b", x: 1, y: 0, w: 3, h: 2 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
    ],
  };

  return (
    <>
      <PageHeader>
        <span className="textstyle-header flex-1">Dashboard</span>
        <Button variant="secondary">Edit Dashboard</Button>
      </PageHeader>
      <div className="px-8 py-8 flex justify-center fill-screen-height mx-auto">
        <div className="w-full container">
          <ResponsiveGridLayout
            // isResizable={false}
            // isDraggable={false}
            // width={"100%"}
            isBounded={true}
            style={{ minWidth: "100%" }}
            className="layout"
            layouts={layouts}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          >
            <Widget key="1"></Widget>
            <Widget key="2"></Widget>
            <Widget key="3"></Widget>
          </ResponsiveGridLayout>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
